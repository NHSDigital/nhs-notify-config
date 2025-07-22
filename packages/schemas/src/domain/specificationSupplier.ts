import { z } from 'zod';
import { idRef } from 'zod-mermaid';
import { $ChannelSupplier } from './channelSupplier';
import { $Specification } from './specification';
import { ConfigBase } from './common';

export const $SpecificationSupplier = ConfigBase('SpecificationSupplier').extend({
  specificationId: idRef($Specification),
  supplierId: idRef($ChannelSupplier),
}).describe('SpecificationSupplier');

export type SpecificationSupplier = z.infer<typeof $SpecificationSupplier>;
