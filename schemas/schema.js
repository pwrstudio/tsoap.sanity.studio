// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Schemas
import page from './Page'
import event from './Event'
import caseStudy from './CaseStudy'
import participant from './Participant'
import contentEditor from './ContentEditor'
import simpleEditor from './SimpleEditor'
import embedBlock from './Embed'
import videoBlock from './Video'
import audioBlock from './Audio'
import gfxAvatar from './Avatar'
import gfxMap from './Map'
import graphicsSettings from './GraphicsSettings'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([graphicsSettings, gfxAvatar, gfxMap, page, event, caseStudy, participant, contentEditor, simpleEditor, embedBlock, videoBlock, audioBlock])
})
