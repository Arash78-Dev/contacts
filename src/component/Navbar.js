import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (

           <nav className="navbar navbar-expand-lg bg-primary  py-3">
               <Link to="/" className="navbar-brand ms-5 text-white">
                   Contact App
               </Link>
           </nav>
        
    )
}

export default Navbar
