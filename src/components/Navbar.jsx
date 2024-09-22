import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars"
import MobileNav from './MobileNav'
import NavContext from '../contextAPI/NavContext/navContext'


const Navbar = () => {
    
    const {setOpen}=useContext(NavContext)

    const handleHamburger=()=>{
        setOpen(true);
    }

    return (
        <header className='w-full   p-5 border    drop-shadow-2xl'>
            
            <nav className='md:w-[80vw] mx-auto flex items-center justify-between '>

                

                
                    
                <h1 className='text-3xl md:text-4xl text-green-500  font-bold'><span className=' text-black mx-2 font-thin lg:hidden' onClick={handleHamburger} ><FontAwesomeIcon icon={faBars}/></span>Printify</h1>
                


                
                <ul className='hidden lg:flex items-center justify-evenly  gap-3 text-lg  '>
                    <li>Catalog</li>
                    <li>
                        <select className='outline-none border-none w-[130px] bg-transparent'>
                            <option>How it works</option>
                            <option>How printify works</option>
                            <option>Print On Demand</option>
                            <option>Printify Quality Promise</option>
                            <option>What to Sell?</option>
                        </select>
                    </li>
                    <li>Pricing</li>
                    <li>Blog</li>
                    <li>
                        <select className='outline-none border-none w-[90px] bg-transparent'>
                            <option header>Services</option>
                            <option>Printify Studio</option>
                            <option>Printify Express Delivery</option>
                            <option>Transfer Products</option>
                            <option>Order In Bulk</option>
                            <option>Experts Program</option>
                        </select>
                    </li>
                    <li>
                        <select className='outline-none border-none w-[100px] bg-transparent'>
                            <option header>Use case</option>
                            <option>Merch for Fans</option>
                            <option>Merch for eCommerce</option>
                            <option>Merch for Enterprises</option>
                            <option>Grow Your Store</option>
                        </select>
                    </li>
                    <li>
                        <select className='outline-none border-none w-[120px] bg-transparent'>
                            <option header>Need Help?</option>
                            <option>Help Center</option>
                            <option>Contacts</option>
                            <option>My Requests</option>
                        </select>
                    </li>

                </ul>
                <div className='hidden md:flex'>
                    <button className='w-[100px] h-[35px] border border-gray-400 text-lg rounded-sm mx-2'>Login</button>
                    <button className='w-[100px] h-[35px] border border-green-500 text-lg rounded-sm mx-2 text-white bg-green-500'>SignUp</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
