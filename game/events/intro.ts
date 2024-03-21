export const intro: GameEvent = {
  place: 'inn',
  start: [
    ["theodore", { clothes: 'formal-day' }, "Finally, you're here [player]"],
    ["theodore", "Welcome to our small town Plymouth."],
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
          ['[player]', 'Kok berantakan ya...'],
          {
            menu: {
              'Beresin Kamar': [
                ['[player]', 'Yuk diberesin'],
                { action: 'go-to-place', place: 'townhall' }
              ],
              'Jarno ae': [
                ['[player]', 'Alah males']
              ]
            }
          }
        ]
      }
    },
    door: {
      trigger: {
        'default': [
          ['door', 'I need to explore of this room']
        ],
        'all-clicked': [
          ['[player]', "Let's get fresh air"],
          { action: 'go-to-town' }
        ]
      }
    }
  },
  trigger: {
    'all-clicked': {
      dialog: [['[player]', 'I want to go outside']]
    }
  }
}