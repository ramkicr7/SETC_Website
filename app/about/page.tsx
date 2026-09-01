import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Users, Target, Globe2, Building2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { aboutImage } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Students Everywhere Training Center is a Dubai-based training center helping learners develop English language skills and prepare for internationally recognised examinations.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>About</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> About SETC</div>
          <h1>Building Skills for Opportunities Everywhere</h1>
          <p>A Dubai-based training center dedicated to helping learners develop strong communication skills and prepare for English language and professional examinations.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container about-grid">
          <Reveal className="about-visual">
            <div className="about-image-wrap">
              <Image src={aboutImage} alt="Student studying with laptop" fill sizes="(max-width: 700px) 100vw, 500px" className="about-image" />
            </div>
            <div className="about-badge"><Users size={18} /><span>Dubai-based training center</span></div>
          </Reveal>
          <Reveal className="about-copy" delay={150}>
            <div className="eyebrow"><span /> Our Story</div>
            <h2>Who We Are</h2>
            <p className="lead">Students Everywhere Training Center (SETC) is a training center based in Dubai, UAE, dedicated to supporting learners in developing strong communication and language skills.</p>
            <p>Our training services include preparation for IELTS, PTE, OET, NAATI CCL, CELPIP and LanguageCert, along with Spoken English and language skills training. Our programs are designed to support learners with different goals — whether preparing for an examination, improving English communication, pursuing professional opportunities or developing practical language skills.</p>
            <p>We offer flexible learning options, including classroom-based training in Dubai and online learning where applicable. Our approach focuses on helping learners understand their current needs, develop relevant skills and prepare in a structured and practical way.</p>
            <p>At Students Everywhere Training Center, we believe that learning should open doors to new opportunities. Through our training and learner-focused approach, we aim to support students as they build the knowledge, communication skills and confidence needed for their next step.</p>
          </Reveal>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> What drives us</div>
            <h2>Our Approach</h2>
            <p>Practical, structured and learner-focused training.</p>
          </Reveal>
          <div className="benefit-grid">
            {[
              { icon: Target, title: 'Goal-Oriented', text: 'Training that starts with what you want to achieve.' },
              { icon: Users, title: 'Learner-Focused', text: 'Support tailored to your current level and needs.' },
              { icon: Globe2, title: 'Flexible Options', text: 'Classroom training in Dubai and online learning where applicable.' },
            ].map((item, i) => (
              <Reveal as="article" key={item.title} className="benefit-card" delay={i * 100}>
                <div className="benefit-icon"><item.icon size={24} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Why language skills matter</div>
            <h2>Learning for Global Opportunities</h2>
            <p>Language is a bridge between people, cultures and opportunities.</p>
          </Reveal>
          <div className="container" style={{ maxWidth: 780, textAlign: 'center' }}>
            <Reveal>
              <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.85, marginBottom: 18 }}>English is one of the most widely used languages for international communication, education and professional work. Developing strong English skills can open doors to academic opportunities, professional growth and meaningful connections with people from around the world.</p>
              <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.85 }}>At SETC, we support learners in building the communication skills and confidence needed to pursue opportunities — wherever they may lead.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container contact-grid">
          <Reveal className="contact-info" style={{ color: 'var(--ink)' }}>
            <div className="eyebrow"><span /> Get in touch</div>
            <h2 style={{ color: 'var(--navy)' }}>Talk to Our Team</h2>
            <p style={{ color: 'var(--muted)', margin: '20px 0 30px' }}>Tell us about your learning goals. We&apos;ll help you find the right training path.</p>
            <Link className="button button-blue" href="/contact">Enquire Now <ArrowRight size={17} /></Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="form-card">
              <div className="form-heading"><span>ENQUIRE NOW</span><h3>Let&apos;s find your path.</h3></div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
