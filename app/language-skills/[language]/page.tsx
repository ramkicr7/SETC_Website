import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GuidancePage } from '@/components/GuidancePage'
import { languages } from '@/lib/data'

type Props = { params: { language: string } }
export function generateStaticParams() { return languages.map((language) => ({ language: language.slug })) }
export function generateMetadata({ params }: Props): Metadata { const language = languages.find((item) => item.slug === params.language); return language ? { title: `${language.name} | Language Skills Dubai`, description: `${language.name} language learning pathways through Language Skills Dubai.` } : { title: 'Language Not Found' } }
export default function LanguagePage({ params }: Props) { const language = languages.find((item) => item.slug === params.language); if (!language) notFound(); return <GuidancePage title={`${language.name} language learning`} intro={`Explore ${language.name} learning pathways through Language Skills Dubai.`} eyebrow={`${language.native} · Language Skills Dubai`} cards={[{ title: 'Regular Classes', text: 'Explore a structured learning format.', href: `/language-skills/${language.slug}/regular` }, { title: 'Intensive Classes', text: 'Discuss a concentrated learning format.', href: `/language-skills/${language.slug}/intensive` }, { title: 'Private Classes', text: 'Discuss individual learning options.', href: `/language-skills/${language.slug}/private` }, { title: 'Online Classes', text: 'Ask about online availability.', href: `/language-skills/${language.slug}/online` }, { title: 'Kids & Juniors', text: 'Ask about age-appropriate learning options.', href: `/language-skills/${language.slug}/kids` }]} /> }
