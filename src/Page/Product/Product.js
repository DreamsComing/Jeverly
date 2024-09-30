import React, {useState} from 'react'
import './Product.css'
import ring from '../Product/ring.png'


export const ProductList = [
    {
        name: 'white Ring',
        carat: '0.4',
        cost: 730,
        id: 1
    },
    {
        name: 'pink Ring',
        carat: '0.4',
        cost: 430,
        id: 2
    },
    {
        name: 'gold ring',
        carat: '0.4',
        cost: 330,
        id:3
    }
]



function Product({product,calcPrice,state,dispatch,placeHolder}) {



  return (
    <div style={product} className='product'>
        <div className='product-wrapper'>

            <button  onClick={dispatch({type:"buttoneStyle1"})} className='item item-1'>
                <img src={ring}/>
                <h3>Ring</h3>
                <p>
                    White Gold alloy , center diamond 
                    <ul>
                        <li> Carat: {ProductList[0].carat}</li>
                        <li>  Price: {ProductList[0].cost}</li>
                    </ul>
                   
                  
                </p>
            </button>
            {placeHolder && (
                           <button onClick={() => calcPrice(0)} className='item item-1'>
                           <img src={ring}/>
                           <h3>Ring</h3>
                           <p>
                               White Gold alloy , center diamond 
                               <ul>
                                   <li> Carat: {ProductList[0].carat}</li>
                                   <li>  Price: {ProductList[0].cost}</li>
                               </ul>
                              
                             
                           </p>
                       </button>
            )}

            <button onClick={() => calcPrice(1)}  className='item item-2'>
            <img src={ring}/>
                <h3>Ring</h3>
                <p>
                    White Gold alloy , center diamond 
                    <ul>
                        <li> Carat: {ProductList[0].carat}</li>
                        <li>  Price: {ProductList[1].cost}</li>
                    </ul>
                   
                  
                </p>
            </button>
            {placeHolder && (
                           <button onClick={() => calcPrice(0)} className='item item-1'>
                           <img src={ring}/>
                           <h3>Ring</h3>
                           <p>
                               White Gold alloy , center diamond 
                               <ul>
                                   <li> Carat: {ProductList[0].carat}</li>
                                   <li>  Price: {ProductList[0].cost}</li>
                               </ul>
                              
                             
                           </p>
                       </button>
            )}

            <button onClick={() => calcPrice(2)} className='item item-3'>
            <img src={ring}/>
                <h3>Ring</h3>
                <p>
                    White Gold alloy , center diamond 
                    <ul>
                        <li> Carat: {ProductList[0].carat}</li>
                        <li>  Price: {ProductList[2].cost}</li>
                    </ul>
                   
                  
                </p>
            </button>
            {placeHolder && (
                           <button onClick={() => calcPrice(0)} className='item item-1'>
                           <img src={ring}/>
                           <h3>Ring</h3>
                           <p>
                               White Gold alloy , center diamond 
                               <ul>
                                   <li> Carat: {ProductList[0].carat}</li>
                                   <li>  Price: {ProductList[0].cost}</li>
                               </ul>
                              
                             
                           </p>
                       </button>
            )}
        </div>
    </div>
  )
}

export default Product
