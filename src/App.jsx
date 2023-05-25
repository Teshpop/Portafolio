import { NavBar, About, Hero, Experience, Background } from "./components";

function App() {
  return (
    <div>
      <Background />
      <div>
        <div>
          <NavBar />
        </div>
        <Hero />
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default App;
