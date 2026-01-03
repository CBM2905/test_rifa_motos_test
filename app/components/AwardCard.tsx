import { Award } from "@/app/types";
import { useRouter } from "next/navigation";

interface AwardCardProps {
  award: Award;
  onSelect?: () => void;
  onBuy?: () => void;
}

export default function AwardCard({ award, onSelect, onBuy }: AwardCardProps) {
  const router = useRouter();

  const handleBuy = async () => {
    try {
      const response = await fetch("/api/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ticketId: award.id,
          amount: award.price,
          email: "user@example.com", // Replace with actual user email
        }),
      });

      // Read response as text first
      const text = await response.text();
      
      let data;
      try {
        data = JSON.parse(text);
      } catch (parseError) {
        console.error("Failed to parse payment response:", parseError);
        console.error("Response text:", text);
        alert("Error: Invalid response from payment service");
        return;
      }

      if (response.ok && data.payment_link) {
        router.push(data.payment_link);
      } else {
        console.error("Payment creation failed:", data);
        alert(`Error: ${data.error || 'Failed to create payment'}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred.");
    }
  };

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
            handleBuy();
          }}
          className="w-full py-2 rounded transition font-semibold shadow-md hover:shadow-lg transform hover:scale-105 btn-gold"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
