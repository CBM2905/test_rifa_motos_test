interface HeroSectionProps {
  title: string;
  subtitle: string;
  progress: number;
  bannerImage: string;
  onCheckDayClick?: () => void;
  onCheckNumbersClick?: () => void;
}

export default function HeroSection({
  title,
  subtitle,
  progress,
  bannerImage,
  onCheckDayClick,
  onCheckNumbersClick,
}: HeroSectionProps) {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#000000] to-[#070707] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Title and Content */}
          <div className="text-white space-y-6">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                {title}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gold mt-2">
                {subtitle}
              </h2>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #b8860b, #d4af37)' }}
                />
              </div>
              <p className="text-sm text-muted font-semibold">{progress.toFixed(2)}%</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={onCheckDayClick}
                className="px-6 py-3 rounded-md transition font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 btn-gold"
              >
                ¿Que día juega?
              </button>
              <button 
                onClick={onCheckNumbersClick}
                className="px-6 py-3 rounded-md transition font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 btn-gold"
              >
                Consulta tus números aquí
              </button>
            </div>
          </div>

          {/* Right Column - Banner Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 w-full">
            <img
              src={bannerImage}
              alt={`${title} Banner`}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
