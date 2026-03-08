import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatisticsSection from "@/components/StatisticsSection";
import DestinationSearch from "@/components/DestinationSearch";

export default function Home() {
  const featuredDestinations = [
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
  ];

  const popularPackages = [
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
  ];

  const testimonials = [
    {
      id: "t1",
      name: "Priya Sharma",
      rating: 4.9,
      text: "An unforgettable Bali trip. The itinerary was perfectly planned and the guides were fantastic. Highly recommended for anyone looking to travel stress-free.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "t2",
      name: "Daniel Thomas",
      rating: 4.7,
      text: "Our Dubai tour was amazing. Everything from airport pickup to hotel arrangements was incredibly smooth. They really thought of every little detail.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "t3",
      name: "Aisha Rahman",
      rating: 5.0,
      text: "I highly recommend their Maldives packages. Beautiful resorts, excellent service, and seamless transfers. The best vacation experience we've ever had.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    },
  ];

  const benefits = [
    "Handpicked destinations",
    "Experienced local guides",
    "Flexible travel plans",
    "24/7 travel assistance",
    "Secure booking process",
    "Best price guarantee"
  ];

  return (
    <div className="min-h-screen flex flex-col pt-0">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop"
            alt="Beautiful travel destination"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-white mt-12">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-bold uppercase tracking-widest mb-6 border-b">
            Award Winning Travel Agency
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-6 drop-shadow-lg leading-tight">
            Explore the World <br />with Confidence
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium text-white/90 drop-shadow-md">
            Discover breathtaking destinations, curated experiences, and exclusive travel packages tailored just for you.
          </p>
          
          <DestinationSearch />
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Top Places</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900">Featured Destinations</h2>
            </div>
            <Link href="/destinations" className="group flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors">
              View All Destinations
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map(dest => (
              <DestinationCard key={dest.id} {...dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Popular Packages Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Curated Tours</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Popular Travel Packages</h2>
            <p className="text-lg text-slate-600">
              Choose from our most sought-after holiday packages, thoughtfully designed to offer you the perfect blend of adventure and relaxation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPackages.map(pkg => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/packages" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Explore All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Video Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop"
                  alt="Travel experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/20"></div>
                
                {/* Trust Badge */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[200px]">
                  <div className="text-4xl font-extrabold text-primary mb-1">15+</div>
                  <div className="text-slate-900 font-bold leading-tight">Years of Excellence in Travel</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">
                Why Travel With Us?
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We believe that travel is not just about visiting new places, but creating lifelong memories. Our meticulous attention to detail ensures your journey is nothing short of extraordinary.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary shrink-0" size={24} />
                    <span className="font-bold text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Link href="/about" className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary-hover hover:border-primary-hover transition-colors">
                  Learn more about our company →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Reviews</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Customer Testimonials</h2>
            <p className="text-lg text-slate-600">
              Don't just take our word for it. Read what our happy travelers have to say about their experiences with Wanderlust.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">Get Travel Deals Sent Directly</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive exclusive off-market deals, destination guides, and travel inspiration.
          </p>
          
          <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="grow px-6 py-4 rounded-full text-slate-900 outline-none focus:ring-4 focus:ring-primary/50 transition-all font-medium"
            />
            <button 
              type="submit" 
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold transition-colors whitespace-nowrap shadow-lg shadow-primary/30"
            >
              Subscribe Now
            </button>
          </form>
          <p className="text-sm text-slate-400 mt-4">We respect your privacy. No spam, ever.</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
