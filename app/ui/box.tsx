import { useLocal } from "@/utils/use-local";
import { Container } from "@pixi/react";
import { calcPos } from "app/util/position";
import { DisplayObject, Container as PixiContainer } from "pixi.js";
import { FC } from "react";

export const Box: FC<{
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
  child: any;
  PassProp: any;
}> = ({ anchor, top, left, bottom, right, child, PassProp }) => {
  const local = useLocal({
    add: 0,
    ref: null as null | PixiContainer<DisplayObject>,
  });

  const width = local.ref?.width || 0;
  const height = local.ref?.height || 0;
  const pos = calcPos({ anchor, top, left, right, bottom, width, height });

  return (
    <Container
      x={pos.x + (parseInt(left) || 0)}
      y={pos.y + (parseInt(top) || 0)}
      anchor={0}
      eventMode="auto"
      ref={(ref) => {
        if (ref) {
          let should_render = !local.ref;
          local.ref = ref;
          if (should_render) {
            local.render();
          }
        }
      }}
      children={<PassProp parent_render={local.render}>{child}</PassProp>}
    />
  );
};
