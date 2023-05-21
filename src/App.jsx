import { About, Header, Hero, Experience } from "./components";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-primary">
        <div className="bg-secondary">
          <Header />
        </div>
        <Hero />
        <About />
        <Experience />
      </div>
    </>
  );
}

export default App;
