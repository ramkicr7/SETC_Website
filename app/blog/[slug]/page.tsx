import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { blogPosts } from '@/lib/data';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.cover] },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>{post.title}</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> {post.category}</div>
          <h1>{post.title}</h1>
          <div className="blog-hero-meta">
            <span><User size={14} /> {post.author}</span>
            <span><Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </section>

      <article className="content-section">
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal>
            <div className="blog-cover-wrap">
              <Image src={post.cover} alt={post.title} fill sizes="(max-width: 700px) 100vw, 760px" className="blog-cover" />
            </div>
          </Reveal>
          <Reveal>
            <div className="blog-content">
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </article>

      {related.length > 0 && (
        <section className="content-section" style={{ background: 'var(--paper)' }}>
          <div className="container">
            <Reveal>
              <h2 style={{ color: 'var(--navy)', fontSize: 28, fontWeight: 800, letterSpacing: '-.03em', marginBottom: 32 }}>Related Posts</h2>
            </Reveal>
            <div className="blog-grid">
              {related.map((rp, i) => (
                <Reveal as="article" key={rp.slug} className="blog-card" delay={i * 100}>
                  <Link href={`/blog/${rp.slug}`}>
                    <div className="blog-card-image">
                      <Image src={rp.cover} alt={rp.title} fill sizes="(max-width: 700px) 100vw, 400px" className="blog-image" />
                    </div>
                    <div className="blog-card-body">
                      <span className="blog-category">{rp.category}</span>
                      <h3>{rp.title}</h3>
                      <p>{rp.excerpt}</p>
                      <span className="course-cta">Read More <ArrowRight size={15} /></span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
