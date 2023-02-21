import React from "react"
import Hero from "./Views/Hero/HeroView"
import AboutPromo from "./Views/AboutPromo/AboutPromoView"
import Services from "../../pages/Home/Views/Services/ServicesView"
import References from "../../pages/Home/Views/References/ReferencesView"
import ContactPromo from "./Views/ContactPromo/ContactPromoView"

export default function Home() {
    return (
        <React.Fragment>
            <Hero />
            <AboutPromo />
            <Services />
            <References />
            <ContactPromo />
        </React.Fragment>
    )
}