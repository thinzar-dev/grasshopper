import React from 'react'
import logoImg from '../assets/images/grasshopper.png';

function Nav() {
    return (
        <div className='nav-container'>
            <img className='logo-img' src={logoImg}></img>
            <ul className='menu-container'>
                <li><a>What is Coding</a></li>
                <li><a>Curriculum</a></li>
                <li><a>Glossary</a></li>
            </ul>
            <a>Sign In</a>
        </div>
    )
}

export default Nav