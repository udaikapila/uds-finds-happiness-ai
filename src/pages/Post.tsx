
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { posts, Post as PostType } from "@/data/posts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MapPin, Route, Calendar } from "lucide-react";
import { useEffect } from "react";

const Post = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  
  // Find the post
  const post = posts.find((p) => p.id === postId);
  
  // Find adjacent posts
  const currentIndex = posts.findIndex((p) => p.id === postId);
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  
  // Redirect to 404 if post not found
  useEffect(() => {
    if (!post) {
      navigate("/404", { replace: true });
    }
  }, [post, navigate]);

  if (!post) return null;
  
  // Function to render markdown-like content
  const renderContent = (content: string) => {
    // Replace image tags with actual img elements
    const imgRegex = /<img\s+src="([^"]+)"\s+alt="([^"]+)"\s*\/>/g;
    let renderedContent = content.replace(imgRegex, (match, src, alt) => {
      return `<img src="${src}" alt="${alt}" class="my-8 rounded-lg w-full" />`;
    });
    
    // Replace headers
    renderedContent = renderedContent.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-6">$1</h1>');
    renderedContent = renderedContent.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>');
    
    // Replace paragraphs
    renderedContent = renderedContent.replace(/^(?!<[h|i]).+$/gm, (match) => {
      if (match.trim() === '') return '';
      return `<p class="my-4 leading-relaxed">${match}</p>`;
    });
    
    return renderedContent;
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative">
        <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
          <div className="container absolute inset-0 flex flex-col items-start justify-end pb-10">
            <div className="flex items-center gap-2 text-white/80 mb-2">
              <MapPin className="h-4 w-4" />
              <span>{post.location}</span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white max-w-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Route className="h-4 w-4" />
                <span>{post.miles} miles</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m2 22 10-10M16 12l-4-4M16 8V4h-4M22 2 12 12" />
                </svg>
                <span>{post.elevation} ft elevation gain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-10 bg-white">
        <div className="container max-w-3xl">
          <div 
            className="post-content"
            dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
          />
        </div>
      </section>

      {/* Post Navigation */}
      <section className="py-10 bg-forest-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {previousPost && (
              <Link to={`/posts/${previousPost.id}`} className="flex flex-col p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowLeft className="h-4 w-4 text-forest-600" />
                  <span className="text-sm text-forest-600">Previous Day</span>
                </div>
                <h3 className="text-lg font-bold line-clamp-2">{previousPost.title}</h3>
              </Link>
            )}
            
            {nextPost && (
              <Link to={`/posts/${nextPost.id}`} className="flex flex-col p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow md:ml-auto md:text-right">
                <div className="flex items-center gap-2 mb-2 md:ml-auto">
                  <span className="text-sm text-forest-600">Next Day</span>
                  <ArrowRight className="h-4 w-4 text-forest-600" />
                </div>
                <h3 className="text-lg font-bold line-clamp-2">{nextPost.title}</h3>
              </Link>
            )}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/posts">← All Journal Entries</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Post;
