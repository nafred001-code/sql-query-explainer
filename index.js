#!/usr/bin/env node
// sql-query-explainer
// Usage: node index.js <path-to-input-file>
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { loadModel, completion, unloadModel, LLAMA_3_2_1B_INST_Q4_0 } from '@qvac/sdk';

const inputPath = process.argv[2] || "query.example.sql";

if (!existsSync(inputPath)) {
  console.error('Usage: node index.js <path-to-input-file>');
  process.exit(1);
}

const input = readFileSync(inputPath, 'utf-8').trim();

console.log('Loading language model on-device...');
const modelId = await loadModel({ modelSrc: LLAMA_3_2_1B_INST_Q4_0 });

const prompt = `Explain what this SQL query does in plain English, first as a one-sentence summary, then clause by clause as a bullet list. Point out any subtle behavior (e.g. LEFT JOIN filters).

${input}`;

const { tokenStream } = completion({ modelId, history: [{ role: 'user', content: prompt }], stream: true });

let output = '';
console.log('\nResult:\n');
for await (const token of tokenStream) {
  process.stdout.write(token);
  output += token;
}
console.log();

writeFileSync("query-explained.md", output.trim() + '\n');
console.log('\nSaved to query-explained.md');

await unloadModel({ modelId });
