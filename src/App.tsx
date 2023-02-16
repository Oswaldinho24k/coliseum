import { Navbar, Footer } from "./components/common";
import { About, Header, Info, Team } from "./components";

export default function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Team />
      {/* RRSS */}
      <Info />
      {/* comments */}
      {/* equipment */}
      <Footer />
    </main>
  );
}
