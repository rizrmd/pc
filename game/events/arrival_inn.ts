import { carriage_inside } from "_/_index/animations";

export const arrival_inn: GameEvent = {
  place: "inn",
  start: [
    { animation: carriage_inside },
    ["elyes", "Hello fellow player."],
    {
      menu: {
        "example menu": [
          ["elyes", "this is example 1"],
          ["elyes", ""],
          ["elyes", ""],
        ],
      },
    },
  ],
  objects: {},
  trigger: {},
};
