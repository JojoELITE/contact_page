import Image from "next/image"

interface HistoryEventProps {
  year: string
  title: string
  isLeft: boolean
}

function NotreHistoire() {
  const events: Omit<HistoryEventProps, "isLeft">[] = [
    { year: "2010", title: "Fondation du PLC" },
    { year: "2012", title: "Première campagne" },
    { year: "2015", title: "Expansion nationale" },
    { year: "2017", title: "Percée électorale" },
    { year: "2019", title: "Nouveau programme" },
    { year: "2020", title: "Gestion de crise" },
    { year: "2022", title: "Victoires régionales" },
    { year: "2023", title: "Vers l'avenir" },
  ]

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-blue-800 mb-16">Notre Histoire</h1>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute w-1 bg-blue-200 h-full left-1/2 transform -translate-x-1/2"></div>

          {events.map((event, index) => (
            <HistoryEvent key={event.year} {...event} isLeft={index % 2 === 0} />
          ))}
        </div>

        {/* Image illustrative */}
        <div className="mt-24 flex flex-col items-center">
          <Image
            src="/PLC .jpg"
            alt="Évolution du PLC à travers les années"
            width={1200}
            height={400}
            className="rounded-xl shadow-2xl"
          />
          <p className="text-center text-gray-500 mt-4 italic">Notre parcours de 2010 à 2023</p>
        </div>
      </div>
    </div>
  )
}

function HistoryEvent({ year, title, isLeft }: HistoryEventProps) {
  return (
    <div className={`flex flex-col md:flex-row items-center w-full mb-8 ${isLeft ? "md:flex-row-reverse" : ""}`}>
      <div className="w-5/12 hidden md:block"></div>
      <div className="w-2/12 flex justify-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow"></div>
      </div>
      <div className="w-full md:w-5/12 mt-4 md:mt-0">
        <div className={`p-6 bg-white rounded-xl shadow-lg max-w-prose ${isLeft ? "text-right" : ""}`}>
          <h2 className="text-2xl font-bold text-blue-700 mb-2">{year}</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotreHistoire
