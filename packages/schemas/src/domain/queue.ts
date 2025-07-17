import { z } from 'zod';
import { $ChannelType } from './channel';

export const $Queue = z.object({
  id: z.string(),
  campaignId: z.string().optional(),
  channelType: $ChannelType,
});

export type Queue = z.infer<typeof $Queue>;
