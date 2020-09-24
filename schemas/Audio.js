// Audio.js
import AudioIcon from "react-icons/lib/md/audiotrack"
import AudioPreview from "../components/AudioPreview"

export default {
  name: "audioBlock",
  type: "object",
  title: "Audio",
  icon: AudioIcon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "audioFile",
      type: "file",
      title: "Audio file",
      description: "File format: mp3",
    },
    {
      title: "Preview image",
      name: "previewImage",
      type: "image",
    },
  ],
}
