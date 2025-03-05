import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Voiceflow from "@/components/Voiceflow";

export const metadata: Metadata = {
  title: "Darmowe Konsultacje oraz Wyceny Projektu",
  description: "Porozmawiaj z Nami, lub Naszym chatbotem, a odezwiemy się do Ciebie w sprawie Twojego projektu",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pt-40 pb-20">
      <Contact />
      <Voiceflow/>
    </div>
  );
};

export default SupportPage;
