import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.studentsdubai.com';
  const routes = ['', '/about', '/courses', '/services', '/englishwise', '/language-skills', '/faq', '/contact'];
  const courses = ['ielts', 'pte', 'oet', 'naati-ccl', 'celpip', 'languagecert', 'spoken-english', 'english-language-skills'];

  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...courses.map((slug) => ({
      url: `${base}/courses/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
