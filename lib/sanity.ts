import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import { courses, type Course } from '@/lib/data';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

const writeToken = process.env.SANITY_API_WRITE_TOKEN;
export const sanityConfigured = Boolean(projectId);
export const sanityWritable = Boolean(projectId && writeToken);

export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion: '2024-10-01', useCdn: true, perspective: 'published', token: writeToken })
  : null;

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}) {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch {
    return null;
  }
}

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{siteName, phone, whatsapp, email, address, socialLinks, globalCta, seo}`;
export const brandsQuery = `*[_type == "brand" && published == true] | order(displayOrder asc){name, "slug": slug.current, logo, description, categories, officialWebsite, internalPage, heroImage}`;
export const servicesQuery = `*[_type == "service" && active == true] | order(displayOrder asc){title, "slug": slug.current, description, image, cta}`;
export const coursesQuery = `*[_type == "course" && published == true] | order(displayOrder asc){title, "slug": slug.current, category, description, heroImage, cta, seoTitle, seoDescription}`;
export const courseBySlugQuery = `*[_type == "course" && published == true && slug.current == $slug][0]{title, "slug": slug.current, category, description, heroImage, cta, seoTitle, seoDescription}`;
export const blogPostsQuery = `*[_type == "blogPost" && published == true] | order(publishDate desc){title, "slug": slug.current, excerpt, featuredImage, author, publishDate, category, featured}`;
export const faqsQuery = `*[_type == "faq" && published == true] | order(order asc){question, answer, category}`;

export type SanityImage = { asset?: { _ref?: string } };
export type SanityBrand = { name: string; slug: string; description?: string; categories?: string[]; officialWebsite?: string; internalPage?: string; logo?: SanityImage };
export type SanityBlogPost = { title: string; slug: string; excerpt?: string; author?: string; publishDate?: string; category?: string; featured?: boolean; featuredImage?: SanityImage };
export type SanityCourse = {
  title?: string;
  slug?: string;
  category?: string;
  description?: string;
  heroImage?: SanityImage;
  cta?: { label?: string; url?: string };
  seoTitle?: string;
  seoDescription?: string;
};

export type PublicCourse = Course & {
  seoTitle?: string;
  seoDescription?: string;
};

const builder = projectId ? createImageUrlBuilder({ projectId, dataset }) : null;

export function imageUrl(image?: SanityImage) {
  return builder && image?.asset?._ref ? builder.image(image).url() : undefined;
}

function mapSanityCourse(course: SanityCourse | null | undefined): PublicCourse | null {
  if (!course?.slug || !course.title || !course.description) return null;

  const fallback = courses.find((item) => item.slug === course.slug);
  if (!fallback) return null;

  return {
    ...fallback,
    title: course.title,
    short: course.category || fallback.short,
    description: course.description,
    image: imageUrl(course.heroImage) || fallback.image,
    seoTitle: course.seoTitle || undefined,
    seoDescription: course.seoDescription || undefined,
  };
}

export async function getCourses(): Promise<PublicCourse[]> {
  const sanityCourses = await sanityFetch<SanityCourse[]>(coursesQuery);
  const mappedCourses = sanityCourses?.map(mapSanityCourse).filter((course): course is PublicCourse => Boolean(course)) ?? [];

  if (!mappedCourses.length) return courses;
  return courses.map((fallbackCourse) => mappedCourses.find((course) => course.slug === fallbackCourse.slug) ?? fallbackCourse);
}

export async function getCourseBySlug(slug: string): Promise<PublicCourse | null> {
  const sanityCourse = await sanityFetch<SanityCourse>(courseBySlugQuery, { slug });
  const mappedCourse = mapSanityCourse(sanityCourse);
  if (mappedCourse) return mappedCourse;

  return courses.find((course) => course.slug === slug) ?? null;
}

export const sanityEnvironment = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset,
  studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
};
