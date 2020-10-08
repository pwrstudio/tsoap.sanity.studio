// Embed.js
import EmbedIcon from "react-icons/lib/md/picture-in-picture"

export default {
  name: "embedBlock",
  type: "object",
  title: "Embed code",
  icon: EmbedIcon,
  fields: [
    {
      name: "url",
      description: "Link to Youtube or Vimeo video or soundcloud track",
      type: "url",
      title: "URL",
    },
    {
      title: "Caption",
      name: "caption",
      type: "simpleEditor",
    },
  ],
}
