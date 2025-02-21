"use client";

import { useState } from "react";

export default function Adhesion() {
  const [formData, setFormData] = useState({
    civilite: "",
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ageGroup: "",
    country: "",
    department: "",
    city: "",
    voterCard: "",
    memberCard: "",
    termsAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = type === "checkbox" ? target.checked : undefined;

    setFormData({
      ...formData,
      [name]: checked !== undefined ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Votre demande d'adhésion a été envoyée !");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-8 lg:px-10">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Rejoignez <span className="text-blue-600">le mouvement PLC</span>
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          Le Parti Pour Le Changement (PLC) œuvre pour une société plus juste,
          plus solidaire et tournée vers l&apos;avenir. En adhérant, vous
          participez activement à nos actions et contribuez au changement.
        </p>
      </div>

      <div className="mt-10 max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Formulaire d&apos;adhésion
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-bold mb-2">Civilité *</label>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="civilite"
                  value="Masculin"
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                <span>Masculin</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="civilite"
                  value="Féminin"
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                <span>Féminin</span>
              </label>
            </div>
          </div>
          <input
            type="text"
            name="firstName"
            placeholder="Prénom"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nom"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <label className="block font-bold mb-2">Groupe d&apos;âge *</label>
          <select
            name="ageGroup"
            value={formData.ageGroup}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sélectionnez</option>
            <option value="18-25 ans">18-25 ans</option>
            <option value="26-35 ans">26-35 ans</option>
            <option value="36 ans et plus">36 ans et plus</option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Téléphone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <label className="block font-bold mb-2">Pays de résidence *</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sélectionnez</option>
            <option value="Sénégal">Sénégal</option>
          </select>
          <label className="block font-bold mb-2">Votre département *</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sélectionnez</option>
            <option value="DAKAR">DAKAR</option>
          </select>
          <input
            type="text"
            name="city"
            placeholder="Ville ou Quartier"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <label className="block font-bold mb-2">
            Avez-vous une carte d&apos;électeur ? *
          </label>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="voterCard"
                value="Oui"
                onChange={handleChange}
                className="accent-blue-600"
              />
              <span>Oui</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="voterCard"
                value="Non"
                onChange={handleChange}
                className="accent-blue-600"
              />
              <span>Non</span>
            </label>
          </div>

          <div className="p-4 bg-gray-100 rounded">
            <h3 className="text-lg font-bold">Termes et Conditions</h3>
            <p className="text-sm text-gray-600">
              En soumettant ce formulaire, vous acceptez notre politique de
              confidentialité et nos conditions d&apos;utilisation. Nous collectons
              vos informations pour améliorer nos services et pour vous tenir
              informé des activités de PLC.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                name="termsAccepted"
                onChange={handleChange}
              />
              <label>J&apos;accepte les termes et conditions.</label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-4 rounded-lg font-bold hover:bg-blue-700 transition ease-in-out duration-300"
          >
            Soumettre ma demande
          </button>
        </form>
      </div>
    </div>
  );
}
