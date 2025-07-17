import { z } from 'zod';

export const $GovuknotifyAccount = z.object({
  id: z.string(),
  name: z.string(),
  clientId: z.string(),
  default: z.boolean(),
});

export type GovuknotifyAccount = z.infer<typeof $GovuknotifyAccount>;
