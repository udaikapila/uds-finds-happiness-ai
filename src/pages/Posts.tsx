
import Layout from "@/components/Layout";
import { posts } from "@/data/posts";
import { Link } from "react-router-dom";
import { Route, MapPin } from "lucide-react";

const Posts = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-forest-800 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Trail Journal</h1>
          <p className="text-lg text-forest-100 max-w-2xl">
            Follow our day-by-day account of the Great Divide Mountain Bike Route, 
            with stories, photos, and insights from life on the trail.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link to={`/posts/${post.id}`} key={post.id} className="post-card">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="post-card-image"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-forest-600" />
                    <span className="text-sm text-forest-600">{post.location}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <div className="flex items-center gap-3">
                      <div className="text-sm flex items-center gap-1">
                        <Route className="h-3 w-3" />
                        <span>{post.miles} mi</span>
                      </div>
                      <div className="text-sm flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m2 22 10-10M16 12l-4-4M16 8V4h-4M22 2 12 12" />
                        </svg>
                        <span>{post.elevation} ft</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Posts;
