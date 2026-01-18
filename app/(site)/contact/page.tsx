import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import ElevenLabs from "@/components/Elevenlabs";

export const metadata: Metadata = {
  title: "Darmowe Konsultacje oraz Wyceny Projektu | Skontaktuj Się z MacAI & AInsider",
  description: "Porozmawiaj z Nami, lub Naszym inteligentnym chatbotem. Oferujemy bezpłatne konsultacje projektów AI, automatyzacji i rozwoju Full Stack. Odezwiemy się do Ciebie w ciągu 24h.",
};

const ContactPage = () => {
  return (
    <div className="pt-40 pb-20">
      <Contact />
      <div className="fixed bottom-5 left-5 z-50">
        <ElevenLabs />
      </div>
    </div>
  );
};

export default ContactPage;