
const trinket_card = {
    name: "trinket_card",
    title: "Trinket Card",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
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
  
  export default trinket_card