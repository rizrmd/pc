import { config } from "app/state/config";

export const calcPos = (arg: {
  anchor:
    | "top left"
    | "middle left"
    | "bottom left"
    | "top center"
    | "middle center"
    | "bottom center"
    | "top right"
    | "middle right"
    | "bottom right";
  top: string;
  bottom: string;
  left: string;
  right: string;
  width: number;
  height: number;
  parent?: { width: number; height: number };
}) => {
  const parent = arg.parent || { width: config.width, height: config.height };
  const { anchor, width, height } = arg;

  const scale = 1;
  const top = (parseInt(arg.top) || 0) * scale;
  const left = (parseInt(arg.left) || 0) * scale;
  const right = (parseInt(arg.right) || 0) * scale;
  const bottom = (parseInt(arg.bottom) || 0) * scale;

  let x = 0;
  let y = 0;
  const v = anchor.split(" ")[0];
  const h = anchor.split(" ")[1];

  if (h === "left") x = left;
  else if (h === "center") x = parent.width / 2 - width / 2 + left;
  else if (h === "right") x = parent.width - width - right;

  if (v === "top") y = top;
  else if (v === "middle") y = parent.height / 2 - height / 2 + top;
  else if (v === "bottom") y = parent.height - height - bottom;

  return {
    x: x,
    y: y,
  };
};
