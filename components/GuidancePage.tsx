import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Reveal } from '@/components/Reveal'

export function GuidancePage({ title, intro, eyebrow = 'SETC pathway', cards }: { title: string; intro: string; eyebrow?: string; cards: { title: string; text: string; href?: string }[] }) {
  return <main><section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: title }]} /><div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> {eyebrow}</div><h1>{title}</h1><p>{intro}</p></div></section><section className="content-section"><div className="container"><div className="route-card-grid">{cards.map((card, index) => <Reveal as="article" key={card.title} delay={index * 70}>{card.href ? <a className="route-card" href={card.href}><h2>{card.title}</h2><p>{card.text}</p><strong>Explore <ArrowRight size={16} /></strong></a> : <div className="route-card"><h2>{card.title}</h2><p>{card.text}</p></div>}</Reveal>)}</div><div className="guidance-cta"><h2>Discuss the right pathway</h2><p>Contact our team for current availability and relevant options.</p><Link className="button button-blue" href="/contact">Enquire Now <ArrowRight size={17} /></Link></div></div></section></main>
}
