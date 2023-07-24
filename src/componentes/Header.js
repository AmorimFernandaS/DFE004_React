import React from "react";
import './Header.css';

//  logo do netflix e usuario
export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt='netflix'/>
                </a>
            </div> 
            <div className="header--user">
                <a href="/">
                    <img src="https://projeto-netflix-chi.vercel.app/img/6759280.png"/>
                </a>
            </div>  
            
    
        </header>
    );
}