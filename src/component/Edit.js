import React from 'react'
import {Link} from 'react-router-dom'

function Edit() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 text-center mb-5 ">
                            <h3 className="display-4 text-muted">Edit contact</h3>
                </div>
                <div className="col-md-6 mx-auto shadow border p-5">
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="name" className="rounded outline-none form-control"></input>
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="email" className="rounded outline-none form-control mt-3"></input>
                            </div>
                            <div className="form-group">
                                <input type="number" placeholder="name" className="rounded outline-none form-control mt-3"></input>
                            </div>
                            <div className="mt-3 text-center">
                                <div className=" d-inline">
                                <input type="submit" className="btn w-25 me-5  btn-primary" value="Edit"></input>
                                </div>
                                <Link to="/" className="btn  w-25   btn-danger">cancel</Link>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Edit