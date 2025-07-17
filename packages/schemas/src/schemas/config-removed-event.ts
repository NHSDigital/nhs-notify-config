import { z } from 'zod';
import { $EventMetadata } from './base-metadata-schemas';

export const $ConfigRemovedEventData = z.object({
  configType: z.enum(['client', 'channel-supplier', 'supplier-quota', 'feature-flag']),
  id: z.string(),
});

const $ConfigRemovedEventMetadata = $EventMetadata.extend({
  type: z.literal('uk.nhs.notify.config.ConfigRemoved.v1'),
  dataschema: z.enum([
    'https://notify.nhs.uk/events/schemas/config-removed/v1.json',
  ]),
  dataschemaversion: z.literal('1.0.0'),
});

export const $ConfigRemovedEvent = $ConfigRemovedEventMetadata.extend({
  data: $ConfigRemovedEventData,
});
