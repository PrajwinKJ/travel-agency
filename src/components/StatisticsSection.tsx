export default function StatisticsSection() {
  const stats = [
    { number: "12,500+", label: "Happy Travelers" },
    { number: "120+", label: "Global Destinations" },
    { number: "15", label: "Years of Experience" },
    { number: "4.8/5", label: "Average Rating" },
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-slate-200/50">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center px-4">
              <span className="text-4xl md:text-5xl font-extrabold font-heading text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover mb-2 drop-shadow-sm">
                {stat.number}
              </span>
              <span className="text-sm md:text-base font-medium text-slate-600 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
