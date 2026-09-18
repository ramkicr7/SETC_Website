'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingButtons } from '@/components/layout/FloatingButtons'
import { PageTransition } from '@/components/layout/PageTransition'

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudioRoute =
    pathname === '/admin' ||
    pathname.startsWith('/admin/') ||
    pathname === '/studio' ||
    pathname.startsWith('/studio/')

  if (isStudioRoute) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <PageTransition>{children}</PageTransition>
      <Footer />
      <FloatingButtons />
    </>
  )
}
