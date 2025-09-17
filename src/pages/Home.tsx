import Hero from "../components/Hero";
import Nav from "../components/Nav";

function Home() {
  return (
    <div className="bg-[#151515] ">
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default Home;
