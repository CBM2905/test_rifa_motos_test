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

  const handleLoginClick = useCallback(() => {
    // TODO: Implementar lógica de login
    console.log('Login clicked');
  }, []);

  const handleAwardSelect = useCallback((award: Award) => {
    setSelectedAward(award);
    console.log('Award selected:', award);
  }, []);

  const handleAwardBuy = useCallback((award: Award) => {
    // TODO: Implementar lógica de compra
    console.log('Buy clicked for award:', award);
  }, []);

  const handleCheckDay = useCallback(() => {
    // TODO: Implementar lógica para verificar día
    console.log('Check day clicked');
  }, []);

  const handleCheckNumbers = useCallback(() => {
    // TODO: Implementar lógica para verificar números
    console.log('Check numbers clicked');
  }, []);

  return (
    <>
      <Navbar onLoginClick={handleLoginClick} />

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
        />

        <SocialLinks
          whatsappLink={raffleData.whatsapp_link}
          instagramLink={raffleData.instagram_link}
        />
      </main>
    </>
  );
}
