import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GuidancePage } from '@/components/GuidancePage'
import { languages } from '@/lib/data'

const deliveries = ['regular', 'intensive', 'private', 'online', 'kids']
type Props = { params: { language: string; delivery: string } }
export function generateStaticParams() { return languages.flatMap((language) => deliveries.map((delivery) => ({ language: language.slug, delivery }))) }
export function generateMetadata({ params }: Props): Metadata { const language = languages.find((item) => item.slug === params.language); return language ? { title: `${language.name} ${params.delivery} classes`, description: `${language.name} ${params.delivery} language learning information.` } : { title: 'Pathway Not Found' } }
export default function DeliveryPage({ params }: Props) { const language = languages.find((item) => item.slug === params.language); if (!language || !deliveries.includes(params.delivery)) notFound(); const title = params.delivery === 'kids' ? 'Kids & Juniors' : `${params.delivery.charAt(0).toUpperCase()}${params.delivery.slice(1)} classes`; return <GuidancePage title={`${language.name} ${title}`} intro={`Discuss ${language.name} ${params.delivery} learning options with the Language Skills Dubai team.`} eyebrow={`${language.native} · Language Skills Dubai`} cards={[{ title: 'Current availability', text: 'Contact our team for the latest schedule, level and delivery information.', href: '/contact' }, { title: 'Related resources', text: 'Explore the Language Skills resource area.', href: '/language-skills/blog' }, { title: 'Choose another pathway', text: 'Return to the full language pathway.', href: `/language-skills/${language.slug}` }]} /> }
