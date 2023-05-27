import {
  tailwindcss,
  boots,
  unity,
  react,
  RegresionPolinomial,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "experience",
    title: "Experiencia",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

export const configPart = [
  {
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
      },
    },
    background: {
      color: "#08142F",
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      color: {
        value: "#fff",
      },
      links: {
        color: "#fff",
        distance: 100,
        enable: true,
        opacity: 0.05,
        width: 2,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 150,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
    autoPlay: true,
  },
];

export const tecnologias = [
  {
    color: "text-sky-600",
    text: "React",
  },
  {
    color: "text-zinc-200",
    text: "Unity",
  },
  {
    color: "text-amber-400",
    text: "JavaScript",
  },
];

export const contCard = [
  {
    title: "Tailwindcss",
    icon: tailwindcss,
  },
  {
    title: "Bootswatch",
    icon: boots,
  },
  {
    title: "Unity",
    icon: unity,
  },
  {
    title: "React",
    icon: react,
  },
];

export const experience = [
  {
    title: "Wellness",
    icon: react,
    iconBg: "#61DAFB",
    preview:
      "https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377_960_720.jpg",
    points: [
      "Desarrollo Back-end formulario Mysql, Express",
      "Desarrollo Front-end React.js",
      "Implementacion de diseño responsivo",
      "Participacion en el diseño de la pagina",
    ],
    link: "#",
    date: "09/05/2023",
  },
  {
    title: "Regresion Polinomial",
    icon: RegresionPolinomial,
    iconBg: "#fff",
    preview: RegresionPolinomial,
    points: [
      "Desarrollo Front-end Vanilla.JS",
      "Implementacion de ecuaciones de regresion polinomial",
      "Implementacion de diseño responsivo",
    ],
    link: "https://regresion-polinomial.vercel.app/",
    date: "20/05/2023",
  },
];
