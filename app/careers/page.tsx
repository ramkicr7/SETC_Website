import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, Target, Globe2, Briefcase, Award, Heart } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { PHONE_LINK, PHONE_NUMBER, WHATSAPP_LINK } from '@/lib/data';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the SETC team. Explore career opportunities in education, training, and student support in Dubai.',
};

const roles = [
  {
    title: 'English Language Trainer',
    focus: 'Full-time & Part-time',
    description: 'Deliver engaging English language and exam preparation training to diverse learner groups. Design lesson plans, assess progress and support student development.',
    icon: Globe2,
  },
  {
    title: 'Academic Coordinator',
    focus: 'Full-time',
    description: 'Support course scheduling, student enrolment, progress tracking and academic administration. Liaise between trainers, students and management.',
    icon: Target,
  },
  {
    title: 'Student Support Officer',
    focus: 'Full-time',
    description: 'Provide student guidance, handle enquiries, manage accommodation arrangements and support the learner experience throughout their journey.',
    icon: Users,
  },
  {
    title: 'Marketing & Content Specialist',
    focus: 'Full-time',
    description: 'Develop content, manage digital channels and create marketing materials that connect SETC with prospective learners in Dubai and beyond.',
    icon: Briefcase,
  },
];

const benefits = [
  { icon: Heart, title: 'Supportive Culture', text: 'Work in a collaborative, inclusive team focused on student success and professional growth.' },
  { icon: Award, title: 'Professional Development', text: 'Access training, development opportunities and support for career progression.' },
  { icon: Globe2, title: 'International Environment', text: 'Work with students and colleagues from around the world in a multicultural setting.' },
  { icon: Target, title: 'Meaningful Work', text: 'Make a direct impact on learner outcomes and help students achieve their education goals.' },
];

export default function CareersPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>Careers</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> Join our team</div>
          <h1>Careers at SETC</h1>
          <p>Help shape the future of education. Explore career opportunities with Students Everywhere Training Center in Dubai.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Current opportunities</div>
            <h2>Open Roles</h2>
            <p>We&apos;re looking for passionate professionals to join the SETC team. Explore our current openings and apply today.</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {roles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <Reveal as="article" key={role.title} className="role-card" delay={idx * 80} style={{ background: 'var(--paper)', padding: 28, borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 48, height: 48, display: 'grid', placeItems: 'center', borderRadius: '50%', background: 'var(--blue-light)', color: 'var(--blue)', flex: '0 0 auto' }}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 style={{ color: 'var(--navy)', margin: '0 0 4px', fontSize: 18, fontWeight: 700 }}>{role.title}</h3>
                      <span style={{ color: 'var(--blue)', fontSize: 12, fontWeight: 600 }}>{role.focus}</span>
                    </div>
                  </div>
                  <p style={{ color: 'var(--muted)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>{role.description}</p>
                  <Link href="/careers#apply" className="text-link dark-link" style={{ marginTop: 'auto', fontSize: 13 }}>
                    Learn more <ArrowRight size={14} />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Why work with us</div>
            <h2>Benefits & Culture</h2>
            <p>We invest in our team and create an environment where professionals can grow and make an impact.</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <Reveal key={benefit.title} delay={idx * 80} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ width: 44, height: 44, display: 'grid', placeItems: 'center', borderRadius: '50%', background: 'var(--red-light)', color: 'var(--red)', flex: '0 0 auto' }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ color: 'var(--navy)', margin: 0, fontSize: 16, fontWeight: 700 }}>{benefit.title}</h3>
                  <p style={{ color: 'var(--muted)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>{benefit.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="content-section" id="apply">
        <div className="container contact-grid">
          <Reveal className="contact-info" style={{ color: 'var(--ink)' }}>
            <div className="eyebrow"><span /> Apply or enquire</div>
            <h2 id="careers-application-title" style={{ color: 'var(--navy)' }}>Tell Us About Yourself</h2>
            <p style={{ color: 'var(--muted)', margin: '20px 0 30px' }}>Use the form to express your interest in a current position or submit a general enquiry.</p>
          </Reveal>
          <Reveal delay={150}>
            <div className="form-card">
              <div className="form-heading"><span>CAREERS</span><h3>Application Enquiry</h3></div>
              <ContactForm mode="careers" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="content-section">
        <div className="container contact-grid">
          <Reveal className="contact-info" style={{ color: 'var(--ink)' }}>
            <div className="eyebrow"><span /> Get in touch</div>
            <h2 id="careers-contact-title" style={{ color: 'var(--navy)' }}>Interested in Joining Us?</h2>
            <p style={{ color: 'var(--muted)', margin: '20px 0 30px' }}>Have questions about career opportunities at SETC? Contact our team to learn more or express your interest in a specific role.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={PHONE_LINK} className="button button-blue">
                Call us: {PHONE_NUMBER}
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button button-outline">
                WhatsApp us
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} style={{ background: 'var(--paper)', padding: 40, borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <h3 style={{ color: 'var(--navy)', margin: '0 0 12px', fontSize: 16, fontWeight: 700 }}>Not seeing the right role?</h3>
              <p style={{ color: 'var(--muted)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>We&apos;re always interested in hearing from talented professionals. Reach out to express your interest or submit a general enquiry.</p>
            </div>
            <Link href="/contact" className="button button-blue">
              Send Enquiry <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--navy)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow eyebrow-light"><span /> Ready to make an impact</div>
            <h2 style={{ color: 'white', marginTop: 16 }}>Build Your Career With SETC</h2>
            <p style={{ color: '#9fb7d5', maxWidth: 500, margin: '16px auto 30px' }}>Join a team dedicated to helping learners achieve their goals through quality education and support.</p>
            <Link href="/careers#apply" className="button button-blue">
              Apply or Enquire Now <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
