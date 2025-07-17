// These are incomplete types used only to verify the parts of the routing configuration used
// by the audit. These should be replaced by full validators if implemented in the routing-configuration lib

import { z } from 'zod';

export const $TemplateOption = z.object({
  conditions: z.any(),
  suppliers: z.record(z.string(), z.string()),
});

export const $RoutingConfigChannel = z.object({
  orderNumber: z.number(),
  routerQueuePrefix: z.string().optional(),
  channelType: z.string().optional(),
  communicationType: z.enum(['LETTER', 'NHSAPP', 'EMAIL', 'SMS']),
  templates: z.array($TemplateOption).nonempty().optional(),
  maxAttemptsNumber: z.number().optional(),
  callbackWaitTime: z.number().optional(),
  internalTemplateId: z.string().optional(),
  templateName: z.string().optional(),
});

export type RoutingConfigChannel = z.infer<typeof $RoutingConfigChannel>;

export const $OverrideSelector = z.object({
  conditions: z.any(),
  sendingGroupId: z.string().optional(),
});

export const $RoutingConfig = z.object({
  campaignId: z.string().optional(),
  channels: z.array($RoutingConfigChannel).nonempty(),
  clientId: z.string().optional(),
  global: z.boolean().optional(),
  sendingGroupName: z.string().optional(),
  schemaVersion: z.number().optional(),
  sendingGroupIdVersion: z.string().optional(),
  sendingGroupOverride: z.array($OverrideSelector).nonempty().optional(),
  sendingGroupId: z.string(),
  dateCreated: z.string(),
});

export type PartialRoutingConfig = z.infer<typeof $RoutingConfig>;

export function isRoutingConfig(input: unknown): input is PartialRoutingConfig {
  const parseResult = $RoutingConfig.safeParse(input);
  if (parseResult.success) {
    return true;
  }
  console.log(
    { input, parseResult: parseResult.error },
    'Invalid routing config'
  );

  return false;
}
