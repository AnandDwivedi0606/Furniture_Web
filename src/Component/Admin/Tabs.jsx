import React from 'react'
import { Link } from 'react-router-dom'

export default function Tabs() {
    return (
        <>
            <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                    <Link className="nav-link text-primary fw-bolder" to="/admin/users">Users</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-primary fw-bolder" to="/admin/maincategory">Main Category</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-primary fw-bolder" to="/admin/subcategory">Sub Category</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-primary fw-bolder" to="/admin/brand">Brand</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-primary fw-bolder" to="/admin/products">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-primary fw-bolder" to="/admin/testimonial">Testimonial</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-primary fw-bolder" to="/admin/newsletter">News Letter</Link>
                </li>

            </ul>
        </>
    )
}
