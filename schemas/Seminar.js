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
      title: "Discourse user group",
      name: "seminarGroup",
      type: "string",
      options: {
        list: [
          { title: "CN_Claims_Property", value: "CN_Claims_Property" },
          { title: "CN_Clashing_Tempo", value: "CN_Clashing_Tempo" },
          { title: "CN_Commodity_Flows", value: "CN_Commodity_Flows" },
          { title: "CN_ExhaustionImagine", value: "CN_ExhaustionImagine" },
          { title: "CN_Risk_Equity", value: "CN_Risk_Equity" },
          { title: "CN_Un_Bounded_Engine", value: "CN_Un_Bounded_Engine" },
        ],
      },
    },
    {
      title: "First text block",
      name: "firstTextBlock",
      type: "contentEditor",
    },
    {
      title: "Link (More information)",
      name: "moreInformationLink",
      type: "url",
    },
    {
      title: "Second text block",
      name: "secondTextBlock",
      type: "contentEditor",
    },
    {
      title: "Link (big blue button)",
      name: "bbbLink",
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
