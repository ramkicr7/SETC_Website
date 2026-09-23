import Link from 'next/link'

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link>{items.map((item, index) => <span key={`${item.label}-${index}`}> / {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</span>)}</nav>
}
