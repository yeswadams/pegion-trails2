import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  ChevronRight,
  Send,
  Image as ImageIcon,
} from "lucide-react";
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "@/lib/sanity/client";
import BlogContentWrapper from "@/_components/blog/blog-content-wrapper";
import ScrollPopup from "@/_components/blog/scroll-popup";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  body,
  author->{name},
  categories[]->{_id, title}
}`;

const RECENT_POSTS_QUERY = `*[_type == "post" && defined(slug.current)]
  | order(publishedAt desc)[0...8]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  excerpt,
  body,
  categories[]->{_id, title}
}`;

const CATEGORIES_QUERY = `*[_type == "category"]{
  _id,
  title
}`;

const getImageUrl = (source: any) => {
  if (!source) return "";
  return urlFor(source).width(1400).quality(80).url();
};

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) => {
  if (!projectId || !dataset || !source) return null;
  try {
    return imageUrlBuilder({ projectId, dataset }).image(source);
  } catch (error) {
    console.error("Error building image URL:", error);
    return null;
  }
};

const options = { next: { revalidate: 30 } };

// Helper to slugify text for IDs
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

// PortableText Components for custom styling
const components = {
  types: {
    image: ({ value }: any) => {
      const imageUrl = urlFor(value)?.url();
      if (!imageUrl) return null;
      return (
        <div className="my-12 relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg group">
          <Image
            src={imageUrl}
            alt={value.alt || "Blog content image"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {value.caption && (
            <p className="mt-4 text-center text-sm text-gray-500 italic px-4">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-[#09083b] font-bold border-b-2 border-[#09083b]/20 hover:border-[#09083b] hover:text-blue-700 transition-all duration-300 decoration-none"
        target={value.blank ? "_blank" : undefined}
        rel={value.blank ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
  block: {
    h2: ({ children, value }: any) => {
      const id = slugify(value.children[0].text);
      return (
        <h2
          id={id}
          className="text-3xl md:text-5xl font-bold text-[#09083b] mt-20 mb-10 onest scroll-mt-32 leading-tight"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, value }: any) => {
      const id = slugify(value.children[0].text);
      return (
        <h3
          id={id}
          className="text-2xl md:text-4xl font-bold text-[#09083b] mt-16 mb-8 onest scroll-mt-32 leading-tight"
        >
          {children}
        </h3>
      );
    },
    h4: ({ children }: any) => (
      <h4 className="text-xl md:text-3xl font-bold text-[#09083b] mt-12 mb-6 onest">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 text-lg md:text-xl leading-[1.8] mb-10 font-[Inter,sans-serif] tracking-tight selection:bg-blue-100">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-12 border-[#09083b] pl-12 py-10 my-16 bg-[#09083b]/5 rounded-r-[40px] italic text-2xl md:text-4xl text-[#09083b] font-medium leading-relaxed shadow-inner">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-none space-y-8 mb-12 pl-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal space-y-8 mb-12 pl-12 text-[#09083b] font-bold text-xl marker:text-[#09083b]">
        {children}
      </ol>
    ),
    roman: ({ children }: any) => (
      <ol className="list-[lower-roman] space-y-8 mb-12 pl-12 text-[#09083b] font-bold text-xl marker:text-[#09083b]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-5 text-gray-700 text-lg md:text-xl font-light leading-relaxed">
        <span className="mt-3.5 w-3 h-3 rounded-full bg-[#09083b] shrink-0 shadow-sm" />
        <span className="flex-1">{children}</span>
      </li>
    ),
    number: ({ children }: any) => (
      <li className="text-gray-700 text-lg md:text-xl font-light leading-relaxed pl-3">
        {children}
      </li>
    ),
    roman: ({ children }: any) => (
      <li className="text-gray-700 text-lg md:text-xl font-light leading-relaxed pl-3 uppercase tracking-widest">
        {children}
      </li>
    ),
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug },
    options,
  );

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.body
      ? post.body[0]?.children[0]?.text?.substring(0, 145)
      : "Read more about this story on Echelon Realty.",
    alternates: {
      canonical: `https://www.echelonrealty.org/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.body
        ? post.body[0]?.children[0]?.text?.substring(0, 145)
        : "Read more about this story on Echelon Realty.",
      images: post.image ? [urlFor(post.image)?.url()] : [],
    },
  };
}

