import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';
import busket from '../img/nav_img/busket.png'
import login from '../img/nav_img/login.png'
import searching from '../img/nav_img/serching.png'




function Header({openProduct,setLogedIn,setFooter,setOpenMain,open,setOpen, setProduct,setMainWindow}) {
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
        setProduct({
            visibility: 'hidden',
            opacity: 0,
            transform: `translateX(${130}%)`
        })
        setMainWindow({
            visibility: 'visible',
            opacity: 1,
            transform: `translateX(${0}%)`
        })

    }

  return (
    <header>
        <div className='logo'>
          <button onClick={() => closeMain()}>Shodwe</button>
        </div>
            <nav style={open} className='links'>
                <button>Home</button>
                <button onClick={() => openProduct()}>Product</button>
                <button>About Us</button>
                <button>Testmonial</button>
            </nav>
        

        <div  style={open} className='other'>
            <div className='wrapper'>
             <input className='searching'/>
            </div>
            <a><img src={busket}/></a>
            <button><img src={login}/></button>
        </div>
    </header>
  )
}

export default Header
