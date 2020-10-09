// ICONS
import { MdAccountCircle } from "react-icons/md"

export default {
  title: "Participant",
  name: "participant",
  icon: MdAccountCircle,
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Discourse username",
      name: "username",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Seminar",
      name: "seminarLink",
      type: "reference",
      to: [{ type: "seminar" }],
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
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      seminar: "seminarLink.title",
    },
    prepare(selection) {
      const { title, seminar } = selection
      const subtitle = seminar
      return {
        title: title,
        subtitle: subtitle,
      }
    },
  },
}
