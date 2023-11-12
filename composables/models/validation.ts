import * as zod from "zod";

export interface ValidationFields {
  [key: string]: [value: zod.ZodString];
}
