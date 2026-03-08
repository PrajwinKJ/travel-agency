import Image from "next/image";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";

export interface DestinationProps {
  id: string;
  name: string;
  country: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
}

export default function DestinationCard({ id, name, country, image, rating, reviews, description }: DestinationProps) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <span className="font-bold text-sm text-slate-800">{rating}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
          <MapPin size={16} className="text-primary" />
          <span className="font-medium uppercase tracking-wider">{country}</span>
        </div>
        <h3 className="text-2xl font-bold font-heading text-slate-900 mb-3 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-slate-600 mb-6 line-clamp-2 grow">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-slate-500 font-medium">({reviews} reviews)</span>
          <Link
            href={`/destinations/${id}`}
            className="text-primary font-medium flex items-center hover:underline"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
