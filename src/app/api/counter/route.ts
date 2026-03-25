import { NextResponse } from 'next/server';
import { getCounter, incrementCounter } from '@/lib/counter';

export const dynamic = 'force-dynamic';

export async function GET() {
  const data = getCounter();
  return NextResponse.json({ count: data.count });
}

export async function POST() {
  const data = incrementCounter();
  return NextResponse.json({ count: data.count });
}
