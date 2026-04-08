"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity/client";
import { fetchSanityData } from "@/lib/sanity/actions";

const FEED_QUERY = `
  *[
    _type == "post" &&
    defined(slug.current) &&
    isHero != true &&
    isAISection != true
  ] | order(publishedAt desc)[$start...$end]{
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    categories[]->{title},
    publishedAt
  }
`;

const getImageUrl = (source) => {
  if (!source) return "";
  return urlFor(source).width(800).quality(80).url();
};

export default function PostGrid({ initialPosts = [] }) {
  const [posts, setPosts] = useState(initialPosts || []);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState((initialPosts || []).length === 12);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const loadMore = async () => {
    if (loading) return;

    setLoading(true);

    const { data: newPosts, error } = await fetchSanityData(FEED_QUERY, {
      start: posts.length,
      end: posts.length + 6,
    });

    if (error || !newPosts || newPosts.length === 0) {
      setHasMore(false);
    } else {
      setPosts((prev) => [...prev, ...newPosts]);
    }

    setLoading(false);
  };

   return (
    <section className="max-w-full mx-auto px-6 md:px-12 py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group"
          >
            <article className="border-t border-gray-300 pt-10">
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

                <h3 className="text-2xl font-normal font-serif group-hover:underline leading-tight text-[#09083b]">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>

                <p className="text-xs text-gray-400 mt-2 font-medium">
                  {mounted && post.publishedAt
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
        {hasMore && (
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-12 py-4 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-full text-sm font-bold hover:bg-gray-50 hover:border-gray-300 transition active:scale-95 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        )}
      </div>
    </section>
  );
}