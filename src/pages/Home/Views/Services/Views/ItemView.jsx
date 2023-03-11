import { Link } from "react-router-dom"
import { ServicesData } from "../../../../../data/Services"
import * as Styled from "../ServicesStyle"

export const Item = () => {
    return (
        <>
            {ServicesData.map((service, index) => {
                return <Link key={index} to={`/services${service.path}`}>
                    <Styled.ItemContainer style={{ backgroundImage: `url(${service.image})` }}>
                        <div className="text-content-wrapper">
                            <div className="text-content-title">{service.title}</div>
                            <div className="text-content-text">{service.text}</div>
                        </div>
                    </Styled.ItemContainer>
                </Link> 
            })}
        </>
    )
}