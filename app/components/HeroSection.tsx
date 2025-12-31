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
    <section className="relative w-full bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Title and Content */}
          <div className="text-white space-y-6">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                {title}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300 mt-2">
                {subtitle}
              </h2>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500" 
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-300 font-semibold">{progress.toFixed(2)}%</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={onCheckDayClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                ¿Que día juega?
              </button>
              <button 
                onClick={onCheckNumbersClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
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
