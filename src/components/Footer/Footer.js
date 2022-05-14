import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Footer.css'
const Footer = () => {
    return(
        <div className="footer">
            <div className="name">
            © 2022 | {''}
                <a href = 'https://www.linkedin.com/in/deepakmhn/' target = ''>
                     Deepak Mohan 
                </a>
                  {' '}| All Rights Reserved 
            </div>

        </div>
    )
}

export default Footer