import { NavLink, Outlet, useLocation } from "react-router-dom"
import { ServicesData } from "../../data/Services"
import * as Styled from "./ServicesStyle"

export default function Services() {
    const location = useLocation()
    const CurrentPath = location.pathname

    return (
        <Styled.Services>
            <Styled.Container>
                <Outlet />
                <Styled.SectionAllServices>
                    <Styled.GroupTitle>
                        <Styled.Title>Kajabi is everything you need,<br />no plugins or integrations required</Styled.Title>
                        <Styled.Text>Here’s what you get with every single Kajabi plan:</Styled.Text>
                    </Styled.GroupTitle>
                    <Styled.ServicesWrapper>
                        {ServicesData.map((service, index) => {
                            return <NavLink key={index} to={"/services" + service.path} className={`services-item ${CurrentPath === "/services" + service.path ? "active-card" : ""} `}>
                                <h3 className="services-item-title">{service.title}</h3>
                                <span className="services-item-text">{service.text}</span>
                                <span className="services-item-button">{ CurrentPath === "/services" + service.path ? "Viewing" : "Explore →" }</span>
                            </NavLink>
                        })}
                    </Styled.ServicesWrapper>
                </Styled.SectionAllServices>
            </Styled.Container>
        </Styled.Services>
    )
}