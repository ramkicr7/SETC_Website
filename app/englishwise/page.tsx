import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { RouteCard } from '@/components/RouteCard'
import { courses } from '@/lib/data'

export const metadata: Metadata = { title: 'EnglishWise UAE', description: 'English language and test preparation pathways through EnglishWise UAE.' }

export default function EnglishWisePage() {
  const examCourses = courses.filter((course) => ['ielts', 'pte', 'oet', 'naati-ccl', 'celpip', 'languagecert'].includes(course.slug))
  return <main><section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'EnglishWise UAE' }]} /><div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> EnglishWise UAE</div><h1>Prepare with purpose.</h1><p>English language and test preparation pathways for learners, professionals and teams.</p></div></section><section className="content-section"><div className="container brand-hub-intro"><div><div className="eyebrow"><span /> The EnglishWise pathway</div><h2>Focused preparation for your next opportunity.</h2></div><div><p>Explore recognised exam preparation, General English and corporate training pathways. Availability and delivery options can be discussed with our team.</p><Link className="button button-blue" href="/contact">Discuss your goal <ArrowRight size={17} /></Link></div></div></section><section className="content-section" style={{ background: 'var(--paper)' }}><div className="container"><div className="section-heading-row"><div><div className="eyebrow"><span /> Exam preparation</div><h2>Choose your pathway.</h2></div></div><div className="route-card-grid">{examCourses.map((course) => <RouteCard key={course.slug} href={`/courses/${course.slug}`} eyebrow={course.short} title={course.title} text={course.description} />)}</div><div className="route-card-grid route-card-grid-small"><RouteCard href="/courses/english-language-skills" title="General English" text="Develop broader English language skills for work, study and daily life." /><RouteCard href="/englishwise/corporate-training" title="Corporate Training" text="Explore EnglishWise corporate training information." /><RouteCard href="/blog/ielts-preparation-tips" title="Exam Tips" text="Read the current exam preparation insight available on the site." /><RouteCard href="/faq" title="FAQ" text="Find answers to common training and enrolment questions." /></div></div></section></main>
}
