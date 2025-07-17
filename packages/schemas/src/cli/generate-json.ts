import { $ConfigChangedEvent } from '../schemas/config-changed-event';
import { z } from 'zod';
import * as fs from 'node:fs';
import { $ConfigRemovedEvent } from '../schemas/config-removed-event';

for (const [key, schema] of Object.entries({
  'config-changed': $ConfigChangedEvent,
  'config-removed': $ConfigRemovedEvent
})) {
  const json = z.toJSONSchema(schema);
  const file = `json/${key}-${schema.shape.dataschemaversion.value}.json`;
  fs.writeFileSync(file, JSON.stringify(json, null, 2));
  console.info(`Wrote JSON schema for ${key} to ${file}`);
}
