import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getFeaturedPost, getRegularPosts } from "@/data/blog";

export const metadata = {
  title: "Blog & Insights | Cavare Builders LLC",
  description: "Insights, construction tips, and luxury interior design trends in South Florida by Cavare Builders.",
};

export default function BlogPage() {
  const featuredPost = getFeaturedPost();
  const regularPosts = getRegularPosts();

  return (
    <div className="pt-28 pb-24 bg-brand-marble min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Breadcrumb items={[{ label: "Blog" }]} />

        <div className="max-w-3xl mt-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-brand-gold" />
            <span className="text-xs font-sans uppercase tracking-ultra font-semibold text-brand-gold">
              CAVARE INSIGHTS
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-black tracking-tight leading-[1.15] mb-6">
            Ideas, Trends & <br />
            <span className="italic font-normal text-brand-gold">Design Insights.</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed">
            Follow our articles exploring the world of luxury construction, structural renovations, and the latest in interior design across South Florida.
          </p>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden rounded-lg shadow-md">
              <Image 
                src={featuredPost.coverImage} 
                alt={featuredPost.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-4xl text-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-brand-gold text-brand-black text-xs font-sans uppercase tracking-widest font-bold rounded-sm">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm font-sans text-stone-300">
                    {featuredPost.date}
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-medium leading-tight mb-4 group-hover:text-brand-gold transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                <p className="text-stone-300 text-lg font-light line-clamp-2 md:line-clamp-3 max-w-2xl">
                  {featuredPost.excerpt}
                </p>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Regular Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-serif text-2xl text-brand-black mb-10 pb-4 border-b border-brand-stone/40">Recent Articles</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {regularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col h-full">
              <div className="relative h-64 w-full overflow-hidden rounded-sm shadow-sm mb-6">
                <Image 
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="flex items-center gap-3 mb-3 text-xs font-sans uppercase tracking-widest">
                <span className="text-brand-gold font-bold">{post.category}</span>
                <span className="text-brand-muted">• {post.date}</span>
              </div>
              
              <h4 className="font-serif text-2xl font-medium text-brand-black mb-3 group-hover:text-brand-gold transition-colors duration-300">
                {post.title}
              </h4>
              
              <p className="text-brand-muted font-light leading-relaxed mb-6 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="mt-auto flex items-center text-xs font-sans uppercase tracking-widest font-semibold text-brand-black group-hover:text-brand-gold transition-colors">
                Read full article <i className="bi bi-arrow-right ml-2 text-lg leading-none" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
