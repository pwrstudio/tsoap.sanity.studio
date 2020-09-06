import { format, getYear } from "date-fns";

export default {
    title: 'Event',
    name: 'event',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Connected participants',
            name: 'authors',
            type: 'array',
            options: {
                editModal: 'popover'
            },
            of: [
                {
                    title: 'Participant',
                    name: 'authorLink',
                    type: 'reference',
                    to: [{ type: 'participant' }]
                }
            ]
        },
        {
            title: 'Video stream ID',
            name: 'streamId',
            type: 'string'
        },
        {
            title: 'Start date & time',
            name: 'startDate',
            type: 'datetime'
        },
        {
            title: 'End date & time',
            name: 'endDate',
            type: 'datetime'
        },
        {
            title: 'Main image',
            name: 'mainImage',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            title: 'Content',
            name: 'content',
            type: 'contentEditor'
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
    ],
    preview: {
        select: {
            title: 'title',
            startDate: 'startDate',
            mainImage: 'mainImage'
        },
        prepare(selection) {
            const { title, startDate, mainImage } = selection

            // const formattedDate = format(Date.parse(startDate), "yyyy.MM.dd hh:mm")

            return {
                title: title,
                subtitle: startDate ? format(Date.parse(startDate), "yyyy.MM.dd – HH:mm") : '',
                media: mainImage
            }
        }
    }
}
