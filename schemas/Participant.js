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
