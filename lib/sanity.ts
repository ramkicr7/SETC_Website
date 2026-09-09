import { createClient } from '@sanity/client';

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
  return sanityClient.fetch<T>(query, params);
}

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{siteName, phone, whatsapp, email, address, socialLinks, globalCta, seo}`;
export const brandsQuery = `*[_type == "brand" && published == true] | order(displayOrder asc){name, "slug": slug.current, logo, description, categories, officialWebsite, internalPage, heroImage}`;
export const servicesQuery = `*[_type == "service" && active == true] | order(displayOrder asc){title, "slug": slug.current, description, image, cta}`;
export const coursesQuery = `*[_type == "course" && published == true] | order(displayOrder asc){title, "slug": slug.current, category, description, heroImage, cta}`;
export const blogPostsQuery = `*[_type == "blogPost" && published == true] | order(publishDate desc){title, "slug": slug.current, excerpt, featuredImage, author, publishDate, category, featured}`;
export const faqsQuery = `*[_type == "faq" && published == true] | order(order asc){question, answer, category}`;

export type SanityImage = { asset?: { _ref?: string } };
export type SanityBrand = { name: string; slug: string; description?: string; categories?: string[]; officialWebsite?: string; internalPage?: string; logo?: SanityImage };
export type SanityBlogPost = { title: string; slug: string; excerpt?: string; author?: string; publishDate?: string; category?: string; featured?: boolean; featuredImage?: SanityImage };

export function imageUrl(image?: SanityImage) {
  return image?.asset?._ref ? `https://cdn.sanity.io/images/${projectId}/${dataset}/${image.asset._ref.replace('image-', '').replace('-png', '.png').replace('-jpg', '.jpg').replace('-webp', '.webp')}` : undefined;
}

export const sanityEnvironment = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset,
  studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
};
