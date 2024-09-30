/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
/* eslint-disable no-const-assign */
import { useState, useEffect, useReducer } from 'react';
import './App.css';
import Header from './Page/header';
import Main from './Page/main';
import Footer from './Page/footer';
import Product from './Page/Product/Product';
import { ProductList } from './Page/Product/Product';


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
  const [mainWindow, setMainWindow] = useState({
    visibility: 'visible',
    opacity: 1,
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
  // Open Profile
  const [profile, setProfile] = useState({
    visibility: 'hidden',
    opacity: 0,
    transform: `scale(${0})`
  })
  //
  // Open Product
  const [product, setProduct] = useState({
    visibility: 'hidden',
    opacity: 0,
    transform: `translateX(${100}%)`
  })
  //

const manageWindows = (state, action) => {
  switch(action.type) {
    case "buttoneStyle1" :
      return{
        visibility: 'hidden' ,
        transform: `translate(${100}%, ${-100}%) scale(${0.1})`,
        opacity : 0,
        transition: `all ${0.7}s ease-in-out ${0}s`
      }
    case "buttoneStyle2" :
      return{
        visibility: 'hidden' ,
        transform: `translate(${100}%, ${-100}%) scale(${0.1})`,
        opacity : 0,
        transition: `all ${0.7}s ease-in-out ${0}s`
      }
    case "buttoneStyle3" :
      return{
        visibility: 'hidden' ,
        transform: `translate(${100}%, ${-100}%) scale(${0.1})`,
        opacity : 0,
        transition: `all ${0.7}s ease-in-out ${0}s`
      }
  default:
      return state
  }
}
const [state, dispatch] = useReducer(manageWindows, {
  visibility: 'visible' ,
  transform: `translate(${0}%, ${0}%) scale(${1})`,
  opacity : 1,
  transition: `all ${0.7}s ease-in-out ${0}s`
})

//view Product
//

//calculation
  const [tottalPrice, setTottalPrice] = useState(0);
  const [placeHolder, setPlaceHolder] = useState(false)

  const calcPrice = (id) => {
    setTottalPrice(tottalPrice + ProductList[id].cost)

  
  setPlaceHolder(true)
}
//

  



  const openProduct = () => { // close Main ---> open Product
    setMainWindow({ 
        visibility: 'hidden',
        opacity: 0,
        transform: `translateX(${-130}%)`
    })
    setProduct({
      visibility: 'visible',
      opacity: 1,
      transform: `translateX(${0}%)`
    })}
  return (
    <div className="App">
      <Header 
        setLogedIn={setLogedIn} setFooter={setFooter} openProduct={openProduct} 
        setOpenMain={setOpenMain} open={open} setOpen={setOpen} openMain={openMain}
        setProduct={setProduct} setMainWindow={setMainWindow}
      />
      
      <Main
        setProfile={setProfile} profile={profile} setProduct={setProduct}  mainWindow={mainWindow}
        setDateUser={setDateUser} dateUsers={dateUsers} setFooter={setFooter}
        LogedIn={LogedIn} setLogedIn={setLogedIn}  open={open} setOpen={setOpen}
        openMain={openMain} setOpenMain={setOpenMain}  setOpenSignUp={setOpenSignUp} openSignUp={openSignUp}/>

      <Product product={product} calcPrice={calcPrice} state={state} dispatch={dispatch} placeHolder={placeHolder}/>

      <Footer footer={footer} mainWindow={mainWindow}/>
    </div>
  );
}
export default App;
