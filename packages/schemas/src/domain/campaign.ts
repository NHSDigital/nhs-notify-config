import { z } from 'zod';
import { $GovuknotifyAccount } from './govuknotifyAccount';
import { idRef } from 'zod-mermaid';
import { $Client } from './client';
import { ConfigBase } from './common';

export const $Campaign = ConfigBase('Campaign').extend({
  name: z.string(),
  clientId: idRef($Client),
  default: z.boolean(),
  govuknotifyAccount: $GovuknotifyAccount
}).describe('Campaign');

export type Campaign = z.infer<typeof $Campaign>;
