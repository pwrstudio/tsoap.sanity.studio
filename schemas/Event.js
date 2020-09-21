import { format, getYear } from "date-fns"

export default {
  title: "Event",
  name: "event",
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
    },
    {
      title: "Video stream ID",
      name: "streamId",
      type: "string",
    },
    {
      title: "Date & time",
      name: "startDate",
      type: "datetime",
      validation: (Rule) => Rule.required(),
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
