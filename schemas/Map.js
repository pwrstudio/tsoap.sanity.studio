import LoadGrid from "../components/LoadGrid"

export default {
  title: "Map",
  name: "gfxMap",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Main map texture",
      description: "4000x4000 pixel png",
      name: "mainImage",
      type: "image",
    },
    {
      title: "Mini map",
      description:
        "Can be any size – but should have same aspect ratio as main map.",
      name: "miniImage",
      type: "image",
    },
    {
      title: "Pathfinding grid",
      description: "400x400 pixel png",
      name: "pathfindingGrid",
      type: "image",
    },
    {
      title: "Load grid",
      name: "fetch",
      type: "string",
      inputComponent: LoadGrid,
    },
  ],
}
