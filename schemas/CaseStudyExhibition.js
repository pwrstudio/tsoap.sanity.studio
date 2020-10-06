import Home from "react-icons/lib/md/home"
import Link from "react-icons/lib/md/link"

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
      title: "Category",
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Sensing", value: "sensing" },
          { title: "Archiving", value: "archiving" },
          { title: "Communication", value: "communication" },
          { title: "Consensus building", value: "consensus-building" },
        ],
      },
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
        {
          title: "External link",
          name: "linkBlock",
          type: "object",
          icon: Link,
          title: "External link",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              type: "url",
              name: "url",
              title: "URL",
            },
            {
              title: "File type",
              name: "fileType",
              type: "string",
            },
          ],
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
