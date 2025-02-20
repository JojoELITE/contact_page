import { Phone } from "lucide-react";

export default function ElectionCTA() {
  return (
    <section className="relative">
      <div
        className="relative py-24"
        style={{
          backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonial-bg-img.jpg-LNBxUJED16Uxb5MSN3mAeQ0lcXSwye.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Mise à jour de la couleur de l'overlay avec un dégradé subtil */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c6baf]/90 via-[#0c6baf]/80 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-16 leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>

            {/* Section téléphone animée avec nouvelle couleur */}
            <div className="flex flex-col items-center group">
              <div className="relative mb-4">
                {/* Cercle d'animation externe */}
                <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                {/* Cercle principal avec nouvelle couleur pour l'icône */}
                <div className="relative bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-xl hover:shadow-2xl">
                  <Phone className="w-8 h-8 text-[#0c6baf] animate-bounce-gentle" />
                </div>
              </div>
              <a
                href="tel:+241 00 00 00 00"
                className="text-white text-2xl font-semibold transition-transform hover:scale-105 "
              >
                +241 00 00 00 00
              </a>
              <span className="text-white text-sm mt-2 group-hover:opacity-75 transition-opacity">
                Appelez-nous pour toutes questions !
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Section inférieure avec couleur mise à jour */}
      <div className="bg-[#1E2A3B] py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="text-white text-2xl font-extrabold leading-tight">
              C'est le jour des élections, allez voter!
            </h3>
            <button className="bg-[#0c6baf] hover:bg-[#095d8d] text-white px-6 py-3 rounded-full inline-flex items-center gap-2 font-medium transition-colors shadow-md hover:shadow-xl">
              REJOIGNEZ LA CAMPAGNE
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
