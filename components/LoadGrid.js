import React from 'react'
import PropTypes from 'prop-types'
import { withDocument } from 'part:@sanity/form-builder'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'
import classNames from "classnames";

// 1. Import react-timepicker CSS
import './LoadGrid.css?raw'

// 2. Transform hours and minutes to a formatted time string
// const outgoingValue = (hours, minutes) => `${padStart(hours, 2, '0')}:${padStart(minutes, 2, '0')}`

// 4. Create a Sanity PatchEvent based on a change in time value
const createPatchFrom = value => PatchEvent.from(value === '' ? unset() : set(value))

class LoadGrid extends React.Component {

    // // 5. Declare shape of React properties
    static propTypes = {
        type: PropTypes.shape({
          title: PropTypes.string,
        }).isRequired,
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired
      };

    message = ''
    working = false
    error = false

    hitServer = t => {

        this.message = ''
        this.working = true
        this.error = false
        this.forceUpdate();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(this.props.document);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://graphics.tsoap.dev/grid", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.message = 'Pathfinding grid succesfully loaded!'
                this.working = false
                createPatchFrom(Date.now())
                console.dir(result)
                this.forceUpdate();
            })
            .catch(error => {
                this.message = 'Loading of pathfinding grid failed!: ' + error
                this.working = false
                this.error = true
                console.log('error', error)
                this.forceUpdate();
            });
    }

    render = () => {
        const {value} = this.props

        return (
            <FormField >
                <div className='container'>
                    <button className={classNames({
                        genButton: true,
                        working: this.working,
                        error: this.error
                        })} onClick={this.hitServer}>Load Grid</button>
                    <div className={classNames({
                        message: true,
                        error: this.error
                        })}>{this.message}</div>
                </div>
            </FormField>
        )
    }
}

export default withDocument(LoadGrid)

