import Navbar from "./components/Header/Navbar/NavbarView"
import Home from "./pages/Home/HomeView"
import Contact from "./pages/Contact/ContactView"
import Footer from "./components/Footer/FooterView"

const Router = [
    {
        path: '/',
        element: <main><Navbar /><Home /><Footer /></main>
    },
    {
        path: 'contact',
        element: <main><Navbar /><Contact /><Footer /></main>
    }
]

export default Router