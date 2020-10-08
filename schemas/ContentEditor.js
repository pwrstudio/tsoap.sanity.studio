import React from "react"

// ICONS
import highlighter from "react-icons/lib/md/highlight"
import footnote from "react-icons/lib/md/short-text"
import alignCenter from "react-icons/lib/md/format-align-center"
import alignLeft from "react-icons/lib/md/format-align-left"
import alignRight from "react-icons/lib/md/format-align-right"
import imageIcon from "react-icons/lib/md/image"

const highlightRender = props => (
  <span style={{ backgroundColor: "yellow" }}>{props.children}</span>
)

const alignCenterRender = props => (
  <p style={{ textAlign: "center" }}>{props.children}</p>
)

const alignRightRender = props => (
  <p style={{ textAlign: "right" }}>{props.children}</p>
)

const footNoteRender = props => (
  <span style={{ background: "rgba(0,0,255,0.2)" }}>{props.children}</span>
)

const noteRender = props => (
  <p style={{ fontSize: "0.8em" }}>{props.children}</p>
)

export default {
  type: "object",
  name: "contentEditor",
  options: { collapsible: false, collapsed: false },
  fields: [
    {
      title: "Content editor",
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            {
              title: "Center aligned",
              value: "center-aligned",
              blockEditor: {
                render: alignCenterRender,
              },
            },
            {
              title: "Right aligned",
              value: "right-aligned",
              blockEditor: {
                render: alignRightRender,
              },
            },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
            {
              title: "Note",
              value: "note",
              blockEditor: {
                render: noteRender,
              },
            },
          ],
          marks: {
            decorators: [
              {
                title: "Strong",
                value: "strong",
              },
              {
                title: "Emphasis",
                value: "em",
              },
              {
                title: "Highlight",
                value: "highlight",
                blockEditor: {
                  icon: highlighter,
                  render: highlightRender,
                },
              },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "string",
                  },
                ],
              },
              {
                name: "footnote",
                type: "object",
                title: "Footnote",
                blockEditor: {
                  icon: footnote,
                  render: footNoteRender,
                },
                fields: [
                  {
                    title: "Footnote text",
                    name: "content",
                    type: "simpleEditor",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          icon: imageIcon,
          fields: [
            {
              title: "Bildtext",
              name: "caption",
              type: "simpleEditor",
              options: {
                isHighlighted: true,
              },
            },
            {
              name: "attribution",
              type: "string",
              title: "Attribution",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
        {
          type: "videoBlock",
        },
        {
          type: "audioBlock",
        },
        {
          type: "embedBlock",
        },
      ],
    },
  ],
}
