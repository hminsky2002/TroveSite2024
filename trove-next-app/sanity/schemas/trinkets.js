
const trinkets = {
  name: "trinkets",
  title: "Trinkets",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      title: "Top Bio",
      name: "top_bio",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "trinkets",
      title: "Trinket Images",
      type: "array",
      of:[{type: "image"}]
    },
    {
        title: "Bottom Bio",
        name: "Bottom_bio",
        type: "array",
        of: [{ type: "block" }]
    },
    {
      name:'button_image',
      title:'Button',
      type:'image'
    }
  ],
};

export default trinkets