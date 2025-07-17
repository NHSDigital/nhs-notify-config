import { z } from 'zod';
import { $MeshMailbox } from './meshMailbox';
import { $ApimApplication } from './apimApplication';
import { $Campaign } from './campaign';
import { $SuppressionFilter } from './suppressionFilter';
import { $GovuknotifyAccount } from './govuknotifyAccount';
import { $ClientSubscription } from './clientSubscription';
import { $ClientQuota } from './clientQuota';

export const $Client = z.object({
  id: z.string(),
  name: z.string(),
  senderOdsCode: z.string().optional(),
  quota: $ClientQuota.optional(),
  meshMailbox: $MeshMailbox,
  apimApplication: $ApimApplication,
  govuknotifyAccount: $GovuknotifyAccount,

  featureFlags: z.array(z.string()),
  rfrCodes: z.array(z.string()),
  suppressionFilters: z.array($SuppressionFilter),

  campaigns: z.array($Campaign),
  subscriptions: z.array($ClientSubscription),
});

export type Client = z.infer<typeof $Client>;
