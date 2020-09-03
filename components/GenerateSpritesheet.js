import React from 'react'
import PropTypes from 'prop-types'
// import { Timepicker } from 'react-timepicker'
// import { padStart } from 'lodash'
import { withDocument } from 'part:@sanity/form-builder'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'

// 1. Import react-timepicker CSS
import './GenerateSpritesheet.css?raw'

// 2. Transform hours and minutes to a formatted time string
// const outgoingValue = (hours, minutes) => `${padStart(hours, 2, '0')}:${padStart(minutes, 2, '0')}`

// 3. Transform a formatted time string to hours and minutes
// const incomingValues = value => {
//     if (!value) {
//         return {}
//     }
//     return {
//         tag: value,
//     }
// }

// 4. Create a Sanity PatchEvent based on a change in time value
// const createPatchFrom = value => PatchEvent.from(value === '' ? unset() : set(value))

class GenerateSpritesheet extends React.Component {

    // // 5. Declare shape of React properties
    static propTypes = {
        type: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string
        }).isRequired,
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired
    }


    hitServer = t => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(this.props.document);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://graphics.tsoap.dev:3344/avatar", requestOptions)
            .then(response => response.json())
            .then(result => console.dir(result))
            .catch(error => console.log('error', error));
    }


    render = () => {
        return (
            <FormField >
                <div className='container'>
                    <button className='getTweets' onClick={this.hitServer}>Generate Spritesheet</button>
                </div>
            </FormField>
        )
    }
}

export default withDocument(GenerateSpritesheet)

