import React from 'react'
import CoffeeImg from '../assets/coffee-img.jpg'
import CoffeeBean from '../assets/coffee-beans.jpg'

export default function Home() {
  return (
    <div>
      <div className='container banner-containt'>
        <div className='row '>
          <div className='col-6' style={{ display: "flex", alignItems: "center", textAlign: "left", paddingRight: "100px" }}>
            <div>
              <h1 className='main' >An Amazing Coffee Blend</h1>
              <p>Coffee can help people feel less tired, and increase energy levels. thats because it contains a stimulated caffine the most commonly. consumed psychoactive substance in the world
                Coffee shop is your go to neighborhood joint, any time, any day join us for special coffee
              </p>
              <div className='btns'>
                <button type="button" className='btn1'>Sign in</button>
                <button type="button" className='btn1' >Buy Coffee</button>
              </div>

            </div>
          </div>
          <div className='col-6 p-5'>
            <img className='rounded mx-auto' src={CoffeeImg} alt="CoffeePoster" height={400} />
          </div>
        </div>
        <div className='row' >
          <div className='col-6'>
            <img className='rounded mx-auto' src={CoffeeBean} alt="CoffePoster" height={400} width="100%" />
          </div>
          <div className='col-6' style={{ textAlign: "left", display: "flex", alignItems: "center", paddingLeft: "50px" }}>
            <div >

              <h1 className='main2'>Single origin Coffee <br /> Imported world wide</h1>
              <p className='mt-3'>Its a long established fact that a reader will be distarcted by the readable content of page
                when looking at its page layout. The point of using loren ispum a it has a more or less normal distribution
                <div className='btn-main pt-4'>
                  <button className='btn2'>Read More</button>

                </div>
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
