'use client';

import { useState, useCallback } from 'react';
import {
  Navbar,
  HeroSection,
  AwardsSection,
  SocialLinks,
} from '@/app/components';
import { raffleData } from '@/app/constants/raffleData';
import { Award } from '@/app/types';

export default function Home() {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);
  const handleAwardSelect = useCallback((award: Award) => {
    setSelectedAward(award);
    console.log('Award selected:', award);
  }, []);
  const handleCheckDay = useCallback(() => {
    // TODO: Implementar lógica para verificar día
    console.log('Check day clicked');
  }, []);

  const handleCheckNumbers = useCallback(() => {
    // TODO: Implementar lógica para verificar números
    console.log('Check numbers clicked');
  }, []);

  const handleAwardBuy = useCallback((award: Award) => {
    // simple buy flow: add to cart or trigger purchase
    alert(`¡${award.title} agregado al carrito!`);
    console.log('Buy clicked for award:', award);
  }, []);

  return (
    <>
      <Navbar />

      <main className="pt-20">
        <HeroSection
          title={raffleData.title}
          subtitle={raffleData.description}
          progress={raffleData.progress}
          bannerImage={raffleData.bannerImage}
          onCheckDayClick={handleCheckDay}
          onCheckNumbersClick={handleCheckNumbers}
        />

        <AwardsSection
          awards={raffleData.awards}
          onAwardSelect={handleAwardSelect}
          onAwardBuy={handleAwardBuy}
        />

        <SocialLinks
          whatsappLink={raffleData.whatsapp_link}
          instagramLink={raffleData.instagram_link}
        />
      </main>
    </>
  );
}
