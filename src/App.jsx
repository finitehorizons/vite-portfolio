import "./App.scss";
import Hero from "./components/Hero/Hero";

import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

function App() {
    return (
        <>
            <section id='Home'>
                <Navbar />
                <Hero />
            </section>
            <section id='Skills'>
                <Parallax type='services' />
            </section>
            <section>
                <Services />
            </section>
            <section id='Portfolio'>
                <Parallax type='portfolio' />
            </section>
            <Projects />
            <section id='Contact'>Contact</section>
            <section>Footer</section>
        </>
    );
}

export default App;
