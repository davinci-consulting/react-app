import { createGlobalStyle } from "styled-components"
 
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

html, body {
    height: 100%;
}

img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
}

p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
`