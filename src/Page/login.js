import React, {useState, useEffect} from 'react'
import './login.css'

function Login({
  setOpenMain,
  setFooter, 
  setOpen, 
  setLogedIn, 
  dateUsers, 
  LogedIn, 
  signUp 
}) {





//Date
const [inputIssue, setInputIssue] = useState({
  boxShadow: `inset ${0} ${0} ${10}px white `
})


const [name, setName] = useState('')
const[password, setPassword] = useState('')
const check = dateUsers.find(dateUser => dateUser.name === name && dateUser.password === password)
const checkName = dateUsers.find(dateUser => dateUser.name === name)
const checkPassword = dateUsers.find(dateUser => dateUser.password === password)
const closeLogIn = () => {
    if(check) {
        setOpen({
          visibility: 'visible',
          opacity: 1
        })
        setOpenMain({
          visibility: 'visible',
          opacity: 1
        })
        setFooter({
          visibility: 'visible',
          opacity: 1,
        })
        setLogedIn({
          visibility: 'hidden',
          opacity: 0,
          transform: `scale(${0})`
      })
      setLogedIn({
        opacity: 0,
        transform: `scale(${0})`
    })
    } else {
      setInputIssue({
         boxShadow: `inset ${0} ${0} ${3}px gold `
      }) 
    }

    if(!checkName && !checkPassword) {
      alert('user undefined')
    } else if(!checkName) {
      alert('wrong username')
    } else if(!checkPassword) {
      alert('wrong password')
    }
  }

//


  return (
    <React.Fragment>

      <div >
      <div style={LogedIn} class="login-form">
        <h2>Login</h2>
        <form>
            <div class="form-group">
                <label for="username">Username</label>
                <input style={inputIssue} onChange={(e) => setName(e.target.value)} type="text" id="username" name="username" required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input style={inputIssue} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required/>
            </div>
        </form>
        <div className='buttone'>
          <button className='logIn' onClick={() => closeLogIn()}>Login</button>
          <button className='signUp' onClick={() =>  signUp()}>Sign Up</button>
        </div>
        
    </div>
    </div>
    </React.Fragment>
    
  )
}
export default Login
