export const intro: GameEvent = {
  place: 'inn',
  start: [
    ["theodore", { clothes: 'formal-day' }, "Finally, you're here [player]"],
    ["theodore", "Welcome to our small town Plymouth"],
    ["theodore", "This is your room, make yourself at home"],
    ["[player]", "Thank you Mr. Theodore"],
    ["theodore", "You're welcome dear."],
  ],
  objects: {
    drawer: {
      trigger: {
        default: [
          ['drawer', 'Opening drawer...'],
          ['[player]', { face: 'sad' }, 'Hmm... there is nothing here']
        ]
      }
    },
    bed: {
      trigger: {
        default: [
          ['[player]', 'This bed is messed up...'],
          {
            menu: {
              'Go outside': [
                ['[player]', "I can't stand this bed"],
                ['[player]', "Let's get fresh air to the townhall!"],
                { go_to: 'townhall' }
              ],
              'Clean the bed': [
                ['[player]', "Let's clean the bed"],
                ['bed', "...Stinky Odor..."],
                ['[player]', "Urgh... the smell is so horrible."],
              ]
            }
          }
        ]
      }
    },
    door: {
      trigger: {
        'default': [
          ['[player]', 'No, not yet...']
        ],
        'all-clicked': [
          ['[player]', "Let's get fresh air"],
          { go_to: 'townhall' }
        ]
      }
    }
  },
  trigger: {
    'all-clicked': {
      dialog: [
        ['[player]', 'I want to go outside'],
        ['[player]', 'Door is on the left']
      ]
    }
  }
}