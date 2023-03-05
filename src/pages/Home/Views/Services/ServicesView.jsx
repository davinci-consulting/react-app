import { Suspense } from "react"
import { NavLink } from "react-router-dom"
import { ServicesData } from "../../../../data/Services"
import * as Styled from "./ServicesStyle"

export const Services = () => {
    return (
        <Styled.Services>
            <Styled.Container>
                <Styled.TitleGroup>
                     <Styled.BlackTitle>Services</Styled.BlackTitle>
                </Styled.TitleGroup>
                <Styled.ItemList>
                    {ServicesData.map((service, index) => {
                        return <Suspense fallback={<Styled.ItemContainer notLoaded />}>
                            <NavLink to={`/services${service.path}`}>
                                <Styled.ItemContainer key={index} style={{ backgroundImage: `url(${service.image})` }}>
                                    <div className="text-content-wrapper">
                                        <div className="text-content-title">{service.title}</div>
                                        <div className="text-content-text">{service.text}</div>
                                    </div>
                                </Styled.ItemContainer>
                            </NavLink>
                        </Suspense>
                    })}
                </Styled.ItemList>
            </Styled.Container>
        </Styled.Services>
    )
}