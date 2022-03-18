import React from 'react';
import { BiLogIn } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm ">
            <div className="container ">
                <Link className="navbar-brand fw-bold fs-4" to="/">Shop UI COLECTION</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-3 mb-lg-0 ">
                       
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        
                    </ul>
                   <div className="buttons">
                       <button className=" btn btn-outline-dark me-2"><BiLogIn/> Login</button>
                       <button className=" btn btn-outline-dark me-2"><FiUserPlus/> Register</button>
                       <button className=" btn btn-outline-dark me-0"><AiOutlineShoppingCart/> Cart (0)</button>
                   </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar