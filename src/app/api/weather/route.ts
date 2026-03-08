import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: "City is required" }, { status: 400 });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;

  try {
    if (apiKey) {
      // Try fetching from real API
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`
      );
      
      console.log(`Weather API Response Status for ${city}:`, res.status);

      if (res.ok) {
        const data = await res.json();
        return NextResponse.json({
          temp: data.main.temp,
          condition: data.weather[0].main,
          humidity: data.main.humidity,
          windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
          icon: data.weather[0].icon,
        });
      } else {
        const errorText = await res.text();
        console.error("OpenWeather API Error:", errorText);
      }
    } else {
      console.log("No OPENWEATHER_API_KEY found in environment variables.");
    }
    
    // Fallback/Mock data if API key is missing or request fails
    // Generate deterministic mock data based on city name length
    const mockTemp = 20 + (city.length % 15);
    const conditions = ["Clear", "Clouds", "Rain", "Sunny"];
    const condition = conditions[city.length % conditions.length];
    const iconMap: Record<string, string> = {
      "Clear": "01d",
      "Sunny": "01d",
      "Clouds": "03d",
      "Rain": "09d"
    };
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({
      temp: mockTemp,
      condition: condition,
      humidity: 45 + (city.length % 30),
      windSpeed: 10 + (city.length % 20),
      icon: iconMap[condition] || "01d",
      _mocked: true,
    });
    
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch weather data" }, { status: 500 });
  }
}
