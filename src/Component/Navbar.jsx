import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            {/* <!-- Start Header/Navigation --> */}
            <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark fixed-top" arial-label="Furni navigation bar">

                <div className="container">
                    <NavLink className="navbar-brand" to="">Furniture</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="">Home</NavLink>
                            </li>
                            <li><NavLink className="nav-link" to="shop">Shop</NavLink></li>
                            <li><NavLink className="nav-link" to="aboutus">About us</NavLink></li>
                            <li><NavLink className="nav-link" to="services">Services</NavLink></li>
                            <li><NavLink className="nav-link" to="blog">Blog</NavLink></li>
                            <li><NavLink className="nav-link" to="contactus">Contact us</NavLink></li>
                            <li><NavLink className="nav-link" to="edit">Account Edit</NavLink></li>
                            <li><NavLink className="nav-link" to="admin">Admin</NavLink></li>
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li><NavLink className="nav-link" to="profile"><img src="/images/user.svg" alt='' /></NavLink></li>
                            <li><NavLink className="nav-link" to="cart"><img src="/images/cart.svg" alt='' /></NavLink></li>
                        </ul>
                    </div>
                </div>

            </nav>
            {/* <!-- End Header/Navigation --> */}
        </>
    )
}
