import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    const contact = useSelector((state)=>state)
    const dispatch = useDispatch()
    return (
        <div className=" mt-5 ">
            <div className="row">
                <div className="col-md-12 text-end">
                    <Link to="/add" className="btn btn-outline-primary mb-4 me-4">add Contact</Link>
                </div>
                <div className="col-lg-6 col-md-9 mx-auto text-center shadow bg-dark rounded text-light p-5">
                        <h2 className="text-center pb-1 ">my contact</h2>

                        <table className="table table-striped table-dark text-white">
                            <thead>
                                <tr>
                                    <th scope="col" className="d-none d-md-table-cell">#</th>
                                    <th scope="col">name</th>
                                    <th scope="col" className="d-none d-sm-table-cell">email</th>
                                    <th scope="col">phone number</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>

                            <tbody>
                                {contact.map((item,id)=>{
                                    return (<tr className="py-3" key={id}>
                                        <th  scope="col" className="border-none d-none d-md-table-cell">{id+1}</th>
                                        <td>{item.name}</td>
                                        <td className="d-none d-sm-table-cell">{item.email}</td>
                                        <td>{item.number}</td>
                                        <td>
                                            <Link to={`/edit:${id}`} className="btn btn-sm btn-inline me-2 btn-primary">edit</Link>
                                            <button className="btn btn-sm btn-inline btn-danger" onClick={()=>{dispatch({type:"DEL_CONTACT",payload:id})}} >delete</button>
                                            </td>
                                    </tr> ) 
                                })}
                            </tbody>
                        </table>
                        
                </div>
            </div>            
        </div>
    )
}

export default Home
