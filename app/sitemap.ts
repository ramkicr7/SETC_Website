import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.studentsdubai.com';
  const routes = ['', '/about', '/brands', '/careers', '/courses', '/services', '/englishwise', '/language-skills', '/language-skills/blog', '/accommodation', '/blog', '/blog/category/englishwise', '/blog/category/language-skills', '/blog/category/study-abroad', '/faq', '/contact', '/study-abroad', '/study-abroad/guidance', '/study-abroad/student-experience', '/study-abroad/accommodation', '/study-abroad/learning-options', '/study-abroad/student-journey', '/study-abroad/faq', '/corporates', '/corporates/englishwise-corporate', '/corporates/language-skills-corporate'];
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
