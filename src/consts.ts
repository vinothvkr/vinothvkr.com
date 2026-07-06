import type { SvgComponent } from 'astro/types'
import Email from '@/assets/icons/email.svg'
import GitHub from '@/assets/icons/github.svg'
import RSS from '@/assets/icons/rss.svg'
import Twitter from '@/assets/icons/twitter.svg'

export const ANALYTICS = {
  google: import.meta.env.PUBLIC_GOOGLE_ANALYTICS_ID || '',
}

export const SITE = {
  title: 'Vinoth Kumar',
  description:
    'Website of Vinoth Kumar Rajendran - Software Engineer and Tech Enthusiast.',
  locale: 'en-US',
  dir: 'ltr',
  defaultPageImage: '/static/opengraph-image.png',
  defaultPostImage: '/static/1200x630.png',
} as const

export const NAVIGATION = [
  { href: '/blog', label: 'Blog' },
  // { href: "/projects", label: "Projects" },
  { href: '/about', label: 'About' },
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: 'https://github.com/vinothvkr', label: 'GitHub', icon: GitHub },
  { href: 'https://twitter.com/_vinothvkr', label: 'Twitter', icon: Twitter },
  { href: 'mailto:vinothvkr@hotmail.com', label: 'Email', icon: Email },
  { href: '/rss.xml', label: 'RSS', icon: RSS },
]
