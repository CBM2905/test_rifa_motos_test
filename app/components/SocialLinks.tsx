import { WhatsAppIcon, InstagramIcon } from "./SocialIcons";

interface SocialLinksProps {
  whatsappLink: string;
  instagramLink: string;
}

export default function SocialLinks({ 
  whatsappLink, 
  instagramLink 
}: SocialLinksProps) {
  return (
    <section className="py-12 px-4 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Síguenos en nuestras redes
          </h3>
          
          <div className="flex justify-center gap-8">
            {/* WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send/?phone=57${whatsappLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-50 rounded-full hover:bg-green-100 transition transform hover:scale-110"
              title="Contactar por WhatsApp"
            >
              <WhatsAppIcon />
            </a>

            {/* Instagram */}
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-pink-50 rounded-full hover:bg-pink-100 transition transform hover:scale-110"
              title="Seguir en Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
