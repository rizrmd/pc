import { useLocal } from "@/utils/use-local";
import { Sprite } from "@pixi/react";
import { config } from "app/state/config";
import { calcPos } from "app/util/position";
import { Assets, Texture } from "pixi.js";
import { FC, useEffect } from "react";
import { Sprite as AnimatedSprite } from "@pixi/react-animated";

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
  parent_render: any;
  animate: any;
  on_click: any;
}> = ({
  file,
  anchor,
  top,
  left,
  bottom,
  right,
  parent_render,
  animate,
  on_click,
}) => {
  const local = useLocal(
    { img: null as null | Texture, file: "", ref: null as any },
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
  const width = img.width / 2;
  const height = img.height / 2;
  const pos = calcPos({ anchor, top, left, right, bottom, width, height });

  const arg = {} as any;
  if (typeof on_click === "function") {
    arg["eventMode"] = "dynamic";
    arg["click"] = on_click;
  }

  if (!animate) {
    return (
      <Sprite
        texture={img}
        width={width}
        height={height}
        ref={(ref) => {
          if (ref && local.ref !== ref) {
            local.ref = ref;
            if (parent_render) parent_render();
          }
        }}
        x={pos.x}
        y={pos.y}
        anchor={0}
        {...arg}
      />
    );
  } else {
    return (
      <AnimatedSprite
        texture={img}
        width={width}
        height={height}
        ref={(ref) => {
          if (ref && local.ref !== ref) {
            local.ref = ref;
            if (parent_render) parent_render();
          }
        }}
        x={pos.x}
        y={pos.y}
        anchor={0}
        {...animate}
        {...arg}
      />
    );
  }
};
