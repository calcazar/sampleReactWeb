import React from 'react'
import { Link } from "@reach/router"

export default function NavigationComponent(props) {

        return (
            <nav className="todoResults">
               <Link to="/">See App With Hooks</Link>
               <Link to="/withRedux">See App Without Hooks</Link>
            </nav>
        )
    }
