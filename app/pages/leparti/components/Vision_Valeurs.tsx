"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const visionData = [
  {
    id: 1,
    title: "Force",
    description:
      "Parti engagé pour impulser la marche vers un changement de régime et des habitudes.",
  },
  {
    id: 2,
    title: "Honneur",
    description:
      "Le changement par des hommes et femmes habités par le respect des valeurs sociales.",
  },
  {
    id: 3,
    title: "Intégrité",
    description:
      "Des hommes et des femmes fermes dans leurs convictions et croyances, décidés à améliorer le quotidien du gabonais.",
  },
];

function VisionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mt-2 mb-6 text-gray-900 text-center">
          <span className="text-[#2e75b7]">Notre</span> mission & vision
        </h2>
        <p className="max-w-3xl text-gray-600 text-lg text-center mx-auto">
          Ensemble, nous, le peuple, accomplissons plus que n&apos;importe quelle personne seule.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {visionData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg border border-gray-300 p-6 bg-white hover:shadow-xl transition-all"
            >
              <h3 className="font-bold text-2xl mb-3 text-[#2e75b7]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg">{item.description}</p>
              <Button
                variant="link"
                className="mt-4 text-[#2e75b7] font-semibold hover:underline"
              >
                LIRE PLUS →
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisionSection;
