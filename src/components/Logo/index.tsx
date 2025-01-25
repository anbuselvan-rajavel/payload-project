import Image from 'next/image'
import React from 'react'

type LogoProps = {
  loading?: 'eager' | 'lazy'
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ loading = 'lazy' }) => {
  return (
    <div className="relative w-32 h-8">
      <Image
        src="/media/zopa-logo.svg"
        alt="Brand Logo"
        className="object-contain"
        loading={loading}
        priority={loading === 'eager'}
        width={496}
        height={80}
      />
    </div>
  )
}
