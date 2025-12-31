import { Award } from "@/app/types";
import AwardCard from "@/app/components/AwardCard";

interface AwardsSectionProps {
  awards: Award[];
  onAwardSelect?: (award: Award) => void;
  onAwardBuy?: (award: Award) => void;
}

export default function AwardsSection({ 
  awards, 
  onAwardSelect,
  onAwardBuy,
}: AwardsSectionProps) {
  const award = awards && awards.length > 0 ? awards[0] : null;

  if (!award) return null;

  return (
    <section className="py-16 px-4 bg-[#050505]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gold mb-2">
            Premio Destacado
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Compra un ticket para participar en la rifa.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <AwardCard
              award={award}
              onSelect={() => onAwardSelect?.(award)}
              onBuy={() => onAwardBuy?.(award)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
