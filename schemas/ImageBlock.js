import ImageIcon from "react-icons/lib/md/image"

export default {
  name: "imageBlock",
  type: "object",
  icon: ImageIcon,
  title: "Image",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
}
