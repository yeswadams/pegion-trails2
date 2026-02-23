import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "7qsmfcus",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to false for real-time updates or localized caching
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Helper to fetch blog post by slug
export async function getPostBySlug(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    slug,
    image,
    publishedAt,
    author-> {
      name,
      image
    },
    categories[]-> {
      title
    },
    body
  }`;
  return await client.fetch(query, { slug });
}

// Helper to fetch all posts (for the listing page eventually)
export async function getAllPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    image,
    publishedAt,
    author-> {
      name
    },
    categories[]-> {
      title
    },
    excerpt
  }`;
  return await client.fetch(query);
}

// Helper to fetch recent posts for sidebar
export async function getRecentPosts(limit = 3) {
  const query = `*[_type == "post"][0...${limit}] | order(publishedAt desc) {
    title,
    slug,
    image,
    publishedAt
  }`;
  return await client.fetch(query);
}

// Helper to fetch all categories
export async function getAllCategories() {
  const query = `*[_type == "category"] {
    title,
    "count": count(*[_type == "post" && references(^._id)])
  }`;
  return await client.fetch(query);
}