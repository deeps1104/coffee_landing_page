import React from 'react'
import Nav from './Nav'
import Navbar from './Navbar'

const About = () => {
  return (
    <div>
      <Nav/>
      <div className='row mt-3'>
        <div className='col-lg-5 col-sm-5 col-md-5'>
          <hr className='line' />
        </div>
        <div className='col-lg-2 col-sm-2 col-md-2'>
          <h1 style={{fontFamily:"museo-slab,serif",fontWeight:"bold"}}>About us</h1>
        </div>
        <div className='col-lg-5 col-sm-5 col-md-5'>
          <hr className='line' />
        </div>
        <div>
          <p className='px-5 mt-3' style={{ textAlign: "left", fontSize: "x-large", color: "#333333", alignItems: "center",fontFamily:"museo-slab,serif" }}>

            Taste and See Coffee Shop and Gallery offers a unique coffee house environment unlike any other
            in Macon. We are not only a place to drop in and get your morning cup of coffee
            (although you are more than welcome to do that), we are a place where you can
            sit down and enjoy that tailor-made cup of coffee. If you need to work,
            we have a seating area created specifically for you. If you need to rest,
            we have a soft-seating area in front of a stone fire place that is perfect for
            your weary mind and body. We offer a delicious variety of coffee from Safehouse
            Coffee made by our professionally trained baristas. We have everything from classic
            coffee to our house made specialty beverages.  All of our sauces & syrups are made in-house
            with all natural ingredients (no chemicals or preservatives) ensuring you the highest quality in taste & health.
            You can complete your coffee with one of our delicious sweet treats made by our very own baker. We look forward to
            serving you at Taste & See Coffee Shop and Gallery!
          </p>
        </div>
        <div>
          <h2 style={{textAlign:"left",paddingLeft:"50px", fontWeight:"300",color:"#25245d",fontFamily:"museo-slab,serif"}}>Our Work With Smallholder Coffee Farmers</h2>
          <p  style={{textAlign:"left" ,paddingLeft:"50px",fontWeight:"400",color:"#2b2b2b",fontSize:"x-large",fontFamily:"museo-slab,serif",alignItems:"center"}}>
            One of the best ways to help coffee farmers increase their incomes, in many cases, is to work with them to enhance the quality and yields of their coffee while promoting value chain improvements that enable farmers to earn a larger share of export prices.
            TechnoServe’s unique approach can also address the farm size problem, helping farmers fund education that enables their children to attain livelihoods off the farm if desired, allowing coffee farms to become larger and more profitable in the future.
          </p>
          <h3 style={{color:"#25245d",fontFamily:"museo-slab,serif",fontWeight:"400",paddingLeft:"50px"}}>Supporting Smallholder Coffee Farmers Promotes Sustainability Worldwide
          </h3>
          <p style={{textAlign:"left" ,paddingLeft:"50px",color:"#2b2b2b",fontSize:"x-large",fontFamily:"museo-slab,serif",alignItems:"center",fontWeight:"300"}} >
          TechnoServe is applying these solutions to help build a sustainable global coffee industry that can lift millions of farming families out of poverty. For five decades, we have developed a set of market-based solutions to meet this challenge and applied them in communities across Africa and Latin America.
          </p>
        </div>

      </div>



    </div>




  )
}

export default About