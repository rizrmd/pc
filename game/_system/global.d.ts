import * as characters from "_/_index/characters";
import * as objects from "_/_index/objects";
import * as places from "_/_index/places";
import * as events from "_/_index/events";
import * as state from "_/_index/state";
import * as animations from "_/_index/animations";
export type _ = {};

type _chr = typeof characters;
type _obj = typeof objects;
type _plc = typeof places;
type _evt = typeof events;
type _anm = typeof animations;

type Condition = "default" | "all-objects-touched";

type Face =
  | "normal"
  | "sad"
  | "angry"
  | "surprised"
  | "smile"
  | "annoyed"
  | "suspicous";
type Clothes = "casual" | "formal-day" | "formal-night";
type NamePlacement = "left" | "right" | "middle";
type AvatarPlacement =
  | "left"
  | "left-middle"
  | "middle"
  | "right-middle"
  | "right"
  | "hidden";

type Dialog = (
  | {
      animation: any;
    }
  | {
      title?: string;
      narration?: string;
    }
  | {
      avatar: keyof _chr | "[player]";
      face?: Face;
      clothes?: Clothes;
      placement: AvatarPlacement;
    }
  | [keyof _chr, string]
  | ["[player]", string]
  | ["[player]", string]
  | [keyof _chr, string]
  | [keyof _obj, string]
  | [keyof _obj, string]
  | { go_to: keyof _plc | "city-map" }
  | { start_event: keyof _evt }
  | { set_state: Partial<(typeof state)["state"]> }
  | { if?: string[]; menu: Record<string, Dialog>; placement?: NamePlacement }
  | { if: Partial<(typeof state)["state"]>; then: Dialog }
  | { random: Dialog }
)[];

declare global {
  type Place = {
    name: string;
    events: Partial<Record<keyof _evt, Dialog>>;
    time?: string[];
    weather?: string[];
    state?: string[];
  };

  type Anim = {
    desc?: string;
    type?: string;
  };

  type Character = {
    name: string;
  };

  type GameEvent = {
    place: any;
    timer?: string;
    start: Dialog;
    objects: Partial<
      Record<keyof _obj, { trigger: Partial<Record<Condition, Dialog>> }>
    >;
    trigger: Partial<Record<Condition, { dialog: Dialog }>>;
  };

  type GameObject = {
    name: string;
  };
}
