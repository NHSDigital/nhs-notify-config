import { z } from 'zod';
import { $EventMetadata } from './base-metadata-schemas';
import { $Client, $SupplierQuota, $ChannelSupplier, $FeatureFlag } from '../domain';

export const $ConfigChangedEventData = z.discriminatedUnion('configType', [
    z.object({
      configType: z.literal('client'),
      record: $Client,
    }),
    z.object({
      configType: z.literal('channel-supplier'),
      record: $ChannelSupplier,
    }),
    z.object({
      configType: z.literal('supplier-quota'),
      record: $SupplierQuota,
    }),
    z.object({
      configType: z.literal('feature-flag'),
      record: $FeatureFlag,
    })
  ]
);

const $ConfigChangedEventMetadata = $EventMetadata.extend({
  type: z.literal('uk.nhs.notify.config.ConfigChanged.v1'),
  dataschema: z.enum([
    'https://notify.nhs.uk/events/schemas/config-changed/v1.json',
  ]),
  dataschemaversion: z.literal('1.0.0'),
});

export const $ConfigChangedEvent = $ConfigChangedEventMetadata.extend({
  data: $ConfigChangedEventData,
});
