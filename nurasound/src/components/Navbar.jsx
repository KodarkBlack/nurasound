import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between ml-[5%]'>
      <ul className="text-startup-grey/40 text-[17px] flex items-center justify-center gap-8 ">
        <li className="text-3xl">Nura</li>
        <li>Product</li>
        <li>Subscription</li>
        <li>Why Nura?</li>
        <li>Support</li>
      </ul>
      <h1 className='mr-[5%]'>Cart (0)</h1>
    </div>
  )
}

export default Navbar
