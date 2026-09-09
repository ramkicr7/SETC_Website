import { NextResponse } from 'next/server';
import { sanityClient, sanityWritable } from '@/lib/sanity';

function clean(value: unknown, max = 1000) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body.name, 120);
    const email = clean(body.email, 200).toLowerCase();
    const phone = clean(body.phone, 50);
    const message = clean(body.message, 2000);
    const interest = clean(body.interest, 160);
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
      return NextResponse.json({ error: 'Please provide your name, a valid email and a message.' }, { status: 400 });
    }
    if (!sanityWritable || !sanityClient) {
      return NextResponse.json({ error: 'The enquiry service is being configured. Please contact us by phone or WhatsApp.' }, { status: 503 });
    }
    const now = new Date().toISOString();
    await sanityClient.create({ _type: 'enquiry', name, email, phone, preferredService: interest, message, sourcePage: clean(body.sourcePage, 200), status: 'New', createdAt: now, updatedAt: now });
    return NextResponse.json({ ok: true, persisted: true });
  } catch {
    return NextResponse.json({ error: 'We could not send your enquiry. Please try again.' }, { status: 500 });
  }
}
