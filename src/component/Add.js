import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Add() {
    const contact = useSelector(state=>state)
    console.log(contact);
    // const dispatch= useDispatch();

    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [num,setnum]=useState("")

    const submithandler=(e)=>{
        e.preventDefault();

        // const checkemail = contact.find(
        //     (item)=>item.email===email && email
        //     )
        // const checknum = contact.find(
        //         (item)=>item.number===parseInt(num) && num)
        // if (checkemail) {
        //     toast.error('this email is already existed')
        // }
        // if (checknum) {
        //     toast.error('this number is already existed')
        // }
        if (!name || !email || !num) {
            toast.warning('please enter the field')
        }
        // const data={
        //     id:contact.length,
        //     name:name,
        //     email:email,
        //     number:num,
        // }
        // console.log(data);

        // if (name || email || num || !checknum || !checkemail) {
        //     toast.success('contact successfully added');
            
        //     dispatch({type:"ADD_CONTACT",payload:data})

        // }
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 text-center mb-5 ">
                            <h3 className="display-4 text-muted">Add contact</h3>
                </div>
                <div className="col-md-6 mx-auto shadow border p-5">
                        <form onSubmit={submithandler}>
                            <div className="form-group">
                                <input type="text" placeholder="name" className="rounded outline-none form-control"
                                value={name} onChange={(e)=>{setname(e.target.value)}}
                                ></input>
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="email" className="rounded outline-none form-control mt-3"
                                value={email} onChange={(e)=>{setemail(e.target.value)}}
                                ></input>
                            </div>
                            <div className="form-group">
                                <input type="number" placeholder="name" className="rounded outline-none form-control mt-3"
                                value={num} onChange={(e)=>{setnum(e.target.value)}}
                                ></input>
                            </div>
                            <div className="form-group">
                            <input type="submit" className="btn btn-block w-100 btn-primary mt-3" value="add"></input>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Add