export default async function BlogsDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug },
    options,
  );
  const recentPosts = await client.fetch<SanityDocument[]>(
    RECENT_POSTS_QUERY,
    {},
    options,
  );
  const categories = await client.fetch<SanityDocument[]>(
    CATEGORIES_QUERY,
    {},
    options,
  );

  if (!post) {
    return <div className="p-20 text-center">Post not found</div>;
  }

  // Extract headings for Table of Contents
  const headings =
    post.body
      ?.filter(
        (block: any) => block._type === "block" && /^h[23]$/.test(block.style),
      )
      .map((block: any) => ({
        text: block.children[0].text,
        level: block.style,
        id: slugify(block.children[0].text),
      })) || [];

  const mainImageUrl = post.mainImage
    ? urlFor(post.mainImage)?.url() || "/images/placeholder.jpg"
    : "/images/placeholder.jpg";

  return (
    <BlogContentWrapper>
      <ScrollPopup />
      <main className="min-h-screen bg-white max-w-full pt-40 pb-20 selection:bg-blue-100 selection:text-[#09083b]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-16 md:mb-24">
            <div className="flex items-center gap-3 text-[14px] font-bold text-gray-500 mb-8 uppercase tracking-[0.3em]">
              <Link
                href="/blog"
                className="hover:text-[#09083b] transition-colors"
              >
                Blogs
              </Link>
              <ChevronRight size={14} className="text-gray-300" />
              <span className="text-[#09083b] bg-[#09083b]/5 px-3 py-1 rounded-full">
                {post.categories?.[0]?.title || "Article"}
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-light text-[#09083b] mb-12 onest leading-[1.1] tracking-tight antialiased">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#09083b] flex items-center justify-center text-white font-bold text-lg">
                  {(post.author?.name || "A")[0]}
                </div>
                <div className="text-left">
                  <p className="text-[#09083b] font-bold">
                    {post.author?.name || "Pegion Trails"}
                  </p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">
                    Author
                  </p>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-left">
                <p className="text-[#09083b] font-bold">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <p className="text-gray-400 text-xs uppercase tracking-wider">
                  Published
                </p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-21/10 rounded-[32px] md:rounded-[40px] overflow-hidden mb-16 md:mb-32 group border border-gray-100">
            <Image
              src={getImageUrl(post.mainImage)}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
            {/* Main Content */}
            <article className="lg:col-span-8 flex flex-col select-none">
              <div className="prose prose-xl max-w-none prose-headings:text-[#09083b] prose-p:text-gray-700 prose-a:text-[#09083b]">
                <PortableText value={post.body} components={components} />
              </div>

              {/* Tags + Share */}
              <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-10">
                <div className="flex flex-col gap-6">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
                    <Tag size={14} className="text-[#09083b]" /> Article Tags
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {post.categories?.map((cat: any) => (
                      <span
                        key={cat._id}
                        className="text-sm font-bold px-6 py-2 bg-[#09083b]/5 text-[#09083b] rounded-full hover:bg-[#09083b] hover:text-white transition-all cursor-default"
                      >
                        {cat.title}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 text-right">
                    Share this story
                  </span>
                  <div className="flex gap-4 justify-end">
                    {[Facebook, Twitter, Linkedin, LinkIcon].map((Icon, i) => (
                      <button
                        key={i}
                        className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#09083b] hover:bg-[#09083b] hover:text-white transition-all shadow-sm group"
                      >
                        <Icon
                          size={18}
                          className="transition-transform group-hover:scale-110"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-16">
              <div className="sticky top-40 space-y-16">
                {/* Table of Contents - Sidebar */}
                {headings.length > 0 && (
                  <div className="p-10 bg-[#09083b]/2 rounded-[40px] border border-gray-50">
                    <h4 className="text-xs font-bold text-[#09083b] uppercase tracking-[0.2em] mb-8 border-b border-gray-100 pb-4">
                      On this page
                    </h4>
                    <nav className="flex flex-col gap-5">
                      {headings.map((heading: any, i: number) => (
                        <a
                          key={i}
                          href={`#${heading.id}`}
                          className={`text-base transition-all hover:translate-x-1 ${
                            heading.level === "h3"
                              ? "pl-6 text-gray-400 text-sm font-medium border-l border-gray-200"
                              : "text-[#09083b] font-bold hover:text-blue-600"
                          }`}
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Recent Posts - Premium Cards */}
                <div className="space-y-8">
                  <h4 className="text-xs font-bold text-[#09083b] uppercase tracking-[0.2em] mb-4">
                    Latest Insights
                  </h4>
                  <div className="space-y-6">
                    {recentPosts
                      .filter((p) => p._id !== post._id)
                      .slice(0, 3)
                      .map((rPost) => (
                        <Link
                          key={rPost._id}
                          href={`/blog/${rPost.slug.current}`}
                          className="flex gap-5 group"
                        >
                          <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden shadow-md">
                            <Image
                              src={
                                rPost.mainImage
                                  ? urlFor(rPost.mainImage)?.url() ||
                                    "/images/placeholder.jpg"
                                  : "/images/placeholder.jpg"
                              }
                              alt={rPost.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-110"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h5 className="text-base font-bold text-[#09083b] line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors mb-2">
                              {rPost.title}
                            </h5>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                              {new Date(rPost.publishedAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                },
                              )}
                            </span>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Newsletter/CTA */}
                <div className="p-10 bg-[#09083b] rounded-[40px] text-white shadow-xl flex flex-col gap-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <h4 className="text-2xl font-bold leading-tight relative z-10">
                    Stay updated with Pegion Trails
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed relative z-10">
                    Get the latest stories and insights onto real estate and
                    lifestyle delivered box.
                  </p>
                  <div className="relative z-10">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:bg-white/20 transition-all text-sm mb-4 placeholder:text-white/40"
                    />
                    <button className="w-full bg-white text-[#09083b] font-bold py-4 rounded-2xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                      Subscribe <Send size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Premium CTA Section */}
          <div className="mt-24 md:mt-32 p-10 md:p-20 bg-gradient-to-br from-[#09083b] to-[#1a1a4a] rounded-[60px] md:rounded-[50px] text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 onest leading-tight">
                Let’s build something{" "}
                <span className="text-[#b8d7ff]">worth remembering</span>.
              </h2>

              <p className="text-lg md:text-xl text-white/70 mb-10 font-light">
                From strategy to execution, we help ambitious brands stand out,
                scale up, and stay relevant in a noisy world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="relative overflow-hidden bg-white text-[#09083b] font-bold px-10 py-5 rounded-full text-lg shadow-lg group inline-flex items-center justify-center"
                >
                  <span className="relative h-6 overflow-hidden block">
                    <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                      Book A Demo
                    </span>
                    <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                      Let’s Talk →
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
            {recentPosts
              .filter((p) => p._id !== post._id)
              .slice(0, 3)
              .map((rPost) => {
                const description =
                  rPost.excerpt ||
                  rPost.body?.[0]?.children?.[0]?.text?.slice(0, 120) + "...";

                return (
                  <Link
                    key={rPost._id}
                    href={`/blog/${rPost.slug.current}`}
                    className="group bg-white border-gray-100 overflow-hidden transition-all duration-500 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={
                          rPost.mainImage
                            ? urlFor(rPost.mainImage)?.url() ||
                              "/images/placeholder.jpg"
                            : "/images/placeholder.jpg"
                        }
                        alt={rPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="py-6 flex flex-col flex-1">
                      {/* Category */}
                      <span className="text-[12px] font-light uppercase tracking-[0.2em] text-[#09083b]/60 mb-3">
                        {rPost.categories?.[0]?.title || "Article"}
                      </span>

                      {/* Title */}
                      <h3 className="text-lg font-normal text-[#09083b] mb-3 group-hover:underline transition-colors line-clamp-2">
                        {rPost.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                        {description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {rPost.categories?.slice(0, 3).map((cat: any) => (
                          <span
                            key={cat._id}
                            className="text-xs font-normal px-3 py-1 bg-[#09083b]/5 text-[#09083b] rounded-full hover:bg-[#09083b] hover:text-white transition-all"
                          >
                            #{cat.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </main>
    </BlogContentWrapper>
  );
}
