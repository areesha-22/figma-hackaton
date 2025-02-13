import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./blockContent";
import code from "./code";

import car from "./cars";

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [blockContent, code, car],
}
