import React from "react"
import Hero from "../../components/Header/Hero/HeroView"
import About from "../../pages/Home/Views/About/AboutView"
import Services from "../../pages/Home/Views/Services/ServicesView"
import References from "../../pages/Home/Views/References/ReferencesView"
import ContactPromo from "../../pages/Home/Views/ContactPromo/ContactPromoView"

export default function Home() {
    return (
        <React.Fragment>
            <Hero />
            <About />
            <Services />
            <References />
            <ContactPromo />
        </React.Fragment>
    )
}