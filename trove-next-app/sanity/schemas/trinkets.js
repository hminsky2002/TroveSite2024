
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
      title: 'Trinket Cards',
      name: 'trinket_cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'trinket_card'},
          ]
        }
      ]
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
    },
    {name: 'email',
    title: 'Email Link',
    type: 'url'
    }
  ],
};

export default trinkets