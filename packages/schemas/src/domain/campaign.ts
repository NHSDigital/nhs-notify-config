import { z } from 'zod';
import { $GovuknotifyAccount } from './govuknotifyAccount';

export const $Campaign = z.object({
  id: z.string(),
  name: z.string(),
  clientId: z.string(),
  default: z.boolean(),
  govuknotifyAccount: $GovuknotifyAccount
});

export type Campaign = z.infer<typeof $Campaign>;
