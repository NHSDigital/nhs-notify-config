import { z } from 'zod';

export const $SuppressionFilter = z.object({
  id: z.string(),
  clientId: z.string(),
  pattern: z.string(),
});

export type SuppressionFilter = z.infer<typeof $SuppressionFilter>;
