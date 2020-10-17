import { format } from "date-fns"
import { MdEvent } from "react-icons/md"

export default {
  title: "Event",
  name: "event",
  type: "document",
  icon: MdEvent,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Participants",
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
      title: "Moderators",
      name: "moderators",
      type: "array",
      options: {
        editModal: "popover",
      },
      of: [
        {
          title: "Moderator",
          name: "authorLink",
          type: "reference",
          to: [{ type: "participant" }],
        },
      ],
      validation: Rule => Rule.unique(),
    },
    {
      title: "Connected case studies",
      name: "connectedCaseStudies",
      type: "array",
      options: {
        editModal: "popover",
      },
      of: [
        {
          title: "Case study",
          name: "caseStudyLink",
          type: "reference",
          to: [{ type: "caseStudyExhibition" }, { type: "caseStudyEmergent" }],
        },
      ],
      validation: Rule => Rule.unique(),
    },
    {
      title: "Video stream URL",
      name: "streamURL",
      type: "url",
    },
    {
      title: "Date & time",
      name: "startDate",
      type: "datetime",
      validation: Rule => Rule.required(),
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
      title: "Content",
      name: "content",
      type: "contentEditor",
    },
    {
      title: "Description (Metadata)",
      description: "If left empty, a description will be generated from the main text",
      name: "description",
      type: "text",
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
  preview: {
    select: {
      title: "title",
      startDate: "startDate",
      mainImage: "mainImage",
    },
    prepare(selection) {
      const { title, startDate, mainImage } = selection

      // const formattedDate = format(Date.parse(startDate), "yyyy.MM.dd hh:mm")

      return {
        title: title,
        subtitle: startDate
          ? format(Date.parse(startDate), "yyyy.MM.dd – HH:mm")
          : "",
        media: mainImage,
      }
    },
  },
}
