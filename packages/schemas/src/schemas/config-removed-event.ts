import { z } from 'zod';
import { $EventMetadata } from './base-metadata-schemas';

export const $ConfigRemovedEventData = z.object({
  configType: z.enum([
    'client', 'campaign', 'client-subscription',
    'channel-supplier', 'queue', 'supplier-quota',
    'feature-flag', 'specification', 'specification-supplier']),
  id: z.string(),
});

const $ConfigRemovedEventMetadata = $EventMetadata.extend({
  type: z.literal('uk.nhs.notify.config.ConfigRemoved'),
  dataschema: z.string().regex(/^https:\/\/notify\.nhs\.uk\/events\/schemas\/config-removed-1.\d+\.\d+\.json$/),
  dataschemaversion: z.string().regex(/^1\.\d+\.\d+$/), // Matches semantic versioning format with fixed major version
});

export const $ConfigRemovedEvent = $ConfigRemovedEventMetadata.extend({
  data: $ConfigRemovedEventData,
}).describe('ConfigRemovedEvent');
