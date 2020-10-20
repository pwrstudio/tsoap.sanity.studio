// ICONS
import { MdShoppingBasket, MdLink } from "react-icons/md"

export default {
  title: "Case Study (Emergent)",
  name: "caseStudyEmergent",
  icon: MdShoppingBasket,
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Category",
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Sensing", value: "sensing" },
          { title: "Archiving", value: "archiving" },
          { title: "Communicating", value: "communication" },
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
      validation: Rule => Rule.unique(),
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
      validation: Rule => Rule.unique(),
    },
    {
      title: "Text",
      name: "content",
      type: "contentEditor",
    },
    {
      title: "Image (Metadata)",
      description: "Used as preview when sharing to social media",
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Description (Metadata)",
      description: "If left empty, a description will be generated from the main text",
      name: "description",
      type: "text",
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
          icon: MdLink,
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
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: Rule => Rule.required(),
    },
  ],
}
