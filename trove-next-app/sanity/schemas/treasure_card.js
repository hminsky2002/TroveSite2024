
const treasure_card = {
  name: "treasure_card",
  title: "Treasure Card",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      title: "Authors",
      name: "authors",
      type: "string"
    },
    {
        title: "Info",
        name: "info",
        type: 'array',
        of: [{ type: "block" }]
    },
    {
        name: "image",
        title: "Image",
        type: "image",
    } 
  ],
};

export default treasure_card