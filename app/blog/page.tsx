import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { blogPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles and insights from SETC on English language training, exam preparation and learning in Dubai.',
};

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>Blog</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> Insights & Articles</div>
          <h1>Blog</h1>
          <p>Articles and insights on English language training, exam preparation and learning.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          {blogPosts.length > 0 ? (
            <div className="blog-grid">
              {blogPosts.map((post, i) => (
                <Reveal as="article" key={post.slug} className="blog-card" delay={i * 100}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className="blog-card-image">
                      <Image src={post.cover} alt={post.title} fill sizes="(max-width: 700px) 100vw, 400px" className="blog-image" />
                    </div>
                    <div className="blog-card-body">
                      <span className="blog-category">{post.category}</span>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <div className="blog-meta">
                        <span>{post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                      <span className="course-cta">Read More <ArrowRight size={15} /></span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="testimonial-card-empty">
              <FileText size={32} />
              <p>Blog posts are coming soon.</p>
              <span>Articles will appear here once published through the CMS.</span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
