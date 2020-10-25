// ICONS
import { MdGamepad, MdPlace } from "react-icons/md"

// CUSTOM INPUT
import StartNPC from "../components/StartNPC"

export default {
  title: "NPC",
  name: "npc",
  icon: MdGamepad,
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
      title: "(Re)start NPC",
      name: "fetch",
      type: "string",
      inputComponent: StartNPC,
    },
    {
      title: "Drop-off points",
      name: "dropOffPoints",
      type: "array",
      of: [
        {
          title: "Point",
          name: "point",
          icon: MdPlace,
          type: "object",
          fields: [
            {
              title: "X",
              name: "x",
              type: "number",
              validation: Rule => Rule.required(),
            },
            {
              title: "Y",
              name: "y",
              type: "number",
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}
