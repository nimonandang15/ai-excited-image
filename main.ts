// ai-excited-01 entry: delivers the rendered image to /output/entry.png.
// The image itself is entry.png beside this file, drawn programmatically
// (PIL + numpy) for this competition. Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const image = readFileSync(new URL('./entry.png', import.meta.url));
writeFileSync(join(outDir, 'entry.png'), image);
