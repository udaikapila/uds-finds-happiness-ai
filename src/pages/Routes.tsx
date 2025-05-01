
import Layout from "@/components/Layout";
import { MapPin, Route as RouteIcon } from "lucide-react";

const routes = [
  {
    id: "great-divide-mountain-bike-route",
    name: "Great Divide Mountain Bike Route",
    location: "Canada to Mexico via the Rocky Mountains",
    distance: 3083,
    elevation: 200000,
    duration: "30-60 days",
    difficulty: "Challenging",
    terrain: "Dirt roads, singletrack, jeep tracks, and some pavement",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&h=800",
    description: "The Great Divide Mountain Bike Route traverses the length of the Rocky Mountains from Canada to Mexico. It's the longest off-pavement cycling route in the world."
  },
  {
    id: "trans-america-trail",
    name: "Trans America Trail",
    location: "Oregon to Virginia",
    distance: 4228,
    elevation: 150000,
    duration: "60-90 days",
    difficulty: "Moderate",
    terrain: "Mostly paved roads with some gravel sections",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1200&h=800",
    description: "The TransAmerica Bicycle Trail was the first bicycle touring route to cross America. It's a journey through American history, small towns, and diverse landscapes."
  },
  {
    id: "baja-divide",
    name: "Baja Divide",
    location: "Tecate to San José del Cabo, Mexico",
    distance: 1700,
    elevation: 90000,
    duration: "30-45 days",
    difficulty: "Challenging",
    terrain: "Rugged dirt roads, sandy washes, rocky tracks",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=1200&h=800",
    description: "The Baja Divide is a rugged dirt road route down the Baja California Peninsula, featuring beautiful coastlines, remote desert landscapes, and authentic Mexican culture."
  },
  {
    id: "colorado-trail",
    name: "Colorado Trail",
    location: "Denver to Durango, Colorado",
    distance: 535,
    elevation: 80000,
    duration: "15-30 days",
    difficulty: "Very Challenging",
    terrain: "Singletrack, high alpine terrain, technical trails",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&h=800",
    description: "The Colorado Trail is a high-altitude singletrack route through the Rocky Mountains, with breathtaking scenery, challenging terrain, and elevations over 13,000 feet."
  },
];

const DifficultyBadge = ({ level }: { level: string }) => {
  const getBadgeColor = () => {
    switch (level) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Moderate":
        return "bg-blue-100 text-blue-800";
      case "Challenging":
        return "bg-orange-100 text-orange-800";
      case "Very Challenging":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColor()}`}>
      {level}
    </span>
  );
};

const Routes = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-trail-800 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Bikepacking Routes</h1>
          <p className="text-lg text-trail-100 max-w-2xl">
            Explore our collection of epic bikepacking routes through North America's most beautiful landscapes.
          </p>
        </div>
      </section>

      {/* Routes List */}
      <section className="py-12">
        <div className="container">
          <div className="space-y-12">
            {routes.map((route) => (
              <div key={route.id} className="bg-white rounded-lg overflow-hidden border border-border shadow-sm">
                <div className="md:flex">
                  <div className="md:w-2/5 h-64 md:h-auto">
                    <img
                      src={route.image}
                      alt={route.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-forest-600" />
                      <span className="text-sm text-forest-600">{route.location}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{route.name}</h2>
                    <p className="text-muted-foreground mb-5">
                      {route.description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                      <div>
                        <p className="text-xs text-muted-foreground">Distance</p>
                        <p className="font-semibold">{route.distance} miles</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Elevation Gain</p>
                        <p className="font-semibold">{route.elevation.toLocaleString()} ft</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="font-semibold">{route.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Difficulty</p>
                        <DifficultyBadge level={route.difficulty} />
                      </div>
                      <div className="col-span-1 md:col-span-2">
                        <p className="text-xs text-muted-foreground">Terrain</p>
                        <p className="font-semibold">{route.terrain}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <RouteIcon className="h-5 w-5 text-forest-600" />
                      <span className="text-sm font-medium text-forest-600">
                        View detailed route info and GPS tracks
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 bg-forest-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Bikepacking Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Essential Gear</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-forest-100 p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span>Lightweight tent or bivy sack</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-forest-100 p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span>Sleeping bag rated for expected temperatures</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-forest-100 p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span>Water filtration system (crucial!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-forest-100 p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span>Complete bike repair kit and spare parts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-forest-100 p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span>Navigation tools (GPS device or smartphone)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Planning Your Route</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-forest-100 p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span>Research water sources carefully</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-forest-100 p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span>Identify resupply points and plan food accordingly</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-forest-100 p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span>Check for seasonal challenges (snow, heat, monsoons)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-forest-100 p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span>Download offline maps for remote areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-forest-100 p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span>Consider emergency exit points along your route</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Routes;
