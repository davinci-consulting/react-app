import { createGlobalStyle } from "styled-components"
 
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Circular:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

@font-face {
    font-family: 'Circular';
    src: url('https://assets.website-files.com/5db0d55a083f4b7cd59d2e42/635c032a87f4e96b1fb2d9dd_CircularXXSub-Book.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Circular';
    src: url('https://assets.website-files.com/5db0d55a083f4b7cd59d2e42/635c0329813fdb2ff79060fe_CircularXXSub-BookItalic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Circular';
    src: url('https://assets.website-files.com/5db0d55a083f4b7cd59d2e42/635c02f6e44c8260a90536c9_CircularXXSub-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Circular';
    src: url('https://assets.website-files.com/5db0d55a083f4b7cd59d2e42/635c02f65b8785db97ed0b66_CircularXXSub-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Circular';
    src: url('https://assets.website-files.com/5db0d55a083f4b7cd59d2e42/635c03821ecef739eca992dd_CircularXXSub-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Circular';
    src: url('https://assets.website-files.com/5db0d55a083f4b7cd59d2e42/635c03820c33ccc7d6550b46_CircularXXSub-BoldItalic.woff') format('woff');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
}

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