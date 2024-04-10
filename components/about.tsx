"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>O mnie</SectionHeading>
      <p className="mb-3">
        
"Posiadam doświadczenie jako magazynier, charakteryzuje mnie skrupulatność oraz umiejętność estetycznego i efektywnego pakowania towarów. Stale rozwijam swoją wiedzę z zakresu e-commerce, a moją pasją są przyroda, bieganie oraz czytanie książek. Interesuję się również informatyką oraz tworzeniem stron internetowych."
      </p>

      <p className="mb-3">
      "Szybko się uczę i nawet jeśli czegoś nie wiem, zrobię wszystko, by znaleźć rozwiązanie." </p>
    </motion.section>
  );
}
