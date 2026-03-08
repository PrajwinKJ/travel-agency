"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, Calendar, Users, MapPin, User, Mail } from "lucide-react";

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 rounded-2xl p-8 border border-green-100 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">Booking Requested!</h3>
        <p className="text-slate-600 mb-6">
          Thank you for your booking request. Our travel consultant will contact you within 24 hours to confirm your itinerary and payment details.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full transition-colors"
        >
          Book Another Trip
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
      <h3 className="text-2xl font-bold font-heading text-slate-900 mb-6">Plan Your Dream Trip</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className="text-slate-400" />
              </div>
              <input type="text" required className="pl-10 w-full rounded-xl border-slate-200 border py-2.5 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="John Doe" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-slate-400" />
              </div>
              <input type="email" required className="pl-10 w-full rounded-xl border-slate-200 border py-2.5 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="john@example.com" />
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">Destination</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin size={18} className="text-slate-400" />
            </div>
            <select required className="pl-10 w-full rounded-xl border-slate-200 border py-2.5 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none appearance-none bg-white">
              <option value="" disabled selected>Select a destination</option>
              <option value="bali">Bali, Indonesia</option>
              <option value="dubai">Dubai, UAE</option>
              <option value="manali">Manali, India</option>
              <option value="paris">Paris, France</option>
              <option value="maldives">Maldives</option>
              <option value="goa">Goa, India</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ChevronDownIcon className="h-4 w-4 text-slate-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700">Travel Date</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar size={18} className="text-slate-400" />
              </div>
              <input type="date" required className="pl-10 w-full rounded-xl border-slate-200 border py-2.5 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700">Travelers</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users size={18} className="text-slate-400" />
              </div>
              <input type="number" min="1" required className="pl-10 w-full rounded-xl border-slate-200 border py-2.5 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="2" />
            </div>
          </div>
        </div>
      </div>

      <button 
        type="submit" 
        disabled={status === "loading"}
        className="mt-8 w-full py-3.5 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-primary/20"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Request Booking
            <Send size={18} />
          </>
        )}
      </button>
      <p className="text-xs text-center text-slate-500 mt-4">
        No credit card required. A travel expert will contact you to finalize details.
      </p>
    </form>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}
