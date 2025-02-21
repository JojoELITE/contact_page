import { Button } from "@/components/ui/button";
import { FaBalanceScale, FaRocket, FaPeopleCarry } from "react-icons/fa"; // Example icons

const visionData = [
  {
    id: 1,
    title: "Égalité et solidarité",
    description:
      "Ensemble, nous, le peuple, accomplissons plus que n'importe quelle personne seule.",
    icon: <FaBalanceScale className="text-6xl text-white" />,
  },
  {
    id: 2,
    title: "Progrès et innovation",
    description:
      "L'innovation et le progrès sont la clé d'un avenir meilleur pour tous.",
    icon: <FaRocket className="text-6xl text-white" />,
  },
  {
    id: 3,
    title: "Unité et diversité",
    description:
      "Notre diversité est notre force et notre unité est notre avenir.",
    icon: <FaPeopleCarry className="text-6xl text-white" />,
  },
];

function VisionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mt-2 mb-4 text-gray-900">
          Notre mission & vision
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Ensemble, nous, le peuple, accomplissons plus que n&aops;importe quelle
          personne seule.
        </p>

        <div className="grid md:grid-cols-3 gap-16 mt-12">
          {visionData.map((item) => (
            <div
              key={item.id}
              className="space-y-6 flex flex-col items-center p-8 rounded-3xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
              style={{
                background: `linear-gradient(145deg, #2e75b7, #1a4d7d)`, // Updated gradient with primary color
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.12)", // Elegant shadow for soft depth
              }}
            >
              {/* Icon Container */}
              <div className="bg-gradient-to-r from-[#2e75b7] to-[#1a4d7d] text-white rounded-full p-8 mb-6 flex items-center justify-center shadow-lg">
                {item.icon}
              </div>
              <h3 className="font-bold text-2xl text-white">{item.title}</h3>{" "}
              {/* White text for title */}
              <p className="text-gray-200 text-lg max-w-md mx-auto">
                {item.description}
              </p>{" "}
              {/* Light gray text for description */}
              <Button
                variant="outline"
                className="mt-6 px-8 py-3 text-lg font-semibold border-2 border-[#2e75b7] text-[#2e75b7] rounded-full transition-all duration-300 ease-in-out transform hover:bg-[#2e75b7] hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2e75b7]"
              >
                LIRE LE PLAN
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisionSection;
