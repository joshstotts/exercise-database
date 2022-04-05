import React from 'react';
import '../App.css';

function Footer() {
    return(
        <div>
            <footer className='navbar fixed-bottom bg-dark'>
                <div id='copyright'>Exercise Database&copy; 2022</div>
                <div><img id='bblogo' src="https://www.bodybuilding.com/images/icons/bbcom-b-logo-648.png" alt="bodybuilding.com logo" /></div>
            </footer>
        </div>
    )
}

export default Footer;