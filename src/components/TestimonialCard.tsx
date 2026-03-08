import Image from "next/image";
import { Star } from "lucide-react";

export interface TestimonialProps {
  id: string;
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

export default function TestimonialCard({ name, rating, text, avatar }: TestimonialProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
      <div className="absolute -top-6 left-8 bg-primary rounded-full p-1.5 shadow-md">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <p className="text-slate-600 mb-6 italic text-lg leading-relaxed pt-4 relative z-10">"{text}"</p>
      
      <div className="flex items-center justify-between border-t border-slate-100 pt-6">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <h4 className="font-bold font-heading text-slate-900">{name}</h4>
            <div className="flex text-yellow-500 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  fill={i < Math.floor(rating) ? "currentColor" : "none"}
                  className={i < Math.floor(rating) ? "text-yellow-500" : "text-slate-300"} 
                />
              ))}
              <span className="ml-2 text-xs font-bold text-slate-700">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
