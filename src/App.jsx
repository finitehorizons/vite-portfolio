import "./App.scss";
import Hero from "./components/Hero/Hero";

import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <section id="Home">
                <Navbar />
                <Hero />
            </section>
            <section id="Services">Parallax</section>
            <section>Services</section>
            <section id="Portfolio">Project1</section>
            <section>Project2</section>
            <section>Project3</section>
            <section id="Contact">Contact</section>
            <section>Footer</section>
        </>
    );
}

export default App;
