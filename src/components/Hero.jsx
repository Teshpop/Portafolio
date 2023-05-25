import { useState, useEffect } from "react";
import { linkedin, github } from "../assets";
import { tecnologias } from "../constans";
import { motion } from "framer-motion";

function Hero() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % tecnologias.length);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className=" text-center h-screen w-screen flex justify-center items-center text-text">
      <div className=" w-full flex justify-center items-center flex-col gap-4">
        <h1 className="text-5xl md:text-7xl font-bold">
          Desarrollador &nbsp;
          <span className={`block py-1 px-1 ${tecnologias[indice].color}`}>
            {tecnologias[indice].text}
          </span>
        </h1>
        <div className="flex gap-14 items-center justify-center bg-primary rounded-lg shadow-card py-5 px-7 bg-opacity-70 backdrop-blur-sm">
          <a href="https://github.com/Teshpop" target="_blank">
            <img src={github} alt="github" className="h-20 w-20" />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-luis-tello/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" className="h-20 w-20" />
          </a>
        </div>
        <div className="w-7 h-12 rounded-2xl border-4 border-gray-700 flex justify-center items-star">
          <motion.dev
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-gray-700 mt-1"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
