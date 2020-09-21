// Embed.js
import EmbedIcon from "react-icons/lib/md/picture-in-picture"
import EmbedPreview from "../components/EmbedPreview"

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
      title: "Bildtext",
      name: "caption",
      type: "simpleEditor",
    },
    {
      title: "Fullbredd",
      name: "fullWidth",
      type: "boolean",
      options: {
        isHighlighted: true,
      },
    },
    {
      title: "Bakgrundsfärg",
      name: "backgroundColor",
      type: "color",
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      url: "url",
      caption: "caption",
      attribution: "attribution",
    },
    component: EmbedPreview,
  },
}
