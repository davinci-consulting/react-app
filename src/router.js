import Navbar from "./components/Navbar/NavbarView"
import Footer from "./components/Footer/FooterView"
import Home from "./pages/Home/HomeView"
import About from "./pages/About/AboutView"
import Careers from "./pages/Careers/CareersView"
import Contact from "./pages/Contact/ContactView"

const Router = [
    {
        path: '/',
        element: <main><Navbar /><Home /><Footer /></main>
    },
    {
        path: 'about',
        element: <main><Navbar /><About /><Footer /></main>
    },
    {
        path: 'careers',
        element: <main><Navbar /><Careers /><Footer /></main>
    },
    {
        path: 'contact',
        element: <main><Navbar /><Contact /><Footer /></main>
    }
]

export default Router