"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const statutsData = [
  {
    title: "Préambule",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article 1 : Nom et siège",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Article 2 : Objectifs",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Article 3 : Adhésion",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Article 4 : Organes directeurs",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article 5 : Assemblée générale",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Article 6 : Modifications des statuts",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Article 7 : Dissolution",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]

type StatutSectionProps = {
  title: string;
  content: string;
}

function StatutsReglements() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Statuts et règlements intérieurs</h1>
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          {statutsData.map((statut, index) => (
            <StatutSection key={index} title={statut.title} content={statut.content} />
          ))}
        </div>
      </div>
    </div>
  )
}

function StatutSection({ title, content }: StatutSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {isOpen ? <ChevronUp className="text-gray-500 w-5 h-5" /> : <ChevronDown className="text-gray-500 w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50">
          <p className="text-gray-600">{content}</p>
        </div>
      )}
    </div>
  )
}

export default StatutsReglements
