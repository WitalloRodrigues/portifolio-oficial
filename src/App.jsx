import "./app.scss"
import Contact from "./components/contact/contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Orcamento from "./components/orcamento/Orcamento";
import Parallax from "./components/parallax/Parallax";
import Portifolio from "./components/portifolio/Portifolio";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Up from "./components/up/Up";

const App = () => {
  return <div>
    {/* <Cursor/> */}
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Skills"><Parallax type="servicos"/></section>
    <section><Skills/></section>
    <section id="Portifolio"><Parallax type="portifolio"/></section>
    <Portifolio/>
    <section id="Contatos"><Contact/></section>
    <section id="Orçamento"><Orcamento/></section>
    <Up/>
  </div>;
};

export default App;
