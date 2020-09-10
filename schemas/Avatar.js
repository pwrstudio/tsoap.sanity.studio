import AvatarIcon from "react-icons/lib/md/image"
import GenerateSpritesheet from '../components/GenerateSpritesheet'

export default {
    title: 'Avatar',
    name: 'avatar',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Rest',
            name: 'rest',
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
            title: 'Front',
            name: 'front',
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
            title: 'Back',
            name: 'back',
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
            title: 'Left',
            name: 'left',
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
            title: 'Right',
            name: 'right',
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
            rest: 'rest'
        },
        prepare(selection) {
            const { title, rest } = selection

            let previewImage = {}

            if (rest && rest.length > 0) {
                previewImage = rest[0]
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
