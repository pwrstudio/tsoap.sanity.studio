import Location from "react-icons/lib/md/my-location"
import GenerateSpritesheet from "../components/GenerateSpritesheet"

export default {
  title: "Landmark",
  name: "landmark",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Frames",
      name: "frames",
      type: "array",
      of: [
        {
          title: "Frame",
          name: "frame",
          type: "image",
        },
      ],
    },
    {
      title: "X-coordinate",
      name: "x",
      type: "number",
    },
    {
      title: "Y-coordinate",
      name: "y",
      type: "number",
    },
    {
      title: "Generate Spritesheet",
      name: "fetch",
      type: "string",
      inputComponent: GenerateSpritesheet,
    },
    {
      title: "Generated Spritesheet",
      name: "spritesheet",
      type: "image",
    },
    {
      title: "JSON for Spritesheet",
      name: "spriteJson",
      type: "file",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      frames: "frames",
    },
    prepare(selection) {
      const { title, frames } = selection

      let previewImage = {}

      if (frames && frames.length > 0) {
        previewImage = frames[0]
      } else {
        previewImage = Location
      }

      return {
        title: title,
        media: previewImage,
      }
    },
  },
}
