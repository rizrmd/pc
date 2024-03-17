import { useLocal } from "@/utils/use-local";
import { Stage as PixiStage, Sprite } from "@pixi/react";
import { config } from "app/state/config";
import { FC } from "react";

export const _type = "";
export const Stage: FC<{ children: any }> = ({ children }) => {
  const local = useLocal({}, () => {
    const on_resize = () => {
      if (isEditor) {
        const el = document.querySelector(".main-editor-content");
        if (el) {
          const bound = el.getBoundingClientRect();
          config.width = bound.width;
          config.height = bound.height;
        }
      } else {
        config.width = window.innerWidth;
        config.height = window.innerHeight;
      }
      local.render();
    };
    on_resize();
    window.addEventListener("resize", on_resize);
    return () => {
      window.removeEventListener("resize", on_resize);
    };
  });

  return (
    <PixiStage
      width={config.width}
      height={config.height}
      options={{
        resolution: config.pixelRatio,
        antialias: true,
        autoDensity: true,
      }}
    >
      {children}
    </PixiStage>
  );
};
