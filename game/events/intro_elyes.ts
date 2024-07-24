import { carriage_inside } from "_/animations/carriage/carriage_inside";
import { carriage_inside_dmg } from "_/animations/carriage/carriage_inside_dmg";
import { carriage_inside_dmg_light } from "_/animations/carriage/carriage_inside_dmg_light";
import { carriage_inside_shake } from "_/animations/carriage/carriage_inside_shake";
import { cg_elyes_horseback } from "_/animations/cg/cg_elyes_horseback";
import { cg_elyes_intro_1 } from "_/animations/cg/cg_elyes_intro_1";
import { cg_elyes_intro_2 } from "_/animations/cg/cg_elyes_intro_2";
import { cg_elyes_onfoot } from "_/animations/cg/cg_elyes_onfoot";
import { map_market } from "_/animations/map_market";
import { road_south_carriage } from "_/animations/road/road_south_carriage";
import { road_south_fadeout } from "_/animations/road/road_south_fadeout";
import { road_south } from "_/places/road_south";

export const intro_elyes: GameEvent = {
  place: road_south,
  start: [
    { animation: carriage_inside },
    {
      narration:
        "The carriage jostles you as it navigates the muddy road, the rhythm of hooves clopping over the sodden earth of the marshes a nearly lulling backdrop to your wandering thoughts. The early rain has given way to a dense, lazy fog that permeates the morning air like a ghostly breath among the living. A chill runs through you as your mind drifts to the nightmare that has haunted you for days - the lifeless body of your uncle, his eyes and mouth frozen wide in an expression of pure terror. The memory is so vivid, so visceral, that you can almost smell the coppery tang of blood in the air.",
    },
    {
      narration:
        "Lost in the labyrinth of your dark musings, the sudden, sharp crack that splits the air makes you jump.",
    },
    { animation: carriage_inside_shake },
    {
      narration:
        "Your heart leaps into your throat as the carriage violently lurches and tilts, throwing you hard against the side. Instinctively, you cry out, your knuckles white as you grip the plush seat, bracing yourself against the alarming angle. From outside, the coachman's gruff voice pierces the startled ringing in your ears.",
    },
    { animation: carriage_inside_dmg },
    [
      "coachman_william",
      "Bloody hell! Damn this godforsaken road to the depths! Just my pox-ridden luck, this is!",
    ],
    {
      narration:
        "Very sudden the clatter of approaching hoofbeats mingles with his colorful cursing, and a deep, richly amused laugh rumbles over the string of profanities.",
    },
    [
      "stranger",
      "Good heavens, Mr. Buckley! I'd thought you'd left the sailor's tongue behind when you traded the sea for the road! Yet here you are, still swearing like a pirate in the King's own country!",
    ],
    [
      "stranger",
      "Beggin' your pardon, my Lord, but even the saints themselves would curse if they had to deal with these thrice-damned roads! It's enough to make a man miss the honest roll of the waves, it is!",
    ],
    {
      narration:
        "You seem forgotten by the coachman and decide to make yourself heard.",
    },
    {
      menu: {
        options_1: [
          ["[player]", "Well, that's one way to liven up a dreary morning!"],
        ],
        options_2: [["[player]", "Is everything alright? What happened?"]],
        options_3: [
          [
            "[player]",
            "Excuse me, but could someone please explain what's going on?",
          ],
        ],
      },
    },
    {
      narration:
        "A beat of silence follows, in which you can almost feel the weight of the men's attention shifting to the carriage. When the stranger speaks again, his tone has lost its mirthful edge, concern now coloring his smooth, cultured voice.",
    },
    [
      "stranger",
      "William, you daft man, why didn't you tell me you had a passenger? The poor woman must be frightened half to death!",
    ],
    {
      narration:
        "Without further preamble, the carriage door swings open, and you find yourself face to face with your mysterious rescuer.",
    },
    { animation: carriage_inside_dmg_light },
    {
      narration:
        "In the muted light filtering through the fog, you get your first real look at him - a tall, striking figure of a man, his features sharp and angular, with an aristocratic bearing that commands attention. His dark hair is pulled back in a low ponytail, a few errant strands framing a face that could have been chiseled from marble. But it's his eyes that draw you in - a piercing, intelligent blue, at once both intense and gentle.",
    },
    { animation: cg_elyes_intro_1 },
    [
      "stranger",
      "My deepest apologies, Miss. Are you quite alright? I'm afraid we've had a bit of a mishap.",
    ],
    { animation: cg_elyes_intro_2 },
    {
      narration:
        "He extends a hand to you, his grip firm and reassuring as he helps you down from the precariously angled carriage.",
    },
    { animation: road_south_carriage },
    {
      narration:
        "As your feet find solid ground, you take a moment to steady yourself, your eyes scanning the extent of the damage. It's immediately clear that one of the wheels has given way, snapped cleanly in half like a twig underfoot. A weary sigh escapes your lips as the weight of this new misfortune settles on your shoulders.",
    },
    { avatar: "elyes", face: "normal", placement: "middle" },
    { avatar: "coachman_william", face: "normal", placement: "right" },
    { avatar: "[player]", face: "normal", placement: "left" },
    [
      "coachman_william",
      "I'm right sorry, Miss, but it looks like we're well and truly stuck. It'll be a fair hike to town from here, seeing as I can't rightly fix this without a spare and an extra set of hands.",
    ],
    {
      narration:
        "The gentleman's gaze rests on you, thoughtful and assessing. For a moment, you get the distinct impression that he's sizing you up, trying to piece together the puzzle of who you are and what circumstances have brought you to this muddy roadside. But then, as if remembering himself, he straightens, slipping effortlessly into the role of the polished nobleman.",
    },
    [
      "elyes",
      "Sir Elyes Mortimer, Earl of Dunborough Hall, at your service. If I may, Miss, given the state of the road and the regrettable condition of your carriage, I'd like to extend an offer of assistance. My horse is more than capable of carrying us both, and I'd be happy to see you safely to town. I fear walking would be an uncomfortable and unnecessarily arduous ordeal, in these conditions.",
    ],
    {
      narration:
        "He gestures to the muddy, rutted road, one eyebrow raised expectantly as he awaits your decision. In your mind, you quickly weigh your options - accept the gallant Sir Elyes' offer and arrive in town with relative ease and speed, or politely decline and resign yourself to trekking through the muck on foot, your skirts dragging in the mire.",
    },
    {
      menu: {
        option1: [
          [
            "[player]",
            "I would be most grateful for your assistance, Sir Elyes. The prospect of walking in these conditions is rather daunting.",
          ],
          {
            narration:
              "A warm smile touches Elyes' lips as he nods, clearly pleased by your acceptance. With a graceful flourish, he steps closer, his hand hovering politely near your waist.",
          },
          [
            "elyes",
            "If I may, Miss? The stirrup can be a bit tricky to navigate in a dress.",
          ],
          {
            narration:
              "At your nod, he gently lifts you by the waist, his touch respectful and assured as he helps you onto the horse. The saddle is warm and smooth beneath you, the horse's flanks solid and steady. In a fluid motion, Elyes swings himself up behind you, the heat of his body a comforting presence against your back.",
          },
          [
            "elyes",
            "Hold tight, now. We'll have you to Featherfall in no time at all.",
          ],
          {
            narration:
              "He turns to William, who has been watching the exchange with a mixture of relief and amusement.",
          },
          [
            "elyes",
            "I'll send a few of the stable lads out to help you with the carriage. You just sit tight and try not to teach the local wildlife any new curse words, you hear?",
          ],
          [
            "coachman_william",
            "Aye, my lord. And thankee kindly. I'll do my best to mind my tongue around the birds and the bees.",
          ],
          { animation: road_south_fadeout },
          {
            narration:
              "With a chuckle and a nod, Elyes urges the horse forward, and you find yourself gliding through the misty countryside, the clop of hooves muffled by the soft earth. The rhythm of the horse's gait is soothing, and you feel yourself relaxing into Elyes' sturdy frame.",
          },
          { animation: cg_elyes_horseback },
          [
            "elyes",
            "If you don't mind my asking, Miss, what brings you to our little corner of the world? It's not often we're graced with new faces around here.",
          ],
          [
            "[player]",
            "I'm actually here to handle some family matters. My uncle recently passed away, and I've come to settle his estate.",
          ],
          {
            narration:
              "Elyes' body slightly tenses behind you for a second, before he releases a muted, but shaky breath.",
          },
          [
            "elyes",
            "My condolences, Miss. Losing a loved one is never easy. I would assume your uncle was...Mr. Crumley.",
          ],
          { narration: "More dialogue here" },
          { animation: "road_south_fadeout" },
          { start_event: "arrival_inn" },
        ],
        "option 2": [
          [
            "[player]",
            "Thank you for the kind offer, Sir Elyes, but I think I'd prefer to walk. A bit of fresh air and exercise might do me good after the fright of the accident.",
          ],
          {
            narration:
              "Elyes blinks, a flicker of surprise crossing his features before he smooths it over with a polite smile. He inclines his head, accepting your decision with grace.",
          },
          [
            "elyes",
            "Of course, Miss, I understand. But if you'll permit me, I would feel much better if I could accompany you on the walk to Featherfall. These roads can be treacherous, and I'd hate for you to come to any harm.",
          ],
          {
            narration:
              "You hesitate for a moment, weighing the propriety of accepting the escort of a man you've only just met. But there's something in Elyes' eyes, a genuine concern and a hint of chivalrous determination, that sways you. With a small smile, you nod your agreement.",
          },
          [
            "[player]",
            "That would be most kind of you, Sir Elyes. I'd welcome the company.",
          ],
          {
            narration:
              "With a fluid motion, Elyes dismounts, his boots sinking into the soft mud as he lands. He moves to your side, offering his arm in a gentlemanly gesture.",
          },
          ["elyes", "Shall we then, Miss? The town awaits."],
          { animation: road_south_fadeout },
          { animation: cg_elyes_onfoot },
          {
            narration:
              "The walk is slow going, the mud sucking at your feet with each step. More than once, you find yourself stumbling, your skirts tangling around your legs as you fight to keep your balance. Each time, Elyes is there to steady you, his grip strong and sure on your elbow.",
          },
          [
            "elyes",
            "I must say, you're handling this trek with admirable fortitude. Not many would choose to brave these roads on foot.",
          ],
          {
            narration:
              "You laugh, the sound coming out a bit breathless as you navigate a particularly deep patch of muck.",
          },
          [
            "[player]",
            "I suppose I've always been a bit stubborn. My father used to say I'd walk a hundred miles just to prove a point.",
          ],
          { narration: "Elyes chuckles, shaking his head in amusement." },
          ["elyes", "A woman of conviction, I respect that."],
          {
            narration:
              "The journey stretches on, the minutes ticking by with each labored step. By the time the rooftops of Featherfall come into view, nearly an hour has passed and you're both liberally splattered with mud. But despite the fatigue and the grime, you find yourself smiling, a sense of camaraderie born from shared adversity.",
          },
          [
            "[player]",
            "Well, that was quite the adventure. I can't say I expected to be traipsing through the mud with an Earl when I set out this morning.",
          ],
          [
            "elyes",
            "Life has a way of surprizing us, doesn't it? But I must say, I couldn't have asked for better company on this unexpected detour.",
          ],
          {
            narration:
              "You both laugh, the sound ringing out across the quiet fields. As you make your way into the outskirts of Featherfall, you can't help but feel rather delighted after that walk.",
          },
          { animation: map_market },
          { avatar: "elyes", face: "smile", placement: "right" },
          { avatar: "[player]", face: "smile", placement: "left" },
          { start_event: "arrival_inn" },
        ],
      },
    },
  ],
  objects: {},
  trigger: {},
};

// put notes here
