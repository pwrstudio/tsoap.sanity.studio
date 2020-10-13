 // ICONS
import {
    MdViewAgenda,
  } from "react-icons/md"

export default {
    title: "Card",
    name: "card",
    icon: MdViewAgenda,
    type: "document",
    fields: [
      {
        title: "Title",
        name: "title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        title: "Content",
        name: "content",
        type: "contentEditor",
      }
    ],
  }
  