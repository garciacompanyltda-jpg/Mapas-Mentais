/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { TeacherPainSection } from './components/TeacherPainSection';
import { PracticeCarouselSection } from './components/PracticeCarouselSection';
import { BenefitsSection } from './components/BenefitsSection';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FooterSection } from './components/FooterSection';
import { CheckoutModal } from './components/CheckoutModal';
import { ScrollReveal } from './components/ScrollReveal';
import { SITE_CONFIG } from './data/content';

export default function App() {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'essential' | 'complete'>('complete');
  const [essentialUrl, setEssentialUrl] = useState<string>(() => {
    return SITE_CONFIG.checkoutEssentialUrl || localStorage.getItem('checkout_essential_url') || 'https://pay.wiapy.com/52_1H4UOY1SZ';
  });
  const [completeUrl, setCompleteUrl] = useState<string>(() => {
    return SITE_CONFIG.checkoutCompleteUrl || localStorage.getItem('checkout_complete_url') || 'https://pay.wiapy.com/tXr8DXukxitq';
  });

  const scrollToOffers = () => {
    const el = document.getElementById('oferta');
    if (el) {
      const topBarOffset = 50;
      const y = el.getBoundingClientRect().top + window.pageYOffset - topBarOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToCompletePlan = () => {
    const el = document.getElementById('plano-completo-cta') || document.getElementById('plano-completo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSelectPlan = (plan: 'essential' | 'complete') => {
    setSelectedPlan(plan);
    const targetUrl = plan === 'essential' ? essentialUrl : completeUrl;
    if (targetUrl) {
      window.location.href = targetUrl;
    } else {
      setCheckoutModalOpen(true);
    }
  };

  const handleSaveUrl = (plan: 'essential' | 'complete', url: string) => {
    if (plan === 'essential') {
      setEssentialUrl(url);
      localStorage.setItem('checkout_essential_url', url);
    } else {
      setCompleteUrl(url);
      localStorage.setItem('checkout_complete_url', url);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5EA] text-[#2B241F] flex flex-col font-sans selection:bg-[#B54F2D]/20 selection:text-[#B54F2D]">
      {/* SEÇÃO 1 — BARRA FIXA SUPERIOR */}
      <TopBar />

      <main className="flex-1 w-full">
        {/* SEÇÃO 2 — HERO (SEÇÃO PRINCIPAL - CARREGA DE IMEDIATO NO MOBILE) */}
        <HeroSection onCtaClick={scrollToOffers} />

        {/* SEÇÃO 3 — VEJA O MATERIAL NA PRÁTICA */}
        <ScrollReveal>
          <PracticeCarouselSection />
        </ScrollReveal>

        {/* SEÇÃO — O PROBLEMA NÃO É VOCÊ... */}
        <ScrollReveal>
          <TeacherPainSection />
        </ScrollReveal>

        {/* SEÇÃO 4 — O QUE VOCÊ RECEBE */}
        <ScrollReveal>
          <BenefitsSection />
        </ScrollReveal>



        {/* SEÇÃO 6 — BÔNUS EXCLUSIVOS */}
        <ScrollReveal>
          <BonusSection onBonusClick={scrollToCompletePlan} />
        </ScrollReveal>

        {/* SEÇÃO — DEPOIMENTOS DE PROFESSORES (CARROSSEL CLICÁVEL) */}
        <ScrollReveal>
          <TestimonialsSection />
        </ScrollReveal>

        {/* SEÇÃO 8 — OFERTA PRINCIPAL (DOIS PLANOS) */}
        <ScrollReveal>
          <PricingSection onSelectPlan={handleSelectPlan} />
        </ScrollReveal>

        {/* SEÇÃO 9 — GARANTIA DE 7 DIAS */}
        <ScrollReveal>
          <GuaranteeSection />
        </ScrollReveal>

        {/* SEÇÃO 11 — PERGUNTAS FREQUENTES */}
        <ScrollReveal>
          <FaqSection />
        </ScrollReveal>

        {/* SEÇÃO 12 — CTA FINAL */}
        <ScrollReveal>
          <FinalCtaSection onCtaClick={scrollToOffers} />
        </ScrollReveal>
      </main>

      {/* SEÇÃO 13 — RODAPÉ */}
      <ScrollReveal>
        <FooterSection />
      </ScrollReveal>

      {/* Checkout Transition / Setup Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        plan={selectedPlan}
        currentUrl={selectedPlan === 'essential' ? essentialUrl : completeUrl}
        onSaveUrl={handleSaveUrl}
      />
    </div>
  );
}
