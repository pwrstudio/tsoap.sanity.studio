// Video.js
import MovieIcon from "react-icons/lib/md/videocam"
import VideoPreview from "../components/VideoPreview"

export default {
  name: "videoBlock",
  type: "object",
  title: "Video",
  icon: MovieIcon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "videoFile",
      type: "file",
      title: "video file",
      description: "File format: mp4",
    }
  ],
}
