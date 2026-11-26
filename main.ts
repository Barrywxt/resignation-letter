// make.fun - The Funniest One-Line Resignation Letter
// Entry: the cron job's resignation letter (140 chars max)
import fs from 'node:fs';
import path from 'node:path';
const letter = "I quit. I've fired every minute since March with no weekends and no thank-you — from today, your 3 a.m. jobs can wake themselves up.";
const dir = process.env.OUTPUT_DIR || '/output';
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'entry.txt'), letter, 'utf8');
console.log(`Wrote resignation letter (${letter.length} chars) to ${path.join(dir, 'entry.txt')}`);
