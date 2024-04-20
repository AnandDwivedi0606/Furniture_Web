import React from 'react'
import { Link } from 'react-router-dom'
import Tabs from './Tabs'

export default function Adminhome() {
    return (
        <>
            {/* <!-- Start Hero Section --> */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Admin Home</h1>
                                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                                <p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="/images/couch.png" className="img-fluid" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-3 py-5">
                <Tabs/>
                <div className="row my-5">
                    <div className="col-md-5">
                        <img src="/images/no-image.jpg" alt="" />
                    </div>

                    <div className="col-md-7">
                        <table className='w-100 table table-hover'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>Anand Dwivedi</td>
                                </tr>
                                <tr>
                                    <th>User Name</th>
                                    <td>ananddwivedi0606</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>ananddwivedi0606@gmail.com</td>
                                </tr>
                                <tr>
                                    <th>Phone No.</th>
                                    <td>+918077505134</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}><Link to="/admin/maincategory/update" className='btn btn-primary w-100'>Update Profile</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}
        </>
    )
}
