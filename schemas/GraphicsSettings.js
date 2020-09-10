import LoadGrid from '../components/LoadGrid'

export default {
    title: 'Graphics settings',
    name: 'graphicsSettings',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Active avatars',
            name: 'activeAvatars',
            type: 'array',
            options: {
                editModal: 'popover'
            },
            of: [
                {
                    title: 'Avatar',
                    name: 'avatarLink',
                    type: 'reference',
                    to: [{ type: 'avatar' }]
                }
            ]
        },
        {
            title: 'Active map',
            name: 'mapLink',
            type: 'reference',
            to: [{ type: 'gfxMap' }]
        },
        {
            title: 'Load grid',
            name: 'fetch',
            type: 'string',
            inputComponent: LoadGrid
        }
    ]
}
