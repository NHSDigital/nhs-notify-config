import { z } from 'zod';

export const $ClientQuota = z.object({
  clientId: z.string(),
  tps: z.number(),
  periodSeconds: z.number(),
  initialQuota: z.number(),
});

export type ClientQuota = z.infer<typeof $ClientQuota>;
