export default {
    title: 'Map',
    name: 'gfxMap',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Main map texture',
            description: '4000x4000 pixel png',
            name: 'mainImage',
            type: 'image'
        },
        {
            title: 'Pathfinding grid',
            description: '400x400 pixel png',
            name: 'pathfindingGrid',
            type: 'image'
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
    ]
}
