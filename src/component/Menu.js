import React from 'react'
import CoffeeCard from '../assets/latte-coffee.jpg'
import Nav from './Nav'

const Menu = () => {
  return (
    <div>
      <Nav/>    
     <div>
      <h1>Discover <br /> Best Coffee Sellers</h1>
      <p>
        For far away, behind the world mountains , far from the countries vakalia and 
        Consonantia, there live the blind text
      </p>
     </div>
     
     <div class="card-body">

        <h4 class="card-title">Coffee Capuccino </h4>
        <p class="card-text"> A small river name duden flows by their place and supplies.</p>
        <p>$5.90</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
</div>

  )
}

export default Menu