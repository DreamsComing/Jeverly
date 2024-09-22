import React, {useState} from 'react'
import './main.css'
import Login from './login'
import ring from '../img/Main_img/ring.png'
import SignUp from './SignUp'


function Main({setOpenSignUp,openSignUp,setDateUser,dateUsers,setFooter, setOpen, openMain, LogedIn,setLogedIn, setOpenMain}) {
    const signUp = () => {
        setOpenSignUp({
            visibility: 'visible',
            opacity: 1,
            transform: `scale(${1})`
        })
        setLogedIn({
            visibility: 'hidden',
            opacity: 0,
            transform: `scale(${0})`
        })
    }
   

  return (
    <main>
        <div className='login'>
            <SignUp setLogedIn={setLogedIn} setCloseSignUp={setOpenSignUp} closeSignUp={openSignUp} setDateUser={setDateUser}/>
            <Login setOpenMain={setOpenMain} setFooter={setFooter} setOpen={setOpen} setLogedIn={setLogedIn} signUp={signUp} dateUsers={dateUsers} LogedIn={LogedIn}/>
        </div>
        <div className='wrapper_main'>

        <div className='main_text'>
            <div style={openMain} className='tittle'>
             <h1>Find Beauty Within Yourself</h1>
            </div>
            <div style={openMain} className='text'>
                <p>
                Your beauty can not be devined only by external appearance.
                Inner beauty plays a big part for it. But, there is no way you do not want to enhance your external beauty.
                So, here we are offering you the best thing you could ever get.
                </p>
            </div>
            <div style={openMain} className='buttones'>
                <button className='Oreder'>Oreder now</button>
                <button className='Consultation'>Consultation</button>
            </div>
        </div>
     
        <div className='img_block'>
            <img/>
            <img className='ring' src={ring}/>
        </div>
        </div>

    </main>
  )
}

export default Main
