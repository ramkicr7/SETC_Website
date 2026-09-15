'use client';

import { type FormEvent, useEffect, useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { courses } from '@/lib/data';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm({ compact = false, mode = 'default' }: { compact?: boolean; mode?: 'default' | 'careers' }) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [interest, setInterest] = useState('');

  useEffect(() => {
    if (mode !== 'careers') return;
    const position = new URLSearchParams(window.location.search).get('position');
    if (position) setInterest(position);
  }, [mode]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('sourcePage', window.location.pathname);
    try {
      const isCareerApplication = mode === 'careers';
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        ...(isCareerApplication ? {} : { headers: { 'Content-Type': 'application/json' } }),
        body: isCareerApplication ? formData : JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Please try again.');
      setStatus('success');
      form.reset();
      setInterest('');
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="success-state">
        <div className="success-icon"><Check /></div>
        <h3>Thank you for reaching out.</h3>
        <p>Your enquiry is ready for our team. We&apos;ll be in touch soon.</p>
        <button className="text-link dark-link" onClick={() => setStatus('idle')}>Send another enquiry <ArrowRight size={16} /></button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`contact-form ${compact ? 'contact-form-compact' : ''}`}>
      <div className="form-grid">
        <label>Full Name<input name="name" required placeholder="Your name" /></label>
        <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
        <label>Phone<input name="phone" type="tel" placeholder="+971 ..." /></label>
        <label>{mode === 'careers' ? 'Position' : 'Course / Area of Interest'}
          <select name="interest" value={interest} onChange={(event) => setInterest(event.target.value)} required={mode === 'careers'}>
            <option value="" disabled>{mode === 'careers' ? 'Select a position' : 'Select a course'}</option>
            {mode === 'careers' ? <>
              <option>English Language Trainer</option>
              <option>Academic Coordinator</option>
              <option>Student Support Officer</option>
              <option>Marketing &amp; Content Specialist</option>
              <option>General enquiry</option>
            </> : <>
              {courses.map((c) => <option key={c.slug} value={c.title}>{c.title}</option>)}
              <option value="other">Other / Not sure yet</option>
            </>}
          </select>
        </label>
      </div>
      {mode === 'careers' && <label className="form-file-label">CV / Resume<input name="cv" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required /></label>}
      <label className="form-message-label">Message<textarea name="message" required placeholder="Tell us a little about your goal..." rows={3} /></label>
      <button className="button button-blue form-submit" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? <>Sending... <Loader2 size={17} className="spin" /></> : <>{mode === 'careers' ? 'Submit Application' : 'Send Enquiry'} <ArrowRight size={17} /></>}
      </button>
      {status === 'error' && <p className="form-error" role="alert">{error}</p>}
      <p className="form-note">We&apos;ll use your details only to respond to this enquiry.</p>
    </form>
  );
}
