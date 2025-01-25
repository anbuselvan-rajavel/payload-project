'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { HeaderNav } from './Nav'
import type { Header } from '@/payload-types'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const pathname = usePathname()

  useEffect(() => {}, [pathname])

  return (
    <header className="relative z-20 bg-white">
      <div className="py-3 mx-16 flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-6">
          <HeaderNav data={data} />
          <div className="flex gap-4">
            <Button
              onClick={() => (window.location.href = '/contact')}
              variant="outline"
              className="bg-blue-600 text-white"
            >
              Join Now
            </Button>
            <Button onClick={() => (window.location.href = '/contact')}>Sign In</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
