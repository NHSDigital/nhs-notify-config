import { z } from 'zod';
import { $ChannelType } from './channel';

export const $ChannelSupplier = z.object({
  id: z.string(),
  supplierName: z.string().optional(),
  channelType: $ChannelType,
  outputQueue: z.string(),
});

export type ChannelSupplier = z.infer<typeof $ChannelSupplier>;
