import { NextResponse } from 'next/server';
import { sanityClient, sanityWritable } from '@/lib/sanity';

function clean(value: unknown, max = 1000) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(request: Request) {
  try {
    const isApplication = request.headers.get('content-type')?.includes('multipart/form-data');
    const formData = isApplication ? await request.formData() : null;
    const body = formData ?? await request.json();
    const value = (key: string) => body instanceof FormData ? body.get(key) : body[key];
    const name = clean(value('name'), 120);
    const email = clean(value('email'), 200).toLowerCase();
    const phone = clean(value('phone'), 50);
    const message = clean(value('message'), 2000);
    const interest = clean(value('interest'), 160);
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
      return NextResponse.json({ error: 'Please provide your name, a valid email and a message.' }, { status: 400 });
    }
    if (!sanityWritable || !sanityClient) {
      return NextResponse.json({ error: 'The enquiry service is being configured. Please contact us by phone or WhatsApp.' }, { status: 503 });
    }
    let cv;
    if (isApplication) {
      const file = value('cv');
      if (!(file instanceof File) || file.size === 0) return NextResponse.json({ error: 'Please attach your CV as a PDF, DOC or DOCX file.' }, { status: 400 });
      if (file.size > 5 * 1024 * 1024 || !/\.(pdf|docx?)$/i.test(file.name)) return NextResponse.json({ error: 'CV files must be PDF, DOC or DOCX files under 5 MB.' }, { status: 400 });
      const asset = await sanityClient.assets.upload('file', file, { filename: file.name });
      cv = { _type: 'file', asset: { _type: 'reference', _ref: asset._id } };
    }
    const now = new Date().toISOString();
    await sanityClient.create({ _type: 'enquiry', name, email, phone, preferredService: interest, enquiryType: isApplication ? 'Job Application' : undefined, message, sourcePage: clean(value('sourcePage'), 200), status: 'New', createdAt: now, updatedAt: now, ...(cv ? { cv } : {}) });
    return NextResponse.json({ ok: true, persisted: true });
  } catch {
    return NextResponse.json({ error: 'We could not send your enquiry. Please try again.' }, { status: 500 });
  }
}
