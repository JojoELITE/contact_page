"use client";

import { motion } from "framer-motion";

const historiquePLC = [
  { 
    year: "2025", 
    title: "Vers un Avenir Prometteur", 
    content: "Le PLC continue de promouvoir des politiques ambitieuses pour un développement durable, en mettant l'accent sur l'innovation et l'inclusion."
  },
  { 
    year: "2024", 
    title: "Expansion et Renouveau", 
    content: "Le PLC renforce son influence nationale et engage des réformes pour moderniser l'économie et renforcer la cohésion sociale."
  },
  { 
    year: "2023", 
    title: "Lutte contre les Inégalités", 
    content: "Des mesures concrètes sont prises pour réduire les inégalités et garantir un meilleur accès aux services de base pour tous les citoyens."
  },
  { 
    year: "2022", 
    title: "Développement Social et Économique", 
    content: "Le PLC concentre ses efforts sur des projets visant à améliorer les conditions de vie des populations rurales et urbaines."
  },
  { 
    year: "2021", 
    title: "Réformes Politiques", 
    content: "Le PLC initie une série de réformes politiques pour renforcer la démocratie, la transparence et la bonne gouvernance."
  },
  { 
    year: "2020", 
    title: "Solidarité en Période de Crise", 
    content: "Face à la pandémie de COVID-19, le PLC met en place des mesures de soutien aux entreprises et aux populations vulnérables."
  },
  { 
    year: "2019", 
    title: "Croissance et Progrès", 
    content: "Le PLC lance de nouveaux programmes pour soutenir l'entrepreneuriat et favoriser la création d'emplois dans tout le pays."
  },
  { 
    year: "2018", 
    title: "Fondation du PLC", 
    content: "Le PLC a été fondé sur les principes de justice sociale, de développement durable et d'inclusivité, avec pour objectif de transformer positivement la société."
  },
];

// Trier les événements par année dans l'ordre croissant
const historiquePLCSorted = historiquePLC.sort((a, b) => parseInt(a.year) - parseInt(b.year));

function HistoriquePLC() {
  return (
    <div className="bg-[#f8f9fc] py-16 flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-5xl">
      <h1 className="text-5xl font-bold text-center text-[#2e75b7] mb-16">Notre Histoire</h1>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full"></div>

          {/* Éléments de la timeline */}
          {historiquePLCSorted.map((event, index) => (
            <EventSection key={index} {...event} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface EventSectionProps {
  year: string;
  title: string;
  content: string;
  isLeft: boolean;
}

function EventSection({ year, title, content, isLeft }: EventSectionProps) {
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

export default HistoriquePLC;
