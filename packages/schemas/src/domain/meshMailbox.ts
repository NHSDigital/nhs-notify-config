import { z } from 'zod';

export const $MeshMailbox = z.object({
  id: z.string(),
  clientId: z.string(),
  workflowIdSuffix: z.string().optional(),
  workflowIdReceiveRequestAck: z.string().optional(),
  workflowIdCompletedRequestItemsReport: z.string().optional(),
});

export type MeshMailbox = z.infer<typeof $MeshMailbox>;
