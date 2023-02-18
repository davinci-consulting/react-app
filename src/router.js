import Navbar from "./components/Header/Navbar/NavbarView"
import Home from "./pages/Home/HomeView"
import Contact from "./pages/Contact/ContactView"
import Footer from "./components/Footer/FooterView"
import About from "./pages/About/AboutView"

const Router = [
    {
        path: '/',
        element: <main><Navbar /><Home /><Footer /></main>
    },
    {
        path: 'contact',
        element: <main><Navbar /><Contact /><Footer /></main>
    },
    {
        path: 'about',
        element: <main><Navbar /><About /><Footer /></main>
    }
]

export default Router