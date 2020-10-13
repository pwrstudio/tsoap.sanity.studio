export default {
  title: "Active streams",
  name: "activeStreams",
  type: "document",
  //   __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Active stream (Main area)",
      name: "mainStream",
      type: "reference",
      to: [{ type: "event" }],
    },
    {
      title: "Active stream (Support area)",
      name: "supportStream",
      type: "url",
    },
  ],
}
