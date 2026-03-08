import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const faqItems = [
    {
      question: "Do I need a visa for my travel destination?",
      answer: "Visa requirements depend on your nationality and your destination. Our travel experts will assist you with the latest visa information and application process for your specific itinerary."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer free cancellation up to 30 days before the departure for most travel packages. Cancellations within 30 days may incur fees based on hotel and airline policies. Please review the specific package details for accurate information."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and secure online payment gateways like PayPal and UPI. Partial payment plans are also available for bookings made well in advance."
    },
    {
      question: "Is travel insurance included in the package?",
      answer: "Basic travel insurance is strongly recommended but typically not included in the base package price. We offer comprehensive travel insurance add-ons during the booking process."
    },
    {
      question: "Can I customize the travel itinerary?",
      answer: "Absolutely! Most of our packages can be customized. Let our travel experts know your preferences, and we will tailor the itinerary, accommodation, and activities to suit your needs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We're here to help you plan your next great adventure. Get in touch with our team for questions, bookings, and support.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            
            {/* Contact Information & Form */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold font-heading text-slate-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Office Location</h4>
                    <p className="text-slate-600">Irinjalakuda<br />Thrissur, Kerala 680121, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                    <p className="text-slate-600">+91 9876543210<br />Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                    <p className="text-slate-600">hello@wanderlust.com<br />support@wanderlust.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:w-1/2">
               <div className="w-full h-full min-h-[400px] bg-slate-200 rounded-3xl overflow-hidden relative border border-slate-300 shadow-inner flex flex-col items-center justify-center text-slate-500">
                 {/* This would be an iframe of Google Maps in a real application */}
                 <div className="absolute inset-0 z-0">
                   <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 grayscale" alt="Map View" />
                 </div>
                 <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center max-w-[250px] text-center">
                    <MapPin className="text-primary mb-3" size={32} />
                    <h3 className="font-bold text-lg text-slate-900">Wanderlust HQ</h3>
                    <p className="text-sm font-medium mt-1">Irinjalakuda<br />Thrissur, Kerala 680121, India</p>
                 </div>
               </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">
              Find answers to the most common questions about our travel packages, booking process, and company policies.
            </p>
          </div>
          
          <FAQAccordion items={faqItems} />
          
        </div>
      </section>

      <Footer />
    </div>
  );
}
