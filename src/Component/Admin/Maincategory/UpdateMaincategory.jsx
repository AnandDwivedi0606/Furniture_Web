import React, { useEffect, useState } from 'react'
import Tabs from '../Tabs'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateMaincategory() {
    let [name,setName] = useState("")
    let {id} = useParams()
    let [show, setShow] = useState(false)
    let [message, setMessage] = useState("")
    let navigate = useNavigate("")

    function getInputData(e) {
        setShow(false)
        setName(e.target.value)
    }

    async function postData(e) {
        e.preventDefault()
        if (name.length == 0) {
            setShow(true)
            setMessage("Name Must Required")
        }
        else if (name.length < 3) {
            setShow(true)
            setMessage("Name Must Be Greater Than Or Equal To 3")
        }
        else if (name.length > 25) {
            setShow(true)
            setMessage("Name Must Be Less Than Or Equal To 25")
        }
        else {
            let response = await fetch("http://localhost:8000/maincategory", {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
            response = await response.json()
            var item = response.slice(1).find((x) => x.name === name)
            if (item) {
                setShow(true)
                setMessage("Name Already Exist")
            }
            else {
                let response = await fetch("http://localhost:8000/maincategory/"+ id, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ id:id, name: name })
                })
                response = await response.json()
                if (response) {
                    navigate("/admin/maincategory")
                }
                else {
                    alert("Something Went Wrong")
                }

            }
        }
    }
    useEffect(()=>{
        (async ()=>{
            let response = await fetch("http://localhost:8000/maincategory/" + id,{
                method:"GET",
                headers: {
                    "content-type" : "application/json"
                }
            })
            response = await response.json()
            setName(response.name)
        })()
    },[])
    return (
        <>
            <div className="container-fluid my-5 py-5">
                <div className="row">
                    <div className="col-md-12">
                        <Tabs />
                    </div>
                </div>
                <h5 className='bg-primary text-light p-2 text-center mt-4'>Update Main Category</h5>
                <div className="row">
                    <div className="col-md-9">
                        <form onSubmit={postData}>
                            <label>Name<span className='text-danger'>*</span></label>
                            <input type="text" value={name} onChange={getInputData} name="name" className='form-control mb-3' />
                            {show ? <p className='text-danger'>{message}</p> : ""}
                            <button type="submit" className='btn btn-primary btn-sm w-100'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
