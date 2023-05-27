import React from "react";
import { Tierra } from "./canvas";
import { Tilt } from "react-tilt";
import { contCard } from "../constans";

function Card({ title, icon, index }) {
  return (
    <Tilt key={index} className="sm:w-[250px] w-full mx-2">
      <div className="bg rounded-md py-5 px-5 flex justify-center items-center flex-col">
        <img src={icon} alt={title} className="h-16 w-16" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </Tilt>
  );
}

function About() {
  return (
    <section
      id="about"
      className="h-screen w-screen flex flex-col lg:flex-row justify-evenly items-center"
    >
      <div className="overflow-hidden overflow-y-scroll bg-primary bg-opacity-70 backdrop-blur-md h-[50%] w-[95%] lg:h-full lg:w-[40%] flex flex-col justify-center items-center rounded-lg shadow-card gap-10">
        <p className="text-base lg:text-lg text-justify mt-[33rem] xs:mt-[30rem] sm:mt-[6rem] lg:mt-0 px-6">
          Soy un estudiante de ingeniería en desarrollo de videojuegos, y tengo
          habilidades en React y Node.js. Me apasiona crear experiencias
          interactivas y divertidas. Con React, puedo construir interfaces de
          usuario dinámicas, y con Node.js, puedo desarrollar servidores y
          aplicaciones backend para juegos en tiempo real. Además de mi
          conocimiento técnico, también entiendo los fundamentos del diseño de
          videojuegos, como las mecánicas de juego y el diseño de niveles. Soy
          creativo y siempre estoy buscando nuevas formas de hacer que los
          juegos sean emocionantes y envolventes.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center py-3">
          {contCard.map((cont, index) => (
            <Card title={cont.title} icon={cont.icon} index={index} />
          ))}
        </div>
      </div>
      <div className="h-[50%] w-full lg:h-full lg:w-[55%]">
        <Tierra />
      </div>
    </section>
  );
}

export default About;
