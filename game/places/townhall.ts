export const townhall: Place = {
  name: 'Town Hall',
  events: {
    intro: [
      ["theodore", "Oh [player], have you rest?"],
      ["[player]", "Yes!"],
      ["[player]", { face: 'angry' }, "...Let's kill Mr. Theodore..."],
      ["[player]", "-- Took out a knife --"],
      ["[player]", "-- Stab Mr.Theodore --"],
      { start_event: 'murder_townhall' }
    ]
  }
};
