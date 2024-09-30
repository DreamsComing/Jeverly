import React from 'react'
import './footer.css'

function Footer({footer , mainWindow}) {
  return (
    <footer>
        <div style={footer} className='footer_space'>
            <div  className='certified'>
                <div>
                    <h3>
                    Certified
                    </h3>
                    <p>
                        Our brand has legally certified by the authorities.
                        No need to worry because all our product are assured.
                    </p>
                </div>
               
            </div>  
            <div className='fine_gold'>
                <div>
                    <h3>
                        Fine Gold
                    </h3>
                    <p>
                        Rusty jewelry? Say no more!
                        Our products made from fine gold that will last long and absolutely no rust.
                    </p>
                </div>
               
            </div>  
        </div>
    </footer>
  )
}

export default Footer
