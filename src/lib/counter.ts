import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'counter-data.json');
const AUTO_INCREMENT_MS = 2 * 60 * 60 * 1000; // 2 hours
const SEED = parseInt(process.env.COUNTER_SEED || '8412', 10);

interface CounterData {
  count: number;
  lastAutoIncrement: number;
}

// In-memory cache
let cached: CounterData | null = null;

function readFromDisk(): CounterData {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(raw);
    }
  } catch {}
  return { count: SEED, lastAutoIncrement: Date.now() };
}

function writeToDisk(data: CounterData): void {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data), 'utf-8');
  } catch (err) {
    console.error('Counter write error:', err);
  }
}

function applyAutoIncrement(data: CounterData): CounterData {
  const now = Date.now();
  const elapsed = now - data.lastAutoIncrement;
  const missed = Math.floor(elapsed / AUTO_INCREMENT_MS);
  if (missed > 0) {
    data.count += missed;
    data.lastAutoIncrement += missed * AUTO_INCREMENT_MS;
  }
  return data;
}

export function getCounter(): CounterData {
  if (!cached) {
    cached = readFromDisk();
  }
  cached = applyAutoIncrement(cached);
  writeToDisk(cached);
  return { ...cached };
}

export function incrementCounter(): CounterData {
  if (!cached) {
    cached = readFromDisk();
  }
  cached = applyAutoIncrement(cached);
  cached.count += 1;
  cached.lastAutoIncrement = Date.now();
  writeToDisk(cached);
  return { ...cached };
}
