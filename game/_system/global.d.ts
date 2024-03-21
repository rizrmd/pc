import * as characters from '_/_index/characters'
import * as objects from '_/_index/objects'
import * as places from '_/_index/places'
export type _ = {};

type _chr = typeof characters;
type _obj = typeof objects;
type _plc = typeof places;

type Condition = "default" | "all-clicked"

type Action = "go-to-town" | "go-to-place"

type Dialog = (
  [keyof _chr, { face?: Face, clothes?: Clothes }, string] |
  ['[player]', { face?: Face, clothes?: Clothes }, string] |
  ['[player]', string] |
  [keyof _chr, string] |
  [keyof _obj, string] |
  { action: Action, place?: keyof _plc } |
  { menu: Record<string, Dialog> }
)[]

type Face = 'default' | 'sad' | 'angry' | 'happy'
type Clothes = 'casual' | 'formal-day' | 'formal-night'

declare global {
  type Place = { name: string; };

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
