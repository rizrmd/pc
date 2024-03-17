import { useLocal } from "@/utils/use-local";
import { Sprite } from "@pixi/react";
import { config } from "app/state/config";
import { calcPos } from "app/util/position";
import { Assets, Texture } from "pixi.js";
import { FC, useEffect } from "react";

export const Img: FC<{
  file: string;
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
}> = ({ file, anchor, top, left, bottom, right }) => {
  const local = useLocal(
    { img: null as null | Texture, file: "" },
    async () => {
      if (local.file !== file) {
        local.file = file;
        const img = (await Assets.load(file)) as Texture;
        local.img = img;
        local.render();
      }
    },
    [file]
  );

  if (!local.img) return null;
  const img = local.img;
  const width = img.width / config.pixelRatio;
  const height = img.height / config.pixelRatio;
  const pos = calcPos({ anchor, top, left, right, bottom, width, height });

  return (
    <Sprite
      texture={img}
      width={width}
      height={height}
      x={pos.x}
      y={pos.y}
      anchor={0}
    />
  );
};
