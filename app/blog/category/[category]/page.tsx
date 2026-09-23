import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const labels: Record<string, string> = { englishwise: 'EnglishWise', 'study-abroad': 'Study Abroad', 'language-skills': 'Language Skills' }
type Props = { params: { category: string } }
export function generateStaticParams() { return Object.keys(labels).map((category) => ({ category })) }
export function generateMetadata({ params }: Props): Metadata { return { title: `${labels[params.category] ?? 'Insights'} | Blog`, description: `Insights and resources related to ${labels[params.category] ?? 'SETC'}.` } }
export default function CategoryPage({ params }: Props) { const label = labels[params.category]; if (!label) return <main><section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'Blog' }, { label: 'Category' }]} /><h1>Insights</h1><p>Explore the latest SETC insight.</p></div></section></main>; const posts = blogPosts.filter((post) => params.category === 'englishwise' ? post.category === 'Exam Preparation' : params.category === 'language-skills' ? post.category === 'Language Skills' : false); return <main><section className="page-hero"><div className="container"><Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label }]} /><div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> Blog / Insights</div><h1>{label} insights.</h1><p>Available articles and resources from the SETC content library.</p></div></section><section className="content-section"><div className="container"><div className="blog-grid">{posts.length ? posts.map((post) => <article className="blog-card" key={post.slug}><Link href={`/blog/${post.slug}`}><div className="blog-card-image"><Image src={post.cover} alt="" fill sizes="(max-width: 600px) 100vw, 33vw" /></div><div><span>{post.category}</span><h2>{post.title}</h2><p>{post.excerpt}</p><strong>Read article <ArrowRight size={16} /></strong></div></Link></article>) : <div className="empty-state"><h2>No published articles in this category yet.</h2><p>Explore all available insights or contact SETC for current information.</p><Link className="button button-blue" href="/blog">View all insights <ArrowRight size={17} /></Link></div>}</div></div></section></main> }
