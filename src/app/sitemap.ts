import { MetadataRoute } from 'next'
import { blogArticles } from '@/data/blogArticles'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tucsonslableakpros.com'
  const contentUpdatedAt = new Date('2026-07-19')
  
  // Core Pages
  const routes = [
    '',
    '/services',
    '/slab-leak-faq',
    '/blog',
    '/contact',
    '/service-areas',
    '/request-slab-leak-inspection',
  ]

  // Service Pages
  const services = [
    '/slab-leak-detection-tucson',
    '/slab-leak-repair-tucson',
    '/water-line-rerouting-tucson',
    '/under-slab-pipe-repair-tucson',
    '/electronic-leak-detection-tucson',
    '/partial-repiping-tucson',
    '/emergency-slab-leak-service-tucson',
    '/hot-water-slab-leak-tucson',
    '/cold-water-slab-leak-tucson',
    '/water-line-pressure-testing-tucson',
  ]

  // Informational Pages
  const info = [
    '/slab-leak-repair-cost-tucson',
    '/signs-of-a-slab-leak',
    '/slab-leak-vs-foundation-problem',
    '/how-slab-leak-detection-works',
  ]

  // Service Areas
  const serviceAreas = [
    '/service-areas/central-tucson',
    '/service-areas/north-tucson',
    '/service-areas/east-tucson',
    '/service-areas/south-tucson',
    '/service-areas/west-tucson',
    '/service-areas/oro-valley',
    '/service-areas/catalina-foothills',
    '/service-areas/rita-ranch',
    '/service-areas/southwest-tucson',
    '/service-areas/catalina-saddlebrooke',
  ]
  
  // Legal Pages
  const legal = [
    '/privacy-policy',
    '/terms-and-conditions',
    '/service-disclaimer',
    '/accessibility',
    '/cookie-policy',
  ]

  const articles = blogArticles.map((article) => `/blog/${article.slug}`)

  const allPaths = [...routes, ...services, ...info, ...serviceAreas, ...articles, ...legal]

  return allPaths.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: contentUpdatedAt,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : route.startsWith('/blog/') ? 0.7 : 0.8,
  }))
}
