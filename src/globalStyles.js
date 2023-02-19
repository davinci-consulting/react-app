import { createGlobalStyle } from "styled-components"
 
export const GlobalStyle = createGlobalStyle`
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

.fade-enter {
    opacity: 0;
    transform: translate(0, 0);
    z-index: 10;
}

.fade-enter {
    &.fade-enter-active {
        opacity: 1;
        transform: translate(0, 0);
        transition: opacity 250ms ease-out, transform 300ms ease;
    }
}

.fade-exit {
    opacity: 1;
    transform: translate(0, 0);
}

.fade-exit {
    display: none;

    &.fade-exit-active {
        opacity: 0;
        transform: translate(0, 0);
        transition: opacity 250ms ease-out, transform 300ms ease;
    }
}
`