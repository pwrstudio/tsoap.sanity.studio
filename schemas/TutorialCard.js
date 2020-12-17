 // ICONS
 import {
    MdHelp,
  } from "react-icons/md"

export default {
    title: "Tutorial card",
    name: "tutorialCard",
    icon: MdHelp,
    type: "document",
    __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
    fields: [
    //   {
    //     title: "Title",
    //     name: "title",
    //     type: "string",
    //     validation: (Rule) => Rule.required(),
    //   },
      {
        title: "Slides",
        name: "slides",
        type: "array",
        of: [
          {
            title: 'Slide',
            name: 'slide',
            type: 'object',
            fields: [
              {
                title: "Top image",
                name: "topImage",
                type: "image",
              },
              {
                title: "Content",
                name: "content",
                type: "contentEditor",
              }
            ],
            preview: {
              select: {
                topImage: "topImage",
              },
              prepare(selection) {
                const { topImage} = selection
          
                return {
                  title: '',
                  media: topImage,
                }
              },
            },
          }
        ],
      },
      {
        title: "Disable tutorial cards",
        name: "disableTutorialCards",
        type: "boolean",
      },
    ],
  }