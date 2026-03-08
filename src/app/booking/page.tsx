import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { CheckCircle2 } from "lucide-react";

export default function BookingPage() {
  const guarantees = [
    { title: "Best Price Guarantee", description: "We match any lower price found online." },
    { title: "24/7 Support", description: "Expert travel assistance anytime, anywhere." },
    { title: "Secure Payment", description: "Your data is entirely encrypted and safe." },
    { title: "No Cancel Fees", description: "Free cancellation on most packages." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-4">Book Your Trip</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Take the first step towards your dream vacation. Fill out the form below and one of our travel experts will get back to you within 24 hours.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 grow">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            {/* Form Column */}
            <div className="lg:w-3/5">
              <BookingForm />
            </div>
            
            {/* Info Column */}
            <div className="lg:w-2/5 space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-b pb-4">Wanderlust Guarantees</h3>
                <div className="space-y-6">
                  {guarantees.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="font-bold text-slate-800">{item.title}</h4>
                        <p className="text-slate-500 text-sm mt-1 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary to-primary-hover rounded-2xl p-8 shadow-lg text-white">
                <h3 className="text-xl font-bold font-heading mb-3">Need immediate help?</h3>
                <p className="text-white/80 mb-6 text-sm leading-relaxed">
                  Call our travel specialists now to book your trip over the phone.
                </p>
                <div className="text-3xl font-bold font-heading">
                  +1 (800) 123-4567
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
