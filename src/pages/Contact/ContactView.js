import { useState } from "react"
import { LocationsData } from "../../data/Locations"
import * as Styled from "./ContactStyle"

export default function Contact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')

    const enable = firstName && lastName && mail && message

    return (
        <Styled.Contact id="contact">
            <Styled.Container>
                <Styled.Form>
                    <Styled.FormContent>
                        <Styled.TitleGroup>
                            <Styled.Title>Contact us</Styled.Title>
                            <Styled.Subtitle>Our friendly team would love to hear from you!</Styled.Subtitle>
                        </Styled.TitleGroup>
                        <Styled.MultipleItem>
                            <Styled.FormGroup>
                                <Styled.Label for="firstName">First name</Styled.Label>
                                <Styled.Input required id="firstName" type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                            </Styled.FormGroup>
                            <Styled.FormGroup>
                                <Styled.Label for="lastName">Last name</Styled.Label>
                                <Styled.Input required id="lastName" type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                            </Styled.FormGroup>
                        </Styled.MultipleItem>
                        <Styled.FormGroup>
                            <Styled.Label for="mail">Email</Styled.Label>
                            <Styled.Input required id="mail" type="mail" placeholder="example@davinci-consulting.net" value={mail} onChange={e => setMail(e.target.value)} />
                        </Styled.FormGroup>
                        <Styled.FormGroup>
                            <Styled.Label for="message">Message</Styled.Label>
                            <Styled.Textarea required id="message" value={message} onChange={e => setMessage(e.target.value)} />
                        </Styled.FormGroup>
                        <Styled.Button disabled={!enable}>Send message</Styled.Button>
                    </Styled.FormContent>
                    <Styled.MapContent>
                        <Styled.Map></Styled.Map>
                        <Styled.MapMask />
                    </Styled.MapContent>
                </Styled.Form>
                <Styled.LocationsContent>
                    <Styled.Column>
                        <Styled.LocationsSubtitle>Our locations</Styled.LocationsSubtitle>
                        <Styled.LocationsTitle>Visit our stores</Styled.LocationsTitle>
                        <Styled.LocationsText>Find us these locations.</Styled.LocationsText>
                    </Styled.Column>
                    <Styled.Locations>
                        {LocationsData.map((location, index) => {
                        return <Styled.Item key={index}>
                            <Styled.City>{location.city}</Styled.City>
                            <Styled.Address>{location.address}</Styled.Address>
                        </Styled.Item>
                        })}
                    </Styled.Locations>
                </Styled.LocationsContent>
            </Styled.Container>
        </Styled.Contact>
    )
}