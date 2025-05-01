
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { posts } from "@/data/posts";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Route } from "lucide-react";

const Index = () => {
  const latestPosts = posts.slice(0, 3);
  const featuredPost = posts[0];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[80vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000"
            alt="Bikepacking in the mountains"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="container absolute inset-0 flex flex-col items-start justify-end pb-20">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight animate-fade-in">
              Two Wheels, Endless Horizons
            </h1>
            <p className="mt-4 max-w-xl text-white/90 text-xl animate-fade-in">
              Join our bikepacking adventure through North America's most breathtaking landscapes
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in">
              <Button asChild size="lg" className="bg-forest-600 hover:bg-forest-700">
                <Link to="/posts">Read Journey Log</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <Link to="/routes">Explore Routes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Journey Section */}
      <section className="py-16 bg-forest-50">
        <div className="container">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-5 w-5 text-forest-600" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-forest-600">
              Current Journey
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">The Great Divide Mountain Bike Route</h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 text-lg">
                We're currently tackling the iconic Great Divide Mountain Bike Route, a 
                3,000-mile off-road adventure that traverses the Rocky Mountains from Canada to Mexico.
              </p>
              <p className="mb-6">
                Following the Continental Divide, this epic journey takes us through remote 
                wilderness, high mountain passes, desert landscapes, and everything in between.
                Join us as we document each day of this challenging adventure.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-forest-600">Total Miles</p>
                  <p className="text-2xl font-bold">3,083</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-forest-600">Days on Route</p>
                  <p className="text-2xl font-bold">45</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-forest-600">Highest Elevation</p>
                  <p className="text-2xl font-bold">11,910 ft</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&h=600" 
                alt="Great Divide Mountain Bike Route map" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center gap-2 mb-2">
            <Camera className="h-5 w-5 text-forest-600" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-forest-600">
              Latest Updates
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Journal Entries</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
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
                    <span className="route-marker"></span>
                    <span className="text-sm text-forest-600">{post.location}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{post.title}</h4>
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
          
          <div className="mt-10 text-center">
            <Button asChild className="bg-forest-600 hover:bg-forest-700">
              <Link to="/posts">View All Journal Entries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-trail-50">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Journey</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Get weekly updates from the trail delivered straight to your inbox. 
              No spam, just stories, photos, and insights from our bikepacking adventures.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                required
              />
              <Button type="submit" className="bg-forest-600 hover:bg-forest-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
