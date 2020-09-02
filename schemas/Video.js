// Video.js
import MovieIcon from 'react-icons/lib/md/videocam'
import VideoPreview from '../components/VideoPreview'

export default {
    name: 'videoBlock',
    type: 'object',
    title: 'Video',
    icon: MovieIcon,
    fields: [
        {
            name: 'videoFile',
            type: 'file',
            title: 'video file',
            description: 'File format: mp4',
        },
        {
            title: 'Autospela',
            name: 'autoPlay',
            type: 'boolean',
        },
        {
            title: 'Bildtext',
            name: 'caption',
            type: 'simpleEditor',
        },
        {
            title: 'Fullbredd',
            name: 'fullWidth',
            type: 'boolean',
            options: {
                isHighlighted: true
            }
        },
        {
            title: 'Bakgrundsfärg',
            name: 'backgroundColor',
            type: 'color',
            options: {
                isHighlighted: true
            }
        },
    ],
    preview: {
        select: {
            video: 'videoFile',
            caption: 'caption',
            attribution: 'attribution'
        },
        component: VideoPreview
    }
}