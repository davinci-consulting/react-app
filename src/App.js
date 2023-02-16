import { GlobalStyle } from "./globalStyles"
import Navbar from "./components/Header/Navbar/NavbarView"
import Hero from "./components/Header/Hero/HeroView"
import About from "./pages/About/AboutView"
import Services from "./pages/Services/ServicesView"
import References from "./pages/References/ReferencesView"
import Contact from "./pages/Contact/ContactView"

export default function App() {
    return (
        <main>
            <GlobalStyle />
            <Navbar />
            <Hero />
            <About />
            <Services />
            <References />
            <Contact />
        </main>
    )
}