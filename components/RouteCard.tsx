import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function RouteCard({ href, eyebrow, title, text }: { href: string; eyebrow?: string; title: string; text: string }) {
  return <Link className="route-card" href={href}>{eyebrow && <span>{eyebrow}</span>}<h3>{title}</h3><p>{text}</p><strong>Explore <ArrowUpRight size={16} /></strong></Link>
}
