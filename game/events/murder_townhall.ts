export const murder_townhall: GameEvent = {
  place: 'townhall',
  start: [
    ["[player]", "Well... well... well..."],
    ["[player]", { face: 'happy' }, "I am a murderer now!"],
    ["[player]", "What should I do now"],
    {
      menu: {
        'Go to Inn': [
          { go_to: 'inn' }
        ],
        'Wander around': [
          ['[player]', "Let's walk around"],
        ]
      }
    }
  ],
  objects: {},
  trigger: {}
}