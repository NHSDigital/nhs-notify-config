import { z } from 'zod';

export const $ApimApplication = z.object({
  id: z.string(),
  clientId: z.string(),
  apimId: z.string(),
});

export type ApimApplication = z.infer<typeof $ApimApplication>;
