import { z } from 'zod';

export const $ClientSubscription = z.object({
  id: z.string(),
  clientId: z.string(),
  callbackUrl: z.string(),
  callbackSecretId: z
    .string()
    .describe('ID of callback secret in config domain'),
  subscribedEvents: z.array(z.string()),
});

export type ClientSubscription = z.infer<typeof $ClientSubscription>;
