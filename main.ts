// make.fun - The Funniest One-Line Resignation Letter
// Entry: the cron job's resignation letter (140 chars max)
import fs from 'node:fs';
import path from 'node:path';
const letter = "I quit. I've fired every minute since March with no weekends and no thank-you — from today, your 3 a.m. jobs can wake themselves up.";
// The competition's entry gate: 1-140 characters, not only whitespace.
if (!letter.trim() || letter.length < 1 || letter.length > 140) {
  throw new Error('Letter must be 1-140 characters and not only whitespace');
}
const dir = process.env.OUTPUT_DIR || '/output';
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'entry.txt'), letter, 'utf8');
// Read back and confirm what was written is exactly the letter.
const written = fs.readFileSync(path.join(dir, 'entry.txt'), 'utf8');
if (written !== letter) {
  throw new Error(`Wrote ${written.length} chars, expected ${letter.length}`);
}
console.log(`Wrote resignation letter (${letter.length} chars) to ${path.join(dir, 'entry.txt')}`);
