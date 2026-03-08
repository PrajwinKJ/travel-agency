import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Camera, Coffee, Compass } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WeatherWidget from "@/components/WeatherWidget";

// Mock data pattern for dynamic routes
const getDestinationData = (slug: string) => {
  const destinations: Record<string, any> = {
    "bali": {
      name: "Bali",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop",
      overview: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns.",
      season: "April to October (Dry Season)",
      gallery: [
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?q=80&w=800&auto=format&fit=crop"
      ],
      attractions: ["Ubud Monkey Forest", "Uluwatu Temple", "Tegallalang Rice Terrace", "Mount Batur"]
    },
    "dubai": {
      name: "Dubai",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop",
      overview: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music.",
      season: "November to March",
      gallery: [
        "https://images.unsplash.com/photo-1582672060624-cbdf1e5053fd?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526495124232-a8f91ebfd480?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop"
      ],
      attractions: ["Burj Khalifa", "The Dubai Mall", "Palm Jumeirah", "Dubai Marina"]
    }
  };
  
  // Default fallback for any other slug
  if (!destinations[slug]) {
    return {
      name: slug.charAt(0).toUpperCase() + slug.slice(1),
      country: "World",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop",
      overview: "Discover the breathtaking sights and sounds of this amazing destination. From stunning landscapes to rich cultural experiences, this location boasts everything needed for a perfect vacation getaway.",
      season: "Year Round",
      gallery: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop"
      ],
      attractions: ["City Center", "Local Markets", "Historic Museum", "National Park"]
    };
  }
  
  return destinations[slug];
}

export default async function DestinationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = getDestinationData(slug);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      {/* Large Header Image */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto">
            <Link href="/destinations" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 font-medium transition-colors">
              <ArrowLeft size={16} /> Back to Destinations
            </Link>
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-2 drop-shadow-md">
              <MapPin size={16} />
              {destination.country}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-white drop-shadow-lg">
              {destination.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold font-heading text-slate-900 mb-6">Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {destination.overview}
              </p>
              
              <div className="mt-8 flex items-center gap-4 bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Recommended Travel Season</p>
                  <p className="font-bold text-slate-900">{destination.season}</p>
                </div>
              </div>
            </section>
            
            {/* Top Attractions */}
            <section>
              <h2 className="text-3xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-3">
                <Camera className="text-primary" /> Top Attractions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.attractions.map((attr: string, i: number) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                      {i + 1}
                    </div>
                    <span className="font-bold text-slate-800">{attr}</span>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Image Gallery */}
            <section>
              <h2 className="text-3xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-3">
                <Compass className="text-primary" /> Image Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {destination.gallery.map((img: string, i: number) => (
                  <div key={i} className="relative h-48 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src={img}
                      alt={`${destination.name} gallery image ${i + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </section>
            
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="sticky top-24">
              {/* Weather Widget Component */}
              <WeatherWidget city={destination.name} />
              
              <div className="mt-8 bg-slate-900 rounded-2xl p-8 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full blur-2xl"></div>
                <h3 className="text-2xl font-bold font-heading mb-4 relative z-10">Ready to travel to {destination.name}?</h3>
                <p className="text-slate-400 mb-8 relative z-10 text-sm">
                  Let us plan the perfect itinerary for your trip. Customized just for you.
                </p>
                <Link 
                  href={`/booking?dest=${slug}`}
                  className="block w-full py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold transition-colors relative z-10"
                >
                  Book Package Now
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
}
