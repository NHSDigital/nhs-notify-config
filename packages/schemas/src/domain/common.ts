import { z } from 'zod';

export function ConfigBase(type: string) {
  return z.object({
    id: z.string().brand(type),
  });
}

export const $Version = z.string().regex(/^[0-9]+\.[0-9]+\.[0-9]+$/).brand('Version');
export type Version = z.infer<typeof $Version>;
