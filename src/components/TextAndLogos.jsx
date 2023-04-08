import React from 'react'
import { FaGlobeAmericas, FaShoppingBag, FaShoppingBasket } from 'react-icons/fa';
const TextAndLogos = () => {

  return (
    <div className='logos-heading'>
        <h1>
            At the same time that we are earnest to explore & learn all things
        </h1>
        <p className='logo-desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem non ea deleniti? Exercitationem in accusantium minima labore, sint animi accusamus error debitis rerum voluptates eveniet eius tenetur iste eaque quisquam fuga amet tempora quia molestiae necessitatibus. Rerum, nam earum. Dicta, porro?
        </p>
        <div className="logos">
            <FaShoppingBasket/>
            <FaGlobeAmericas/>
            <FaShoppingBag/>
        </div>
    </div>
  )
}

export default TextAndLogos