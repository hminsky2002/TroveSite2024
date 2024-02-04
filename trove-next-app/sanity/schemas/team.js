
const team = {
    name: "team",
    title: "Team",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string"
      },
      {
        name: "blurb",
        title: "Blurb",
        type: "string"
      },
      {
        title: 'Team Cards',
        name: 'team_cards',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'team_card'},
            ]
          }
        ]
      }
    ],
  };
  
  export default team