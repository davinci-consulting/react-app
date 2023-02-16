import { NavLink } from "react-router-dom"
import { ArrowRightLine } from "../../../../components/Icons/IconsView"
import * as Styled from "./ContactPromoStyle"

export default function ContactPromo() {
    return (
        <Styled.ContactPromo>
            <Styled.Container>
                <Styled.Title>
                    Are you ready to start?
                    <br />
                    Be confident in the cloud with Oracle Consulting.
                </Styled.Title>
                <NavLink className="button-link" to="contact">Contact us <ArrowRightLine width="1.5rem" height="1.5rem" fill="none" stroke="#FFFFFF" strokeWidth="2px" /></NavLink>
            </Styled.Container>
        </Styled.ContactPromo>
    )
}