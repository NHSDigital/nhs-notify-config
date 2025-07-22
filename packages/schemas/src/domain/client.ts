import { z } from 'zod';
import { idRef } from 'zod-mermaid';
import { $MeshMailbox } from './meshMailbox';
import { $ApimApplication } from './apimApplication';
import { $SuppressionFilter } from './suppressionFilter';
import { $GovuknotifyAccount } from './govuknotifyAccount';
import { $ClientQuota } from './clientQuota';
import { ConfigBase } from './common';
import { $FeatureFlag } from './featureFlag';

export const $Client = ConfigBase('Client').extend({
  name: z.string(),
  senderOdsCode: z.string().optional(),
  quota: $ClientQuota.optional(),
  meshMailbox: $MeshMailbox,
  apimApplication: $ApimApplication,
  govuknotifyAccount: $GovuknotifyAccount,

  featureFlags: z.array(idRef($FeatureFlag)),
  rfrCodes: z.array(z.string()),
  suppressionFilters: z.array($SuppressionFilter),
}).describe('Client');

export type Client = z.infer<typeof $Client>;
