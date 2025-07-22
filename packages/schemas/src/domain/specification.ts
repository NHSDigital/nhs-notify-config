import { z } from 'zod';
import { $Version, ConfigBase } from './common';

export const $Specification = ConfigBase('Specification').extend({
  name: z.string(),
  status: z.enum(['DRAFT', 'PUBLISHED']),
  createdAt: z.date(),
  updatedAt: z.date(),
  version: $Version,
}).describe('Specification');

export type Specification = z.infer<typeof $Specification>;
