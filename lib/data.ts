import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
 

  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Liceum ogólnokształcące ",
    description:
      "Wykształcenie średnie",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Ceva Logistics",
    location: "Pracownik magazynu",
    description:"W mojej pierwszej pracy  w firmie zajmowałem się zbieraniem zamówień i pakowaniem towarów. Byłem odpowiedzialny za przygotowywanie produktów do wysyłki oraz dbanie o sprawną organizację procesu pakowania.",
    icon: React.createElement(CgWorkAlt),
    date: "06.07.2019 - 20.11.2019",
  },
  {
    title: "Ab",
    location: "Pracownik magazynu",
    description:"W hurtowni elektronicznej AB wykonywałem prace inwentaryzacyjne, zbierałem zamówienia, pracowałem ze skanerem.",
    icon: React.createElement(CgWorkAlt),
    date: "03.01.2020 - 10.07.2020 ",
  },
  {
    title: "Obi",
    location: "Pracownik magazynu",
    description:
      "Pracowałem w firmie Obi na dziale ogród, wykonywałem prace zaopatrzeniowe i magazynowe, uzupełniałem towar na półkę.",
    icon: React.createElement(FaReact),
    date: "20.07.2020 - 22.12.2020 ",
  },
  {
    title: "Xkom",
    location: "Pracownik magazynu",
    description:
      "W firmie Xkom zajmowałem się sprawnym pakowaniem, wykonywałem prace magazynowe i zbierałem zamówienia.",
      icon: React.createElement(CgWorkAlt),
      date: "05.02.2021 - 10.11.2021",
  },
  {
    title: "Edpol",
    location: "Pracownik magazynu",
    description:
      "W hurtowni części samochodowych Edpol, zbierałem zamówienia, obsługiwałem sklep, przyjmowałem dostawy, uzupełniałem asortyment.",
    icon: React.createElement(FaReact),
    date: "12.11.2021 - 30.09.2022 ",
  },
  {
    title: "At-Outlet",
    location: "Pracownik magazynu",
    description:
      "W sklepie komputerowym AT-Outlet, realizowałem zamówienia, konfigurowałem sprzęt i wykonywałem testy diagnostyczne.",
      icon: React.createElement(CgWorkAlt),
    date: "03.10.2022 - 10.03.2023",
  },
  {
    title: "ATM Mikoda",
    location: "Pracownik magazynu",
    description:
      "W firmię ATM Mikoda  zbieraniem, pakowałem i wysyłałem zamówienia, korzystałem z programu optima erp.",
      icon: React.createElement(FaReact),
      date: "13.03.2023 - 07.07.2023",
  },
  {
    title: "Klocki Edu",
    location: "Pracownik magazynu",
    description:
      "W sklepie internetowym Klocki Edu, korzystałem z platform IdoSell, Allegro, za pomocą programu Enova365 wystawiałem faktury z odroczonym termiem płatnośći dla placówek publicznych. Zbierałem i pakowałem i wysyłałem zamówienia, kompletowałem produkty, przyjmowałem dostawy.",
      
      icon: React.createElement(CgWorkAlt),
    date: "01.09.2023 - 31.01.2024",
  },
  {
    title: "React",
    location: "",
    description:
      "Obecnie poszerzam swoje kompetencje, umiejętności oraz wiedzę w obszarze informatyki, skupiając się głównie na front-endzie i full-stacku. Tworzę projekty wykorzystując React & Next.js oraz Tailwind CSS.",
      icon: React.createElement(FaReact),
    date: "Obecnie",
  },
] as const;

export const projectsData = [
  {
    title: "Własny Ecommerce",
    description:
      "Wraz z pomocą programisty ze Sztokholmu udało nam się utworzyć sklep internetowy.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "RabatAngel",
    description:
      "Na prośbę Pana Sławomira wykonałem platformę rabatowa z pięcioma podstronami, Home, About, Kody Rabatowe, Kontakt, Blog.",
    tags: ["HTML", "CSS", "JavaScript", "FormSpree"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Własna strona internetowa",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Microsoft Office",
  "Biegła obsługa komputera",
  "IdoSell",
  "Enova365",
  "Optima",
  "Allegro",
  "Faktury",
  "Paragony",
  "Inwentaryzacja",
  "Pakowanie",
  "Kompletacja",
  "Zbieranie zamówień",
  "Język Angielski",
  "Skrupulatność",
  "Dobra sprawność fizyczna",
  "Dobra organizacja pracy",
  "Umiejętność pracy w biurze"
] as const;
