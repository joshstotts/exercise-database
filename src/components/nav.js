import React from 'react';
import '../App.css';

function Nav() {
    return(
        <div>
            <nav id='nav' className='navbar sticky-top bg-dark'>
                <div id='appname' className='h1'>Exercise Database</div>

                <div className='dropdown'>
                    <button id='dorpdownMenuButton5' className='btn btn-outline-primary dropdown-toggle' type='button' data-bs-toggle='dropdown'>
                        Exercises
                    </button>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton5'>
                        <li><a className='dropdown-item' href="#">Chest</a></li>
                    </ul>
                </div>

                <div className='dropdown'>
                    <button id='dropdownMenuButton4' className='btn btn-outline-primary dropdown-toggle' type='button' data-bs-toggle='dropdown'>
                        Home Gym
                    </button>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton4'>
                        <li><a className='dropdown-item' href="#">Squat Racks</a></li>
                    </ul>
                </div>

                <div className='dropdown'>
                    <button id='dropdownMenuButton3' className='btn btn-outline-primary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                        Gear
                    </button>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton3'>
                        <li><a className='dropdown-item' href="#">Backpacks</a></li>
                    </ul>
                </div>

                <div className='dropdown'>
                    <button id='dropdownMenuButton2' className='btn btn-outline-primary dropdown-toggle' type='button' data-bs-toggle='dropdown'>
                        Recovery
                    </button>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton2'>
                        <li><a className='dropdown-item' href="#"></a></li>
                    </ul>
                </div>

                <div className='dropdown'>
                    <button id='dropdownMenuButton1' className='btn btn-outline-primary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>Clothing</button>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                        <li><a className='dropdown-item' href='#'>Nike</a></li>
                    </ul>
                </div>
                
                <button id='favorite' className='btn btn-outline-primary'>Favorites</button>
            </nav>
        </div>
    )
}

export default Nav;