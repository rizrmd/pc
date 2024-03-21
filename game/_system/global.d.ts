import * as characters from '_/_index/characters'
import * as objects from '_/_index/objects'
import * as places from '_/_index/places'
import * as events from '_/_index/events'
export type _ = {};

type _chr = typeof characters;
type _obj = typeof objects;
type _plc = typeof places;
type _evt = typeof events;

type Condition = "default" | "all-objects-touched"

type Face = 'default' | 'sad' | 'angry' | 'happy' | 'cry'
type Clothes = 'casual' | 'formal-day' | 'formal-night'
type Dialog = (
  [keyof _chr, { face?: Face, clothes?: Clothes }, string] |
  ['[player]', { face?: Face, clothes?: Clothes }, string] |
  ['[player]', string] |
  [keyof _chr, string] |
  [keyof _obj, string] |
  { go_to: keyof _plc | 'city-map' } |
  { start_event: keyof _evt } |
  { menu: Record<string, Dialog> }
)[]


declare global {
  type Place = { name: string; events: Partial<Record<keyof _evt, Dialog>> };

  type Character = {
    name: string;
  };

  type GameEvent = {
    place: keyof _plc,
    start: Dialog
    objects: Partial<Record<keyof _obj, { trigger: Partial<Record<Condition, Dialog>> }>>
    trigger: Partial<Record<Condition, { dialog: Dialog }>>
  }

  type GameObject = {
    name: string;
  }
}
