
const treasures = {
  name: "treasures",
  title: "Treasures",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      title: "Treasures Blurb",
      name: "treasures_blurb",
      type: "array",
      of: [{ type: "block" }]
    },
    {
        title: 'Treasure Cards',
        name: 'treasure_cards',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'treasure_card'},
            ]
          }
        ]
      }
  ],
};

export default treasures