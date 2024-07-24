import { arrival_ferry } from "_/animations/arrival_ferry";
import { harbour } from "_/places/harbour";

export const intro_artemis: GameEvent = {
  place: harbour,
  start: [
    { animation: arrival_ferry },
    {
      narration: `The English coastline emerges from the morning mist, a tapestry of green hills rolling gently into the quaint town of Featherfall. The seagulls cry out, heralding the ferry's approach, their chorus intertwining with the creaking of wood and the sloshing of the waves. You lean on the railing, your eyes drinking in the sight, the sea breeze weaving through your hair, carrying whispers of untold stories.As the ferry docks with a gentle thud, the captain claps you on the shoulder, his smile as wide as the horizon.`,
    },
    [
      "captain_ferry",
      "Welcome to Featherfall, Miss [user_lastname]. The jewel of the coast, she is. May your stay be as pleasant as the morning tide.",
    ],
    { animation: "arrival_fadeout" },
    {
      narration:
        "Stepping off the ship, your boots meet the solid wood of the docks, the pulse of the coastal town greeting you. ",
    },
    { animation: "artemis_cg_1" },
    {
      narration:
        "There's a rhythm to the place, an ebb and flow not unlike the sea that brought you here. Seagulls wheel overhead, their calls a raucous backdrop to the hum of activity. Fishermen shout to one another as they sort through wriggling catches, their voices roughened by salt and wind. Merchants hawk fresh produce and seafood, their stalls a mosaic of color and scent that draws the eye and tempts the palate.",
    },
    {
      narration:
        "You take a moment to breathe it all in—the cacophony of life and labour, the tang of fish in the air, the occasional laugh that cuts through the steady drone of commerce. Your first impression of this place doesnt quite match the silent, haunting dream that sent you here, to the very edge of the known world in search of answers about your uncle's death. You can't help but wonder which shadows Featherfall might mask behind the bustling morning business.",
    },
    { avatar: "artemis", face: "normal", placement: "middle" },
    {
      narration:
        "You're so lost in thought that the crowd before you becomes nothing more than a blur of faces—until one stands out. A young woman, not so different in age from yourself, catches your attention. She's poised amidst the chaos, an observer rather than a participant. Her clothing is simple but well-kept, a testament to practicality, and there's a sharpness in her eyes that suggests she misses little. ",
    },
    {
      narration:
        "Curiosity sparks within you, mirrored in the tilt of her head as she watches you navigate this new terrain. Your eyes meet across the bustling dock, and for a fleeting second, there's an unspoken understanding, a recognition of sorts. ",
    },
    { avatar: "artemis", face: "normal", placement: "right" },
    { avatar: "[player]", face: "normal", placement: "left" },
    // TODO: should i put artemis here ?
    [
      "artemis",
      "Bonjour, or should I say, good morning? Not often we see new faces around these parts, especially ones that come across the sea.",
    ],
    {
      menu: {
        "option 1": [
          [
            "[player]",
            "Good morning. It's quite a change of scenery for me. I'm [player]. I actually need to find my way to an inn—or perhaps you know where I can find Theodore Edwards, the solicitor?",
          ],
          ["artemis", "Pleasure to meet you, [player], I'm Artemis Monroe."],
          [
            "artemis",
            "Let's start with the inn so you can drop off your belongings. It's called The Midnight Rose — charming place.",
          ],
          [
            "[player]",
            "The Midnight Rose sounds intriguing. Lead on and perhaps along the way, you could tell me a little about Featherfall?",
          ],
          { animation: "market_fadeout" },
          { start_event: "arrival_inn" },
        ],
        "option 2": [
          [
            "[player]",
            "Oh hello. Both are quite fine. I didnt expect to be greeted so friendly at arrival. My name's [player].",
          ],
          [
            "artemis",
            "Unexpected but fortuitous, I hope. Welcome to Featherfall, [player]. If you need an introduction to the town or its people, consider me, Artemis Monroe, at your service.",
          ],
          [
            "[player]",
            "An introduction, you say? I'm sure there's a story or two behind that offer. Lead the way, Miss Monroe.",
          ],
          [
            "artemis",
            "Every offer has a story, but some are simpler than others. Mine's just the usual—small town, looking out for one another. This way to the heart of Featherfall.",
          ],
          [
            "[player]",
            "Small town hospitality, huh? I suppose I could use a local's perspective. Thanks, Artemis.",
          ],
          [
            "artemis",
            "Exactly. And don't mention it. I find that understanding the lay of the land is crucial, whether you're staying a day or a lifetime. Each corner of Featherfall tells a different tale.",
          ],
          { animation: "market_fadeout" },
          { start_event: "arrival_inn" },
        ],
        "option 3": [
          [
            "[player]",
            "Neither, just a nod will do. I'm not here to soak in the sights. I'm [player], and I'm here on pressing business.",
          ],
          [
            "artemis",
            "Straight to the point, I respect that. I'm Artemis Monroe. And while you might not be here for the sights, maybe I can help with your business?",
          ],
          [
            "[player]",
            "Walking with company sounds better than walking alone. And who knows, if you're familiar with Mr. Edwards, maybe you can give me some insight into what to expect.",
          ],
          [
            "artemis",
            "I've had my fair share of dealings with Theodore. He's a good man, meticulous in his work. But be prepared for a bit of a wait; he's thorough to a fault.",
          ],
          { animation: "market_fadeout" },
          { start_event: "arrival_inn" },
        ],
      },
    },
  ],
  objects: {},
  trigger: {},
};
