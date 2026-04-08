import { getLatestTwoPosts } from '@/lib/sanity/client';

export default async function NavbarBlog() {
  const posts = await getLatestTwoPosts();

  return (
    <main>
      <h1>Latest Posts</h1>
      <div className="grid">
        {posts.map((post) => (
          <div key={post.slug.current} className="card">
            {post.isHero && <span className="badge">Featured</span>}
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  );
}