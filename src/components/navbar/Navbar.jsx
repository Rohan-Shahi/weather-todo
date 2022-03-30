import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../../images/wicc.png'
import { Link } from 'react-router-dom';


{/* <script>
const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
modeText.innerText = "Light mode";
}else{
modeText.innerText = "Dark mode";

}
});
</script> */}

export default function Navbar() {
 
    const [isClose,setIsClose] = useState(false);

    const [isDark,setIsDark] = useState(false);

  return (
    <nav className={`sidebar ${ isClose ? 'close' : null }`}>
    <header>
        <div className="image-text">
            <span className="image">
             <img src={logo} alt="WICC"/>
            </span>

            <div className="text logo-text">
                <span className="name">WICC</span>
                <span className="profession">Web developer</span>
            </div>
        </div>

        <i className='bx bx-chevron-right toggle' onClick={() => {setIsClose(!isClose) }}></i>
    </header>

    <div className="menu-bar">
        <div className="menu">

            <ul className="menu-links">
                <li className="nav-link">
                    <Link to='/'>
                        <i className='bx bx-cloud-lightning icon' ></i>
                        <span className="text nav-text">Weather</span>
                    </Link>
                </li>

                <li className="nav-link">
                    <Link to='/todo'>
                        <i className='bx bx-notepad icon' ></i>
                        <span className="text nav-text">Manage TODO</span>
                    </Link>
                </li>


            </ul>
        </div>

        <div className="bottom-content">

            <li className="mode">
                <div className="sun-moon">
                    <i className='bx bx-moon icon moon'></i>
                    <i className='bx bx-sun icon sun'></i>
                </div>
                <span className="mode-text text">Dark mode</span>

                <div className="toggle-switch">
                    <span className="switch"></span>
                </div>
            </li>
            
        </div>
    </div>

</nav>
  )
}
