import Account from "react-icons/lib/md/account-circle"

export default {
  title: "Participant",
  name: "participant",
  icon: Account,
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Discourse username",
      name: "username",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "Avatar",
      name: "avatarLink",
      type: "reference",
      to: [{ type: "avatar" }],
    },
    {
      title: "Seminar group",
      name: "seminarGroup",
      type: "string",
      options: {
        list: [
          { title: "Group 1", value: "group-1" },
          { title: "Group 2", value: "group-2" },
          { title: "Group 3", value: "group-3" },
        ],
      },
    },
    {
      title: "Biography",
      name: "biography",
      type: "contentEditor",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
