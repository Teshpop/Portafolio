import Particles from "react-particles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { configPart } from "../constans";

function Background() {
  const particleInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particleInit}
      loaded={particlesLoaded}
      options={configPart}
    />
  );
}

export default Background;
