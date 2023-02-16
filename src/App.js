import { useRoutes, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Router from "./router"

export default function App() {
    const location = useLocation()

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
                {useRoutes(Router)}
            </CSSTransition>
        </TransitionGroup>
    )
}