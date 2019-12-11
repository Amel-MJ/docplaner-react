import React from "react";
//import logo from "./logo.svg";
//import './App.css';
import Navbar from "./componente/navbar/navbar.js";
import "./componente/navbar/nav.css";
import Description from "./componente/section/description.js";
import "./componente/section/desc.css";
import Marketplace from "./componente/marketplace/marketplace.js";
import "./componente/marketplace/market.css";
import Company from "./componente/company/company.js";
import "./componente/company/company.css";
import Stat from "./componente/stat/stat.js";
import "./componente/stat/stat.css";
import Office from "./componente/offices/office";
import "./componente/offices/office.css";
import Footer from "./componente/footer/footer";
import "./componente/footer/footer.css";

const menu = [
  { id: "1", title: "About us", url: "/about-us", className: "is-current" },
  { id: "2", title: "Career", url: "/career" },
  {
    id: "3",
    title: "Departments",

    drop: [
      { id: "4", title: "Marketing & PR", url: "/department?dep=marketing" },
      {
        id: "5",
        title: "Customer Success & Sales",
        url: "/department?dep=customer"
      },
      { id: "6", title: "IT, Product, Design & UX", url: "/department?dep=it" },
      {
        id: "7",
        title: "Finance & Administration",
        url: "/department?dep=customer"
      },
      { id: "8", title: "HR & more", url: "/department?dep=hr" }
    ]
  }
];

const desc = [
  {
    parg:
      "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere."
  },
  {
    parg:
      "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."
  }
];

const person = [
  {
    name: "For patients",
    des: "Find a doctor book a visit and solve any health-related doubt",
    option: [
      "Argentina",
      "Australi",
      "Brazil",
      "Chile",
      "Czech",
      "France",
      "Italy",
      "Mexico",
      "Peru",
      "Poland",
      "Portugal",
      "Spain",
      "Turkey"
    ],
    src: "//www.docplanner.com/img/screen-marketplace@2x.png"
  },
  {
    name: "For doctors",
    style: "yy",
    des: "Save time managing visits and cut no-shows by half",
    src: "https://www.docplanner.com/img/screen-saas@2x.png"
  }
];
const stat = [
  {
    scr: "https://www.docplanner.com/img/flag.png",
    des: "Leader in 10 countries",
    p:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile ",
    id: "column1"
  },

  {
    scr: "https://www.docplanner.com/img/visits.png",
    des: "1.5 million appointments",
    p: "booked last month",
    id: "column2"
  },

  {
    scr: "https://www.docplanner.com/img/patients.png",
    des: "30 million unique patients",
    p: "visit us every month",
    id: "column1"
  },

  {
    scr: "https://www.docplanner.com/img/doctors.png",
    des: "2 million active doctors",
    p: "trustin our solutions",
    id: "column2"
  }
];

const off = [
  {
    scr: "https://www.docplanner.com/images/warsaw.png",
    href: "/career?&amp;loc=poland#jobs-offers",
    btn: "See openings",
    ville:"Warsaw"
  },
  {
    scr: "https://www.docplanner.com/images/barcelona.png",
    href: "/career?&amp;loc=spain#jobs-offers",
    btn: "See openings",
    ville:"Barcelona"
  },
  {
    scr: "https://www.docplanner.com/images/istanbul.png",
    href: "/career?&amp;loc=rome#jobs-offers",
    btn: "See openings",
    ville:"Istanbul"
  },
  {
    scr: "https://www.docplanner.com/images/rome.png",
    href: "/career?&amp;loc=italy#jobs-offers",
    btn: "See openings",
    ville:"Rome"
  },
  {
    scr: "https://www.docplanner.com/images/mexico-city.png",
    href: "/career?&amp;loc=mexico#jobs-offers",
    btn: "See openings",
    ville:"Mexico City"
  },
  {
    scr: "https://www.docplanner.com/images/curitiba.png",
    href: "/career?&amp;loc=brazil#jobs-offers",
    btn: "See openings",
    ville:"Curitiba"
  }
];

function App() {
  return (
    <div className="App">
      <Navbar x={menu} />
      <Description desc={desc} />
      <Marketplace person={person} />
      <Company />
      <Stat stat={stat} />
      <Office office={off} />
      <Footer />
    </div>
  );
}

export default App;
