import { type SchemaTypeDefinition } from 'sanity';
import {
  home,
  treasures,
  treasureCard,
  trinkets,
  team,
  teamCard,
  triangle,
  trinketCard,
} from './schemaTypes';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    treasures,
    treasureCard,
    trinkets,
    team,
    teamCard,
    triangle,
    trinketCard,
  ],
};
