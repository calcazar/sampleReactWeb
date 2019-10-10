import React from 'react'
import { Link } from "@reach/router"
import "./index.scss"

export default function NavigationComponent(props) {

        return (
            <nav className="nav">
               <Link to="/">See App With Hooks</Link>
               <Link to="/withRedux">See App Without Hooks</Link>
               <Link to="/classic">Classic</Link>
            </nav>
        )
    }
