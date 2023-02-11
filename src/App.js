import { GlobalStyle } from "./globalStyles"
import Navbar from "./components/Header/Navbar/NavbarView"
import Hero from "./components/Header/Hero/HeroView"
import About from "./pages/About/AboutView"
import Services from "./pages/Services/ServicesView"

export default function App() {
    return (
        <main>
            <GlobalStyle />
            <Navbar />
            <Hero />
            <About />
            <Services />
        </main>
    )
}