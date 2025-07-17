import { z } from 'zod';
import { $Client } from './client';
import { $ChannelSupplier } from './channelSupplier';
import { $SupplierQuota } from './supplierQuota';
import { $Queue } from './queue';
import { $FeatureFlag } from './featureFlags';
import { $RoutingConfig } from './routing';

export const $Audit = z.object({
  environment: z.string(),
  featureFlags: z.array($FeatureFlag),
  clients: z.array($Client),
  queues: z.array($Queue),
  channelSuppliers: z.array($ChannelSupplier),
  supplierQuotas: z.array($SupplierQuota),
  routingConfigs: z.array($RoutingConfig),
});

export type Audit = z.infer<typeof $Audit>;
