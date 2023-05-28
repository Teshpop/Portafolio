import { Opacity } from "tsparticles-engine";
import { NavBar, About, Hero, Experience, Background } from "./components";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Background />
      <div>
        <div>
          <NavBar />
        </div>
        <Hero />
        <About />
        <Experience />
      </div>
    </motion.div>
  );
}

export default App;
