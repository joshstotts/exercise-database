import React from 'react';
import '../App.css';

function Footer() {
    return(
        <div>
            <footer className='navbar fixed-bottom bg-dark'>
                <div id='copyright'>Exercise Database&copy; 2022</div>

                <div><a href="https://www.nike.com/" target='_blank' rel='noreferrer'><img id='nikelogo' src="https://hellograds.com/wp-content/uploads/2020/02/Vis-ID-Nike-Swoosh.jpg" alt="nike logo" /></a></div>

                <div><a href="https://www.bodybuilding.com/" target='_blank' rel='noreferrer'><img id='bblogo' src="https://www.bodybuilding.com/images/icons/bbcom-b-logo-648.png" alt="bodybuilding.com logo" /></a></div>
            </footer>
        </div>
    )
}

export default Footer;