import React from 'react';
import '../App.css';

function Nav() {
    return(
        <div>
            <nav id='nav' className='navbar sticky-top bg-dark'>
                <div id='appname' className='h1'>Exercise Database</div>
                <div id='favorite' className='btn btn-outline-success'>Favorites</div>
            </nav>
        </div>
    )
}

export default Nav;