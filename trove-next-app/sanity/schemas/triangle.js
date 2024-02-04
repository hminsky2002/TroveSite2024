
const triangle = {
    name: "triangle",
    title: "Triangle",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string"
      },
      {
        title: "Triangle Blurb",
        name: "triangle_blurb",
        type: "array",
        of: [{ type: "block" }]
      },
    ],
  };
  
  export default triangle