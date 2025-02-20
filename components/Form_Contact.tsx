"use client";

import type React from "react";
import { BiSolidMessageDetail } from "react-icons/bi";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoutez ici la logique d'envoi du formulaire
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div>
            <h2 className="text-4xl font-bold text-[#2e3d44] mb-2">
              Contactez-nous
            </h2>
            <div className="border-b-4 border-[#0c6baf] w-10 mt-6"></div>

            <p className="text-gray-600 mt-8">
              Notre campagne a parcouru un long chemin, mais il reste encore
              beaucoup de chemin à parcourir pour faire des dons et aidez-nous à
              gagner!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 mt-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Numéro de téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-transparent"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="text-white px-5 py-3 rounded-md bg-[#0c6baf] flex items-center font-bold gap-5 uppercase shadow-xl hover:shadow-lg hover:shadow-[#0c6baf] transition-shadow duration-300"
              >
                Envoyer la demande
                <div className="bg-white rounded-lg p-3 flex items-center justify-center">
                 <BiSolidMessageDetail color="#0c6baf" size={20} />
                </div>
              </button>
            </form>
          </div>

          {/* Carte de Libreville */}
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.85633401513!2d9.379824161540667!3d0.3954300641022098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b77c5a5bb03%3A0xc05b0ca01c749d82!2sLibreville%2C%20Gabon!5e0!3m2!1sfr!2sfr!4v1708433163044!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
