import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";

export default function DestinationsPage() {
  const allDestinations = [
    {
      id: "bali",
      name: "Bali",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
      rating: 4.8,
      reviews: 1240,
      description: "Experience the vibrant culture, beautiful beaches, and lush terraced rice fields of the Island of the Gods.",
    },
    {
      id: "dubai",
      name: "Dubai",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
      rating: 4.9,
      reviews: 3102,
      description: "Discover the breathtaking luxury, spectacular architecture, and thriving nightlife of this modern oasis.",
    },
    {
      id: "paris",
      name: "Paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
      rating: 4.7,
      reviews: 5890,
      description: "Fall in love with the City of Light, exploring iconic landmarks, world-class art, and exquisite cuisine.",
    },
    {
      id: "manali",
      name: "Manali",
      country: "India",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      rating: 4.6,
      reviews: 890,
      description: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
    },
    {
      id: "maldives",
      name: "Maldives",
      country: "Maldives",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
      rating: 5.0,
      reviews: 2150,
      description: "Tropical paradise famous for its white-sand beaches, crystal clear blue water, and luxury resorts.",
    },
    {
      id: "goa",
      name: "Goa",
      country: "India",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
      rating: 4.5,
      reviews: 3200,
      description: "Famous for its stunning beaches, vibrant nightlife, Portuguese heritage, and seafood.",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 pt-32 pb-20 relative">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-4">Explore Our Destinations</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            From tropical beaches to bustling cities, discover the world's most beautiful destinations handpicked for your next adventure.
          </p>
        </div>
      </div>

      {/* Destinations Grid */}
      <section className="py-16 grow">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDestinations.map(dest => (
              <DestinationCard key={dest.id} {...dest} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
