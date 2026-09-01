import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { courses } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Courses',
  description: 'Explore English language and exam preparation courses at SETC Dubai, including IELTS, PTE, OET, NAATI CCL, CELPIP, LanguageCert and Spoken English.',
};

export default function CoursesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>Courses</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> What we help with</div>
          <h1>Prepare With Confidence</h1>
          <p>Explore language and examination preparation designed around your learning goals.</p>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div className="course-grid">
            {courses.map((course, i) => (
              <Reveal as="article" key={course.slug} className="course-card" delay={i * 80}>
                <Link href={`/courses/${course.slug}`} className="course-card-link">
                  <div className={`course-icon ${course.tone}`}><course.icon size={24} /></div>
                  <span className="course-type">{course.short}</span>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <span className="course-cta">Learn More <ArrowRight size={15} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
