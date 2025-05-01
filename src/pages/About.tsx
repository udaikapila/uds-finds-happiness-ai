
import Layout from "@/components/Layout";
import { Bike, Camera } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-earth-800 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">About TrailTales</h1>
          <p className="text-lg text-earth-100 max-w-2xl">
            A journal of two-wheeled adventures through North America's most beautiful landscapes.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 mb-2">
            <Bike className="h-5 w-5 text-forest-600" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-forest-600">
              Our Story
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">The Journey Begins</h3>
          
          <div className="prose prose-lg max-w-none">
            <p>
              TrailTales began in the spring of 2024 when we—Alex and Sarah—decided to trade our desk jobs for the freedom of life on two wheels. Having spent years dreaming about bikepacking across North America, we finally took the leap, sold most of our possessions, and set out on the adventure of a lifetime.
            </p>
            
            <p>
              What started as a six-month sabbatical has evolved into a lifestyle of continuous exploration. We now document our journeys, sharing the beauty, challenges, and unexpected moments that make bikepacking such a transformative experience.
            </p>
            
            <div className="my-8 grid md:grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&h=400" 
                alt="Mountain landscape" 
                className="rounded-lg" 
              />
              <img 
                src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=600&h=400" 
                alt="Desert landscape" 
                className="rounded-lg" 
              />
            </div>
            
            <p>
              Through TrailTales, we aim to inspire others to experience the world at bicycle pace—slow enough to appreciate the details, but fast enough to cover meaningful distances. We believe that bikepacking offers a unique perspective on landscapes, cultures, and our own capabilities.
            </p>
            
            <p>
              From the lush forests of the Pacific Northwest to the red rock deserts of Utah, from high alpine passes to coastal roads, we're gradually building a comprehensive journal of North America's most beautiful bikepacking routes.
            </p>
          </div>
        </div>
      </section>

      {/* The Riders */}
      <section className="py-16 bg-forest-50">
        <div className="container max-w-5xl">
          <div className="flex items-center gap-2 mb-2">
            <Camera className="h-5 w-5 text-forest-600" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-forest-600">
              The Riders
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Meet the Team</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=60&w=300&h=300" 
                  alt="Alex" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2 text-center md:text-left">Alex Morgan</h4>
                <p className="text-muted-foreground mb-4 text-center md:text-left">Trail Seeker & Writer</p>
                <p>
                  Former software engineer with an unhealthy obsession for ultralight gear and topographic maps. Alex handles route planning, bike maintenance, and brings stories to life through writing. When not pedaling, he's probably tinkering with bikes or searching for the perfect camp coffee setup.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=60&w=300&h=300" 
                  alt="Sarah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2 text-center md:text-left">Sarah Chen</h4>
                <p className="text-muted-foreground mb-4 text-center md:text-left">Photographer & Navigator</p>
                <p>
                  With a background in environmental science and photography, Sarah documents the journey through her lens. She's the voice of reason when Alex suggests "just one more pass" before sunset, and has an uncanny ability to find the best wild camping spots. Her specialty is capturing the fleeting moments of light that make bikepacking so magical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Bikepacking Philosophy</h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="mx-auto rounded-full bg-forest-100 w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                  <path d="M14 4c0-1.1.9-2 2-2m-2 2h6m-6 0v18m0-18h-4m10 0c1.1 0 2 .9 2 2m0-2v18m0-18h4M6 9l12 6M6 15l12-6" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Travel Light</h4>
              <p className="text-muted-foreground">
                We embrace minimalism, carrying only what we need and leaving the rest behind. This approach not only makes climbing mountains easier but leads to a simpler, more intentional experience.
              </p>
            </div>
            
            <div>
              <div className="mx-auto rounded-full bg-forest-100 w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                  <path d="M5.5 12.5a5 5 0 0 1 .11-1H3.5a12 12 0 0 1 0-2h2.11a5.01 5.01 0 0 1 5.71-3 5 5 0 0 1 4.1 5 5.01 5.01 0 0 1 3.02 5.03 5 5 0 0 1-3.83 4.26A5 5 0 0 1 8 22a5 5 0 0 1-2.5-9.5Z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Leave No Trace</h4>
              <p className="text-muted-foreground">
                We respect the environments we travel through, practicing responsible camping, minimizing impact, and often carrying out more trash than we bring in.
              </p>
            </div>
            
            <div>
              <div className="mx-auto rounded-full bg-forest-100 w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" x2="4" y1="22" y2="15" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Document the Journey</h4>
              <p className="text-muted-foreground">
                We believe in sharing both the triumphs and challenges of bikepacking. Our stories are honest, showing both the Instagram-worthy vistas and the muddy, exhausting realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-forest-50">
        <div className="container max-w-xl text-center">
          <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
          <p className="text-lg mb-8">
            Have questions about our routes or gear? Want to suggest a trail for us to explore?
            We'd love to hear from you!
          </p>
          
          <form className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-left mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-left mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-left mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-left mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-forest-600 hover:bg-forest-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default About;
