import React from "react"
import { Hero } from "./Views/Hero/HeroView"
import { AboutPromo } from "./Views/AboutPromo/AboutPromoView"
import { Services } from "./Views/Services/ServicesView"
import { References } from "./Views/References/ReferencesView"
import { ContactPromo } from "./Views/ContactPromo/ContactPromoView"

export const Home = () => {
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