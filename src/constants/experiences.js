import React from "react"
import { FaCode, FaSketch } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "développeur intégrateur web et email",
    company: "Manageo",
    date: "Décembre 2019 - Septembre 2020",
    lieu: "Aix la Durane",
    desc: [
      `Intégration d’email et création des formulaires associés`,
      `Réalisation de landing pages`,
      `Développement des insertions CRM`,
      `Gestion de l’ERP`,
    ],
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "participation au Hackathon du Frioul",
    company: "Code4Marseille",
    date: "Octobre 2019",
    lieu: "île du Frioul, Marseille",
    desc: [
      `Développement d'une fonctionnalité de l'application MARCELLE - MOBI`,
      `Pendant 24h, en équipe de 5`,
      `Gestion de projet`,
      `Présentation du projet réalisé`,
    ],
  },
  {
    id: 3,
    icon: <FaSketch className="service-icon" />,
    title: "développeur web au Hackathon du Frioul",
    company: "Code4Marseille",
    date: "Octobre 2018",
    lieu: "Marseille",
    desc: [
      `Intégration des composants UI`,
      `Intégration de la librairie Leaflet.js`,
      `Colaboration entre 3 écoles du numérique`,
      `Mise en place de la v1 pour le Hackathon`
    ],
  },
]
