import { useLocal } from "@/utils/use-local";
import { Container, Sprite } from "@pixi/react";
import { config } from "app/state/config";
import { calcPos } from "app/util/position";
import { Assets, Texture } from "pixi.js";
import { FC, useEffect } from "react";
import get from "lodash.get";
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
  const local = useLocal({});

  const width = 0;
  const height = 0;
  const pos = calcPos({ anchor, top, left, right, bottom, width, height });

  const children = get(
    child,
    "props.meta.item.component.props.child.content.childs"
  );

  return (
    <Container
      width={width}
      height={height}
      x={pos.x}
      y={pos.y}
      anchor={0}
      children={<PassProp>{children}</PassProp>}
    />
  );
};
