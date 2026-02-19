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
  Send
} from "lucide-react";
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";


const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  body,
  author->{name},
  categories[]->{title}
}`;

const RECENT_POSTS_QUERY = `*[_type == "post" && defined(slug.current)]
  | order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  publishedAt,
  image
}`;

const CATEGORIES_QUERY = `*[_type == "category"]{
  _id,
  title
}`;

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
  block: {
    h2: ({ children, value }: any) => {
      const id = slugify(value.children[0].text);
      return (
        <h2 id={id} className="text-3xl md:text-4xl font-bold text-black mt-16 mb-6 onest scroll-mt-32">
          {children}
        </h2>
      );
    },
    h3: ({ children, value }: any) => {
      const id = slugify(value.children[0].text);
      return (
        <h3 id={id} className="text-2xl md:text-3xl font-bold text-black mt-12 mb-4 onest scroll-mt-32">
          {children}
        </h3>
      );
    },
    h4: ({ children }: any) => (
      <h4 className="text-xl md:text-2xl font-bold text-black mt-10 mb-4 onest">
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-lg md:text-xl font-bold text-black mt-8 mb-3 onest">
        {children}
      </h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-base md:text-lg font-bold text-black mt-6 mb-2 onest uppercase tracking-wide">
        {children}
      </h6>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[var(--gold-primary)] pl-8 py-4 my-10 bg-[var(--gold-primary)]/5 rounded-r-2xl italic text-xl text-black font-medium leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-none space-y-4 mb-8 pl-4">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal space-y-4 mb-8 pl-8 text-black font-semibold">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-3 text-gray-600 text-lg font-medium leading-relaxed">
        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)] shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: any) => (
      <li className="text-gray-600 text-lg font-medium leading-relaxed pl-2">
        {children}
      </li>
    ),
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug }, options);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.body ? post.body[0]?.children[0]?.text?.substring(0, 145) : "Read more about this story on Echelon Realty.",
    alternates: {
      canonical: `https://www.echelonrealty.org/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.body ? post.body[0]?.children[0]?.text?.substring(0, 145) : "Read more about this story on Echelon Realty.",
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

  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug }, options);
  const recentPosts = await client.fetch<SanityDocument[]>(RECENT_POSTS_QUERY, {}, options);
  const categories = await client.fetch<SanityDocument[]>(CATEGORIES_QUERY, {}, options);

  if (!post) {
    return <div className="p-20 text-center">Post not found</div>;
  }

  // Extract headings for Table of Contents
  const headings = post.body
    ?.filter((block: any) => block._type === "block" && /^h[23]$/.test(block.style))
    .map((block: any) => ({
      text: block.children[0].text,
      level: block.style,
      id: slugify(block.children[0].text),
    })) || [];

  const mainImageUrl = post.image
    ? urlFor(post.image)?.url() || "/images/placeholder.jpg"
    : "/images/placeholder.jpg";

  return (
    <main className="min-h-screen bg-[#f9f9f7] w-full pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Table of Contents - Desktop Left (Locked to furthest left) */}
          {/* <aside className="hidden lg:block lg:col-span-5">
            <div className="sticky top-40 space-y-8">
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
                <nav className="flex flex-col gap-4 pl-6">
                  <span className="text-[10px] font-bold text-[var(--gold-primary)] uppercase tracking-[0.2em] mb-2">
                    Contents
                  </span>
                  {headings.map((heading: any, i: number) => (
                    <a
                      key={i}
                      href={`#${heading.id}`}
                      className={`text-sm font-bold transition-all hover:text-[var(--gold-primary)] leading-snug ${heading.level === "h3" ? "pl-4 text-gray-400 font-semibold" : "text-black"
                        }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside> */}

          {/* Header Area + Content + Sidebar */}
          <div className="lg:col-span-10">
            {/* Header Section */}
            <div className="mb-12">
              <div className="flex items-center gap-4 text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">
                <span className="text-[var(--gold-primary)]">
                  {post.author?.name || "Author"}
                </span>
                <span>•</span>
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-black mb-10 onest leading-tight max-w-4xl">
                {post.title}
              </h1>

              <div className="relative w-full aspect-[21/12] rounded-[40px] overflow-hidden shadow-2xl mb-16">
                <Image
                  src={mainImageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-md px-6 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/20">
                  {post.categories?.[0]?.title || "Article"}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16">
              {/* Main Content */}
              <article className="lg:col-span-7">
                {/* Mobile ToC */}
                {headings.length > 0 && (
                  <div className="lg:hidden mb-12 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                    <h4 className="text-sm font-bold text-[var(--gold-primary)] uppercase tracking-widest mb-6">
                      Jump to Section
                    </h4>
                    <nav className="flex flex-col gap-4">
                      {headings.map((heading: any, i: number) => (
                        <a
                          key={i}
                          href={`#${heading.id}`}
                          className={`text-base font-bold text-black hover:text-[var(--gold-primary)] transition-colors ${heading.level === "h3" ? "pl-4 text-gray-500 font-semibold text-sm" : ""
                            }`}
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                <div className="prose prose-lg max-w-none">
                  <PortableText value={post.body} components={components} />
                </div>

                {/* Tags + Share */}
                <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                      <Tag size={16} /> Tags:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {post.categories?.map((cat: any) => (
                        <span
                          key={cat._id}
                          className="text-xs font-semibold px-4 py-1 bg-gray-100 rounded-full"
                        >
                          {cat.title}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 text-gray-400">
                    {[Facebook, Twitter, Linkedin, LinkIcon].map((Icon, i) => (
                      <Icon key={i} size={18} />
                    ))}
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-3 space-y-12">
                {/* Categories */}
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold mb-6 border-b border-gray-100 pb-4">
                    Category
                  </h4>
                  <ul className="space-y-4">
                    {categories.map((cat) => (
                      <li key={cat._id}>
                        <Link
                          href={`/blog?category=${cat.title}`}
                          className="flex items-center justify-between text-gray-600 hover:text-[var(--gold-primary)]"
                        >
                          <span className="font-semibold text-sm flex items-center gap-2">
                            <ChevronRight size={14} />
                            {cat.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold mb-6 border-b border-gray-100 pb-4">
                    Recent News
                  </h4>
                  <div className="space-y-8">
                    {recentPosts.map((rPost) => (
                      <Link
                        key={rPost._id}
                        href={`/resources/blog/${rPost.slug.current}`}
                        className="flex gap-4 group"
                      >
                        <div className="relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden">
                          <Image
                            src={
                              rPost.image
                                ? urlFor(rPost.image)?.url() || "/images/placeholder.jpg"
                                : "/images/placeholder.jpg"
                            }
                            alt={rPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h5 className="text-sm font-bold line-clamp-2 mb-1">
                            {rPost.title}
                          </h5>
                          <span className="text-[10px] font-bold text-gray-400 uppercase">
                            {new Date(rPost.publishedAt).toLocaleDateString()}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}