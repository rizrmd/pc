export const inn: Place = {
  name: 'Plymouth Inn',
  events: {
    "murder_townhall": [
      ["[player]", "Finally back to the inn after killing Mr. Theodore!"],
      {
        menu: {
          'Kill the left neighbour': [
            ['[player]', "Let's kill left neighbour"],
          ],
          'Rest in bed': [
            ['[player]', "So tired..."],
            ['bed', "...Stinky Odor..."],
            ['[player]', "Urgh... this bed still stinky."],
          ]
        }
      }
    ]
  }
};
