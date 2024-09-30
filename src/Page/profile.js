import React from 'react'
import login from '../img/nav_img/login.png'
import './profile.css'

function Profile({ setProfile,profile,name,age,dateUsers}) {
  return (
    <div style={profile} className='Profile'>
        <img src={login}/>
      <h3>{name}</h3>
      <p>{age}</p>
    </div>
  )
}

export default Profile
