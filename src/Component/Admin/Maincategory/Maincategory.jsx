import React, { useEffect, useState } from 'react'
import Tabs from '../Tabs'
import { Link } from 'react-router-dom'

export default function Maincategory() {
    let [data, setData] = useState([])
    async function deleteItem(id) {
        let response = await fetch("http://localhost:8000/maincategory/" + id, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        response = response.json()
        getAPIData()
    }
    async function getAPIData() {
        let response = await fetch("http://localhost:8000/maincategory", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        if (response) {
            setData(response.slice(1))
        }
        else {
            alert("Something Went Wrong")
        }
    }
    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <>
            <div className="container-fluid my-5 py-5">
                <div className="row">
                    <div className="col-md-12">
                        <Tabs />
                    </div>
                </div>
                <h5 className='bg-primary text-light p-2 text-center mt-4'>Main Category<Link to="/admin/maincategory/create"><i className='fa fa-plus float-end text-light'></i></Link> </h5>
                <div className="row">
                    <div className="col-md-12">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index) => {
                                        return <tr key={index}>
                                            <th className='fs-5'>{item.id}</th>
                                            <th className='fs-5'>{item.name}</th>
                                            <th className='fs-5'><Link to={`/admin/maincategory/update/${item.id}`}><i className='fa fa-edit'></i></Link> </th>
                                            <th><button onClick={() => deleteItem(item.id)} className='btn text-danger'><i className='fa fa-trash'></i></button></th>
                                        </tr>
                                    })
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
