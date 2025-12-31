import { Award } from "@/app/types";

interface AwardCardProps {
  award: Award;
  onSelect?: () => void;
  onBuy?: () => void;
}

export default function AwardCard({ award, onSelect, onBuy }: AwardCardProps) {
  return (
    <div
      className="card-dark rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105 group"
      onClick={onSelect}
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-[#0b0b0b]">
        <img
          src={award.image}
          alt={award.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Content Container */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-lg text-gold line-clamp-2">
            {award.title}
          </h3>
          <p className="text-muted text-sm line-clamp-2">
            {award.description}
          </p>
        </div>

        {/* Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onBuy?.();
          }}
          className="w-full py-2 rounded transition font-semibold shadow-md hover:shadow-lg transform hover:scale-105 btn-gold"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
