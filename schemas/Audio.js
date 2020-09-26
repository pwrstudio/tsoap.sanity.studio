// Audio.js
import AudioIcon from "react-icons/lib/md/audiotrack"

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
    },
  ],
}
