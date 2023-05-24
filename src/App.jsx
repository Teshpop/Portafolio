import { About, Header, Hero, Experience } from "./components";

function App() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-header bg-cover bg-no-repeat bg-center">
          <Header />
          <Hero />
        </div>
        <About />
        <Experience />
      </div>
    </>
  );
}

export default App;
