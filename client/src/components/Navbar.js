import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            &nbsp;
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <Link class="nav-link" to={`/home`}> <h3>Home</h3> </Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to={`/create`}> <h3>Create</h3> </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

{/* <li>

</li>
<li>

</li>   */}