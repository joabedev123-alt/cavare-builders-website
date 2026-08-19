import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getPostBySlug, blogPosts } from "@/data/blog";

// Generate static params for build time optimization
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Article not found | Cavare Builders",
    };
  }

  return {
    title: `${post.title} | Cavare Builders Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-28 pb-24 bg-[#faf9f6] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Breadcrumb items={[
          { label: "Blog", href: "/blog" },
          { label: post.title }
        ]} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="px-3 py-1 bg-brand-gold text-brand-black text-xs font-sans uppercase tracking-widest font-bold rounded-sm">
            {post.category}
          </span>
          <span className="text-sm font-sans text-brand-muted">
            {post.date}
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-black tracking-tight leading-[1.15] mb-8 text-center">
          {post.title}
        </h1>

        <div className="flex items-center justify-center gap-2 text-sm font-sans text-brand-muted mb-12">
          <span>By <span className="font-semibold text-brand-black">{post.author}</span></span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden rounded-lg shadow-md">
          <Image 
            src={post.coverImage} 
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="prose prose-lg prose-stone max-w-none 
          prose-headings:font-serif prose-headings:font-medium prose-headings:text-brand-black
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-brand-muted prose-p:font-light prose-p:leading-relaxed prose-p:mb-6
          prose-li:text-brand-muted prose-li:font-light
          prose-a:text-brand-gold hover:prose-a:text-[#d6b26e]
          prose-strong:font-semibold prose-strong:text-brand-black"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share & Back */}
        <div className="mt-16 pt-8 border-t border-brand-stone/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/blog" className="inline-flex items-center text-xs font-sans uppercase tracking-widest font-semibold text-brand-black hover:text-brand-gold transition-colors">
            <i className="bi bi-arrow-left mr-2 text-lg leading-none" /> Back to Blog
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-sans uppercase tracking-widest font-semibold text-brand-muted">Share:</span>
            <a href="#" className="w-8 h-8 rounded-full border border-brand-stone flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold transition-colors">
              <i className="bi bi-facebook" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-brand-stone flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold transition-colors">
              <i className="bi bi-linkedin" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-brand-stone flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold transition-colors">
              <i className="bi bi-twitter-x" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
