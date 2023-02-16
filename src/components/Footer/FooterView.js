import { Facebook, Instagram, LinkedIn, Twitter, Youtube } from "../Icons/IconsView"
import * as Styled from "./FooterStyle"

export default function Footer() {
    return (
        <Styled.Footer>
            <Styled.Container>
                <Styled.Navigation>
                    <Styled.Column>
                        <Styled.Title>Products</Styled.Title>
                        <Styled.MenuList>
                            <Styled.Link>Product Name</Styled.Link>
                            <Styled.Link>Product Name</Styled.Link>
                            <Styled.Link>Product Name</Styled.Link>
                            <Styled.Link>Product Name</Styled.Link>
                            <Styled.Link>Product Name</Styled.Link>
                            <Styled.Link>Product Name</Styled.Link>
                            <Styled.Link>Product Name</Styled.Link>
                            <Styled.Link>Product Name</Styled.Link>
                            <Styled.Link>Product Name</Styled.Link>
                            <Styled.Link>Product Name</Styled.Link>
                            <Styled.Link>Product Name</Styled.Link>
                        </Styled.MenuList>
                    </Styled.Column>
                    <Styled.Column>
                        <Styled.Title>Company</Styled.Title>
                        <Styled.MenuList>
                            <Styled.Link>Product Name</Styled.Link>
                        </Styled.MenuList>
                    </Styled.Column>
                    <Styled.Column>
                        <Styled.Title>Resources</Styled.Title>
                        <Styled.MenuList>
                            <Styled.Link>Product Name</Styled.Link>
                        </Styled.MenuList>
                    </Styled.Column>
                    <Styled.Column>
                        <Styled.Title>Support</Styled.Title>
                        <Styled.MenuList>
                            <Styled.Link>Product Name</Styled.Link>
                        </Styled.MenuList>
                    </Styled.Column>
                </Styled.Navigation>
                <Styled.SiteInfo>
                    <Styled.SocialMedia>
                        <div className="social-media-item">
                            <Facebook width="1.6rem" height="1.6rem" fill="#9A9FA2" />
                        </div>
                        <div className="social-media-item">
                            <Twitter width="1.6rem" height="1.6rem" fill="#9A9FA2" />
                        </div>
                        <div className="social-media-item">
                            <Instagram width="1.6rem" height="1.6rem" fill="#9A9FA2" />
                        </div>
                        <div className="social-media-item">
                            <Youtube width="1.6rem" height="1.6rem" fill="#9A9FA2" />
                        </div>
                        <div className="social-media-item">
                            <LinkedIn width="1.6rem" height="1.6rem" fill="#9A9FA2" />
                        </div>
                    </Styled.SocialMedia>
                    <Styled.Copyrights>
                        © <Styled.BoldText>davinci-consulting</Styled.BoldText>. All Rights Reserved.
                    </Styled.Copyrights>
                </Styled.SiteInfo>
            </Styled.Container>
        </Styled.Footer>
    )
}