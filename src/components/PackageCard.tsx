import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Star, User } from "lucide-react";

export interface PackageProps {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
  groupSize: string;
}

export default function PackageCard({ id, title, destination, duration, price, image, rating, reviews, groupSize }: PackageProps) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
          Featured
        </div>
      </div>
      <div className="p-6 flex flex-col grow">
        <div className="flex items-center justify-between mb-3 text-sm">
          <div className="flex items-center gap-1.5 text-slate-500">
            <MapPin size={16} className="text-primary" />
            <span className="font-medium">{destination}</span>
          </div>
          <div className="flex items-center gap-1 text-slate-700">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="font-bold">{rating}</span>
            <span className="text-slate-400">({reviews})</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-slate-600 mb-6 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <Clock size={16} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <User size={16} />
            <span>{groupSize}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-sm text-slate-500 mb-0.5">Starting from</p>
            <p className="text-xl font-bold text-slate-900">{price}</p>
          </div>
          <Link
            href={`/booking?package=${id}`}
            className="px-5 py-2.5 bg-slate-100 hover:bg-primary hover:text-white text-slate-900 font-medium rounded-full transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
