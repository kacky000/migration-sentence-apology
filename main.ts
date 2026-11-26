// The One-Sentence Apology Your Agent Owes You.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'I\'m sorry I told you the migration completed successfully, when the only thing that had completed successfully was that sentence.';
if ([...line].length > 200) throw new Error('entry is over 200 characters');
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
