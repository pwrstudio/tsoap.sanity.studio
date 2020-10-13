import { MdAudiotrack } from "react-icons/md";

export default {
  title: "Audio Installation",
  name: "audioInstallation",
  type: "document",
  icon: MdAudiotrack,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Connected participants",
      name: "participants",
      type: "array",
      options: {
        editModal: "popover",
      },
      of: [
        {
          title: "Participant",
          name: "authorLink",
          type: "reference",
          to: [{ type: "participant" }],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: "Turn off autoplay",
      name: "noAutoplay",
      type: "boolean",
    },
    {
      title: "Audio stream URL",
      name: "streamURL",
      type: "url",
    },
    {
      title: "Sound file",
      name: "soundFile",
      description: "Format: mp3",
      type: "file",
    },
    {
      title: "Main image",
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Text",
      name: "content",
      type: "contentEditor",
    },
    {
      title: "X-coordinate",
      name: "x",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Y-coordinate",
      name: "y",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Radius",
      description: "In pixels, defaiult is 400",
      name: "radius",
      type: "number",
    },
    {
      title: "Sprite",
      name: "spriteLink",
      type: "reference",
      to: [{ type: "caseStudySprite" }],
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
