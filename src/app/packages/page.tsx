import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";

export default function PackagesPage() {
  const allPackages = [
    {
      id: "bali-escape",
      title: "Bali Escape Package",
      destination: "Bali, Indonesia",
      duration: "5 Days",
      price: "₹42,000",
      image: "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?q=80&w=800&auto=format&fit=crop",
      rating: 4.9,
      reviews: 342,
      groupSize: "2-8 People",
    },
    {
      id: "dubai-adventure",
      title: "Dubai Adventure Tour",
      destination: "Dubai, UAE",
      duration: "4 Days",
      price: "₹55,000",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
      rating: 4.8,
      reviews: 512,
      groupSize: "2-10 People",
    },
    {
      id: "manali-retreat",
      title: "Manali Himalayan Retreat",
      destination: "Manali, India",
      duration: "6 Days",
      price: "₹28,000",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      rating: 4.7,
      reviews: 215,
      groupSize: "4-12 People",
    },
    {
      id: "maldives-honeymoon",
      title: "Maldives Romantic Honeymoon",
      destination: "Maldives",
      duration: "5 Days",
      price: "₹95,000",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
      rating: 5.0,
      reviews: 890,
      groupSize: "2 People",
    },
    {
      id: "paris-romantic",
      title: "Paris Romantic Getaway",
      destination: "Paris, France",
      duration: "6 Days",
      price: "₹1,15,000",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
      rating: 4.7,
      reviews: 432,
      groupSize: "2 People",
    },
    {
      id: "goa-beach-party",
      title: "Goa Beach & Party Week",
      destination: "Goa, India",
      duration: "4 Days",
      price: "₹18,000",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
      rating: 4.5,
      reviews: 1205,
      groupSize: "4-20 People",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 pt-32 pb-20 relative">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop" alt="Travel plane" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-4">Curated Tour Packages</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover the perfect balance of adventure and relaxation with our carefully planned and guided travel packages to the world's most beautiful places.
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <section className="py-16 grow">
        <div className="container mx-auto px-4 md:px-8 text-center mb-10">
          <p className="text-slate-500 font-medium">Showing {allPackages.length} available packages</p>
        </div>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPackages.map(pkg => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
