import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    // const contact = useSelector(state => state)
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 text-end">
                    <Link to="/add" className="btn btn-outline-primary">add Contact</Link>
                </div>
                <div className="col-md-6 mx-auto text-center border p-5">
                        <h2 className="text-center">my contact</h2>
                        
                </div>
            </div>            
        </div>
    )
}

export default Home
