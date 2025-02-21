"use client";

import { motion } from "framer-motion";

const statutsData = [
  { 
    year: "2024", 
    title: "Principes Fondamentaux", 
    content: "L'organisation repose sur les valeurs de solidarité, d'engagement et de développement durable. Elle vise à fédérer les citoyens autour d’un projet commun pour un avenir meilleur."
  },
  { 
    year: "2023", 
    title: "Devise et Signes Distinctifs", 
    content: "Notre devise est « Unis pour un avenir meilleur ». Nos couleurs officielles sont le bleu et l'or. L’emblème est un cercle bleu entouré d’or, avec une étoile en son centre symbolisant l’espoir et l’unité."
  },
  { 
    year: "2022", 
    title: "Objet de l’Organisation", 
    content: "L'organisation a pour mission de promouvoir l’inclusion sociale, l’innovation et l’entrepreneuriat en mettant en place des programmes concrets pour améliorer le quotidien des citoyens."
  },
  { 
    year: "2021", 
    title: "Caractère Républicain", 
    content: "Nous adhérons aux principes fondamentaux définis par la Constitution et nous engageons à défendre la démocratie, l’unité nationale et les droits fondamentaux de tous les citoyens."
  },
  { 
    year: "2020", 
    title: "Idéologie", 
    content: "Nous adoptons une approche pragmatique, fondée sur l’intérêt collectif et le bien-être du peuple, au-delà des clivages idéologiques traditionnels. Nous travaillons avec toutes les entités partageant nos valeurs et respectant la légalité."
  },
];

function StatutsReglements() {
  return (
    <div className="bg-[#f8f9fc] py-16 flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-[#2e75b7] mb-12">Statuts et Règlements Intérieurs</h1>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full"></div>

          {/* Éléments de la timeline */}
          {statutsData.map((statut, index) => (
            <StatutSection key={index} {...statut} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface StatutSectionProps {
  year: string;
  title: string;
  content: string;
  isLeft: boolean;
}

function StatutSection({ year, title, content, isLeft }: StatutSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative flex ${isLeft ? "justify-start" : "justify-end"} items-center w-full my-8`}
    >
      {/* Point sur la ligne */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#2e75b7] border-4 border-white rounded-full shadow-md"></div>

      {/* Carte améliorée */}
      <div
        className={`relative w-[45%] bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-xl p-6 border-t-4 border-[#2e75b7] transition-all duration-300 ease-in-out hover:shadow-2xl ${
          isLeft ? "ml-auto" : "mr-auto"
        }`}
      >
        {/* Année mise en valeur */}
        <div className="absolute top-[-18px] left-5 bg-[#2e75b7] text-white px-3 py-1 rounded-lg text-sm font-bold shadow-md">
          {year}
        </div>

        {/* Contenu */}
        <h2 className="text-xl font-bold text-gray-800 mt-3">{title}</h2>
        <p className="text-gray-600 mt-2 leading-relaxed">{content}</p>
      </div>
    </motion.div>
  );
}

export default StatutsReglements;
