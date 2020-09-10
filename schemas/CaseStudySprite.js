import AvatarIcon from "react-icons/lib/md/image"
import GenerateSpritesheet from '../components/GenerateSpritesheet'


export default {
    title: 'Case Study Sprite',
    name: 'caseStudySprite',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Frames',
            name: 'frames',
            type: 'array',
            of: [
                {
                    title: 'Frame',
                    name: 'frame',
                    type: 'image'
                }
            ]
        },
        {
            title: 'Generate Spritesheet',
            name: 'fetch',
            type: 'string',
            inputComponent: GenerateSpritesheet
        },
        {
            title: 'Generated Spritesheet',
            name: 'spritesheet',
            type: 'image'
        },
        {
            title: 'JSON for Spritesheet',
            name: 'spriteJson',
            type: 'file'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200
            },
        },
    ], preview: {
        select: {
            title: 'title',
            frames: 'frames'
        },
        prepare(selection) {
            const { title, frames } = selection

            let previewImage = {}

            if (frames && frames.length > 0) {
                previewImage = frames[0]
            } else {
                previewImage = AvatarIcon
            }

            return {
                title: title,
                media: previewImage
            }
        }
    }
}
