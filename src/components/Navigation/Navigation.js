import React from 'react';
import './Navigation-style.css';

const Navigation = () => {
    return (
        <nav class="flex justify-between bb b--black-150" style={{justifyContent: 'flex-end'}}>
            <div class="flex-grow pa3 flex items-center">
                <a class="f16 fw6 link dib black dim mr3 mr4-ns" href="#0">About</a>
                <a class="f16 fw6 link dib black dim mr3 mr4-ns" href="#0">Sign In</a>
                <a class="f16 fw6 dib black bg-animate hover-bg-black hover-white no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Sign Up</a>
            </div>
        </nav>
    );
}

export default Navigation;
