import { useState } from 'react';
import './App.css';
import Header from './Page/header';
import Main from './Page/main';
import Footer from './Page/footer';

function App() {
  const [dateUsers, setDateUser] = useState([
    {
      name: 'Maks',
      age: 19,
      gender: 'male',
      password: '123'
    },
    {
      name: 'Octivia',
      age: 21,
      gender: 'female',
      password: '456'
    },
    {
      name: 'Jordan',
      age: 18,
      gender: 'male',
      password: '789'
    },
    {
      name: 'Nazar',
      age: 29,
      gender: 'male',
      password: '012'
    },
    {
      name: 'Oleg',
      age: 37,
      gender: 'male',
      password: '345'
    },
  ]);
  // openHeader
  const [open, setOpen] = useState({
    visibility: 'hidden',
    opacity: 0,
    transform: `translateY(${-130}%)`
  })
  //
  // OpenMain
  const [openMain, setOpenMain] = useState({
    visibility: 'hidden',
    opacity: 0,
    transform: `translateX(${-130}%)`
  })
  //
  // OpenFooter
  const [footer,setFooter] = useState({
    visibility: 'hidden',
    opacity: 0,
    transform: `translatey(${130}%)`
  })
  //
  // signUp Open
  const [openSignUp, setOpenSignUp] = useState({
    visibility: 'hidden',
    opacity: 0,
    transform: `scale(${0})`
  })
  //
  // logIn Close
  const [LogedIn, setLogedIn] = useState({
    visibility: 'visible',
    opacity: 1,
    transform: `scale(${1})`
  })
  //
  return (
    <div className="App">
      <Header  setLogedIn={setLogedIn} setFooter={setFooter} setOpenMain={setOpenMain} open={open} setOpen={setOpen} openMain={openMain}/>
      <Main
        setDateUser={setDateUser} dateUsers={dateUsers} setFooter={setFooter}
        LogedIn={LogedIn} setLogedIn={setLogedIn}  open={open} setOpen={setOpen}
        openMain={openMain} setOpenMain={setOpenMain}  setOpenSignUp={setOpenSignUp} openSignUp={openSignUp}/>
      <Footer footer={footer} />
    </div>
  );
}

export default App;
