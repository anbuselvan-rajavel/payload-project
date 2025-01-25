import React from 'react'
import type { Footer as FooterType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export const Footer: React.FC<FooterType> = ({ navItems }) => {
  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img src="/media/logo-white.svg" alt="Logo" className="h-8 mb-4" />
          <p className="text-sm">© 2025 ZOPA Connect. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4">
          {navItems?.map((item, index) => (
            <CMSLink key={index} {...item.link} className="text-sm" />
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}
