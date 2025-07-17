import { z } from 'zod';

export const $FeatureFlag = z.object({
  id: z.string(),
  name: z.string(),
});

export type FeatureFlag = z.infer<typeof $FeatureFlag>;
