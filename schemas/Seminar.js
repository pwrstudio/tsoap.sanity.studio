import SMS from "react-icons/lib/md/sms"

export default {
  title: "Seminar",
  name: "seminar",
  icon: SMS,
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
      name: "authors",
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
      title: "Intro text",
      name: "introText",
      type: "contentEditor",
    },
    {
      title: "Reading list",
      name: "readingList",
      type: "contentEditor",
    },
    {
      title: "Join link (big blue button)",
      name: "joinLink",
      type: "url",
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
