import Link from "next/link";
import { client } from "@/sanity/client";
import { getAllPosts, urlFor } from "@/lib/sanity";
import Image from "next/image";
import { div } from "framer-motion/m";

export const revalidate = 30;

const BLOG_QUERY = `
{
  "hero": *[
    _type == "post" &&
    defined(slug.current) &&
    isHero == true
  ] | order(publishedAt desc)[0...2]{
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    author->{name, image}
  },

  "aiSection": *[
    _type == "post" &&
    defined(slug.current) &&
    isAISection == true
  ] | order(publishedAt desc)[0...5]{
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    categories[]->{title}
  },

  "feed": *[
    _type == "post" &&
    defined(slug.current) &&
    isHero != true &&
    isAISection != true
  ] | order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    categories[]->{title},
    publishedAt
  }
}
`;

const getImageUrl = (source: any) => {
  if (!source) return "";
  return urlFor(source).width(1400).quality(80).url();
};

export default async function BlogPage() {
  const data = await client.fetch(BLOG_QUERY);

  return (
    <div className="flex flex-col w-full bg-white antialiased font-sans">
      <BlogHero posts={data.hero} />
      <AISection posts={data.aiSection} />
      <PostGrid posts={data.feed} />
    </div>
  );
}

/* ---------------- HERO SECTION ---------------- */

function BlogHero({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="max-w-full mx-auto px-4 md:px-12 py-32">
      <div className="text-center mb-20">
        <span className="uppercase font-semibold text-[16px] text-[var(--color-primary)]">
          Our Blog
        </span>
        <h1 className="text-5xl md:text-6xl text-[var(--color-primary)] mt-4">
          Creative <em>Performance</em>
        </h1>
        <p className="text-gray-500 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
          Insights and analysis to help you build a high-performing creative
          engine.
        </p>
      </div>

      <div
        className={`grid gap-12 ${
          posts.length === 1
            ? "md:grid-cols-1 max-w-3xl mx-auto"
            : "md:grid-cols-2"
        }`}
      >
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group"
          >
            <article>
              <div className="relative overflow-hidden rounded-2xl mb-8 aspect-video bg-gray-100">
                <img
                  src={getImageUrl(post.mainImage)}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h2 className="text-3xl font-normal font-serif leading-tight text-[var(--color-primary)] group-hover:underline transition-colors">
                {post.title}
              </h2>

              <p className="mt-4 text-gray-600 line-clamp-2 text-lg leading-relaxed">
                {post.excerpt}
              </p>

              {post.author && (
                <div className="mt-6 text-sm text-gray-500">
                  By{" "}
                  <span className="font-medium text-gray-900">
                    {post.author.name}
                  </span>
                </div>
              )}
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ---------------- AI SECTION ---------------- */

function AISection({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0)
    return (
      <div className="bg-[var(--color-primary)] ma-w-full h-screen text-white text-lg flex flex-col items-center py-32 px-4 md:px-12">
        {" "}
        <div className="flex flex-col items-center mb-20">
          <span className="text-white uppercase tracking-[0.3em] text-xs font-bold">
            Featured
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mt-4">
            AI-Powered Creative
          </h2>
        </div>
        <div className="h-full flex flex-col justify-center">
          <p className="text-gray-400 text-lg line-clamp-2 max-w-2xl leading-relaxed text-center">
            No AI Creative Blog Post found. Coming Soon...
          </p>
            
        </div>
      </div>
    );

  const mainPost = posts[0];
  const sidePosts = posts.slice(1);

  return (
    <section className="bg-[var(--color-primary)] ma-w-full h-screen text-white text-lg flex flex-col items-center py-32 px-4 md:px-12">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col items-center mb-20">
          <span className="text-blue-400 uppercase tracking-[0.3em] text-xs font-bold">
            Featured
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mt-4">
            AI-Powered Creative
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Post */}
          <div className="lg:col-span-8 group">
            <Link href={`/blog/${mainPost.slug.current}`}>
              <article>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <img
                    src={getImageUrl(mainPost.mainImage)}
                    alt={mainPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="mt-10">
                  <h3 className="text-3xl md:text-4xl font-bold group-hover:text-blue-300 transition-colors">
                    {mainPost.title}
                  </h3>
                  <p className="mt-6 text-gray-400 text-lg line-clamp-2 max-w-2xl leading-relaxed">
                    {mainPost.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          </div>

          {/* Side Posts */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 gap-10">
            {sidePosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group"
              >
                <article className="flex flex-col sm:flex-row gap-5">
                  <div className="relative w-full sm:w-32 aspect-video overflow-hidden rounded-lg border border-white/10 bg-white/5">
                    <img
                      src={getImageUrl(post.mainImage)}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold leading-tight group-hover:text-blue-300 transition-colors">
                      {post.title}
                    </h4>

                    <div className="mt-3 text-xs text-gray-500 uppercase tracking-widest font-bold">
                      {post.categories?.[0]?.title || "AI Research"}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MAIN FEED ---------------- */

function PostGrid({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="max-w-full mx-auto px-6 md:px-12 py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group"
          >
            <article className="border-t border-gray-300 pt-10 ">
              <div className="rounded-xl overflow-hidden mb-8 aspect-[4/3] bg-gray-50">
                <img
                  src={getImageUrl(post.mainImage)}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-800 font-black">
                  {post.categories?.[0]?.title || "Article"}
                </span>

                <h3 className="text-2xl font-normal font-serif group-hover:underline leading-tight text-[#09083b] transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>

                <p className="text-xs text-gray-400 mt-2 font-medium">
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : ""}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="mt-24 flex justify-center">
        <button className="px-12 py-4 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-full text-sm font-bold hover:bg-gray-50 hover:border-gray-300 transition active:scale-95">
          Load more
        </button>
      </div>
    </section>
  );
}
