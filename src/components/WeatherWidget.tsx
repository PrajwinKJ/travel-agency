"use client";

import { useState, useEffect } from "react";
import { Cloud, Droplets, Wind, Thermometer, AlertCircle, Loader2 } from "lucide-react";

interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

interface Props {
  city: string;
}

export default function WeatherWidget({ city }: Props) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
        if (!res.ok) throw new Error("Failed to fetch weather");
        
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError("Could not load weather data.");
      } finally {
        setLoading(false);
      }
    }

    if (city) {
      fetchWeather();
    }
  }, [city]);

  if (loading) {
    return (
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/40 flex flex-col items-center justify-center min-h-[160px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-3" />
        <p className="text-sm font-medium text-slate-500">Loading {city} weather...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-red-100 flex flex-col items-center justify-center min-h-[160px]">
        <AlertCircle className="h-8 w-8 text-red-400 mb-3" />
        <p className="text-sm font-medium text-slate-500">{error || "Weather unknown"}</p>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 blur-xl"></div>
      
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-1">Live Weather</p>
          <h3 className="text-xl font-bold font-heading text-slate-900">{city}</h3>
        </div>
        <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl">
          <img 
            src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} 
            alt={data.condition}
            width={64}
            height={64}
            className="drop-shadow-sm" 
          />
        </div>
      </div>

      <div className="flex items-end gap-2 mb-6">
        <span className="text-5xl font-bold font-heading text-slate-900 tracking-tighter">
          {Math.round(data.temp)}&deg;
        </span>
        <span className="text-lg font-medium text-slate-500 mb-1 capitalize">
          {data.condition}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-auto">
        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
          <Droplets className="h-5 w-5 text-blue-400" />
          <div>
            <p className="text-xs text-slate-400 font-medium">Humidity</p>
            <p className="text-sm font-bold text-slate-700">{data.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
          <Wind className="h-5 w-5 text-teal-400" />
          <div>
            <p className="text-xs text-slate-400 font-medium">Wind</p>
            <p className="text-sm font-bold text-slate-700">{data.windSpeed} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
