 // ICONS
 import {
    MdStar,
  } from "react-icons/md"

export default {
    title: "Featured events",
    name: "featuredEvents",
    icon: MdStar,
    type: "document",
    __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
    fields: [
      {
        title: "Featured events",
        name: "events",
        type: "array",
        of: [
            {
              title: "Event",
              name: "eventLink",
              type: "reference",
              to: [{ type: "event" }],
            },
          ],
          validation: Rule => Rule.unique(),
      }
    ],
  }