import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Vinoth Kumar',
  description:
    'website of Vinoth Kumar Rajendran - Software Engineer and Tech Enthusiast.',
  href: 'https://vinothvkr.com',
  author: 'vinothvkr',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const ANALYTICS = {
  google: import.meta.env.PUBLIC_GOOGLE_ANALYTICS_ID || '',
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/vinothvkr',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/_vinothvkr',
    label: 'Twitter',
  },
  {
    href: 'mailto:vinothvkr@hotmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
