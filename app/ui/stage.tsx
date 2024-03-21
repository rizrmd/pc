import { useLocal } from "@/utils/use-local";
import { Stage as PixiStage, Sprite } from "@pixi/react";
import { config } from "app/state/config";
import { FC } from "react";
import "@pixi/events";

export const _type = "";
export const Stage: FC<{ children: any; init: any }> = ({ children, init }) => {
  const local = useLocal(
    { ref: null as PixiStage | null, resizing: false },
    () => {
      if (init) init();
      const on_resize = () => {
        if (isEditor) {
          const el = document.querySelector(
            ".main-editor-content"
          ) as HTMLDivElement;
          if (el && el) {
            const style = el.computedStyleMap();
            const zoom = (style.get("width") as any)?.value || 100;
            const bound = el.getBoundingClientRect();
            config.width = (bound.width * zoom) / 100 - 1;
            config.height = (bound.height * zoom) / 100 - 1;

            if (local.ref) {
              local.ref = null;
              local.resizing = true;
              local.render();
              setTimeout(() => {
                local.resizing = false;
                local.render();
              });
            }
          }
        } else {
          config.width = window.innerWidth;
          config.height = window.innerHeight;
        }
        local.render();
      };
      on_resize();
      if (!isEditor) {
        window.addEventListener("resize", on_resize);
        return () => {
          window.removeEventListener("resize", on_resize);
        };
      } else {
        const reb = new ResizeObserver(on_resize);
        const el = document.querySelector(".main-editor-content");
        if (el) {
          reb.observe(el);
        }

        return () => {
          reb.disconnect();
        };
      }
    }
  );

  if (local.resizing) return null;

  return (
    <PixiStage
      width={config.width}
      height={config.height}
      renderOnComponentChange={true}
      options={{
        resolution: config.pixelRatio,
        antialias: true,
        autoDensity: true,
      }}
      ref={(ref) => {
        if (ref) local.ref = ref;
      }}
    >
      {children}
    </PixiStage>
  );
};
