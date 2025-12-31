import { Award } from "@/app/types";
import AwardCard from "./AwardCard";

interface AwardsSectionProps {
  awards: Award[];
  onAwardSelect?: (award: Award) => void;
}

export default function AwardsSection({ 
  awards, 
  onAwardSelect 
}: AwardsSectionProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Premios Disponibles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selecciona un premio y participa en nuestra rifa. Cada compra te acerca más a ganar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award) => (
            <AwardCard
              key={award.id}
              award={award}
              onSelect={() => onAwardSelect?.(award)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
