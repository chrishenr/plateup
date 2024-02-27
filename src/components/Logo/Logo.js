import React from 'react';
import plateicon from './plate-icon.png';
import './Logo-style.css';

const Logo = () => {
    return (
        <div ma4 mt0>
            <div className='pa3'>
                <img style={{paddingTop: '10px'}} alt='logo' src={plateicon}/>
            </div>
        </div>
    );
}

export default Logo;
