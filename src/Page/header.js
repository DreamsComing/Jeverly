import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';
import busket from '../img/nav_img/busket.png'
import login from '../img/nav_img/login.png'
import searching from '../img/nav_img/serching.png'




function Header({setLogedIn,setFooter,setOpenMain,open,setOpen}) {
    const closeMain = () => {
        setLogedIn({
            visibility: 'visible',
            opacity: 1,
            transform: `scale(${1})`
        })
        setFooter({
            visibility: 'hidden',
            opacity: 0,
            transform: `translatey(${130}%)`
        })
        setOpenMain({
            visibility: 'hidden',
            opacity: 0,
            transform: `translateX(${-130}%)`
        })
        setOpen({
            visibility: 'hidden',
            opacity: 0,
            transform: `translatey(${-130}%)`
        })

    }
  return (
    <header>
        <div className='logo'>
          <button onClick={() => closeMain()}>Shodwe</button>
        </div>
        {open &&
                <nav style={open} className='links'>
                <a>Home</a>
                <a>Product</a>
                <a>About Us</a>
                <a>Testmonial</a>
            </nav>
        }

        <div  style={open} className='other'>
            <div className='wrapper'>
             <input className='searching'/>
            </div>
            <a><img src={busket}/></a>
            <a><img src={login}/></a>
        </div>
    </header>
  )
}

export default Header
