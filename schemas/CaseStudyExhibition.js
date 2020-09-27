import Home from "react-icons/lib/md/home"

export default {
  title: "Case Study (Exhibition)",
  name: "caseStudyExhibition",
  icon: Home,
  type: "document",
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
      title: "Connected events",
      name: "connectedEvents",
      type: "array",
      options: {
        editModal: "popover",
      },
      of: [
        {
          title: "Event",
          name: "eventLink",
          type: "reference",
          to: [{ type: "event" }],
        },
      ],
      validation: (Rule) => Rule.unique(),
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
      title: "Material",
      name: "material",
      type: "array",
      of: [
        {
          type: "imageBlock",
        },
        {
          type: "audioBlock",
        },
        {
          type: "videoBlock",
        },
        {
          type: "pdfBlock",
        },
        {
          type: "fileBlock",
        },
      ],
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
      title: "Sprite",
      name: "spriteLink",
      type: "reference",
      to: [{ type: "caseStudySprite" }],
      validation: (Rule) => Rule.required(),
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
