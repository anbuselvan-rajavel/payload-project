'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const SuperHighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  return (
    <section className="relative flex flex-col md:flex-row bg-gray-50">
      {/* Left Column - Content */}
      <div className="w-full md:w-1/2 px-14 ml-6 md:px-8 flex items-center">
        <div className="max-w-[36.5rem]">
          {richText && (
            <RichText className="mb-6 text-blue-600" data={richText} enableGutter={false} />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4">
              {links.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Right Column - Media */}
      <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-[80vh] select-none">
        {media && typeof media === 'object' && (
          <Media
            fill
            imgClassName="object-cover rounded-lg absolute inset-0 w-full h-full"
            priority
            resource={media}
          />
        )}
      </div>
    </section>
  )
}
