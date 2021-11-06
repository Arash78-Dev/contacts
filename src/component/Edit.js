import React ,{useState , useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link , useParams , useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

function Edit() {
    const contact = useSelector(state=>state)
    const dispatch = useDispatch()
    const {id} = useParams()
    const idi= parseInt(id.substr(1,1))
    

    let currentcontact 
     contact.map((item)=>{
        if(item.id===idi){
            currentcontact=item;
        }
        return idi
    })
    
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [num,setnum]=useState("")


    useEffect(()=>{
        if (currentcontact) {
            setname(currentcontact.name)
            setemail(currentcontact.email)
            setnum(currentcontact.number)

        }
    },[currentcontact])
    
    let usenav=useNavigate();

    const Edithndl=(e)=>{
        e.preventDefault();

        if (!name || !email || !num) {
            toast.warning('please enter the field')
        }
        if (num.length!==11 || num.substr(0,1)!=='0') {
            toast.warning('your number is not valid')
        }
        const checkemail = contact.find(
            (item)=>item.email===email && item.id!==idi
            )
        const checknum = contact.find(
                (item)=>item.number===num && item.id!==idi)
        if (checkemail) {
            toast.error('this email is already existed')
        }
        if (checknum) {
            toast.error('this number is already existed')
        }
        
        // && num.length===11 && num.substr(0,1)==='0'
           
            
            if (name && email && num && !checknum && !checkemail ) {
                const data={
                    id:idi,
                    name:name,
                    email:email,
                    number:num,
                }
                toast.success('contact successfully edited'); 
                dispatch({type:'EDIT_CONTACT' , payload:data})
                usenav('/')
              
            }
            
}




    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 text-center mb-5 ">
                            <h3 className="display-4 text-muted">Edit contact</h3>
                </div>
                <div className="col-md-6 mx-auto shadow border p-5">
                        <form onSubmit={Edithndl}>
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