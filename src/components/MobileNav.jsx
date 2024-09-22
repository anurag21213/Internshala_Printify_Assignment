import React, { useContext } from 'react'
import NavContext from '../contextAPI/NavContext/NavContext'
import { motion } from 'framer-motion'

const MobileNav = () => {

    const {setOpen} =useContext(NavContext)

    const handleClose=()=>{
        setOpen((prev)=>!prev)
    }
    return (
        <motion.div 
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.9}}
        
        
        className=' bg-slate-200 z-10  h-full p-4 absolute flex-col justify-center '>
            <div className='flex justify-end items-end w-full text-4xl ' onClick={handleClose}>X</div>
            <h1 className='text-3xl text-green-500  font-bold'>Printify</h1>
            <ul className='flex-col items-center justify-evenly  gap-y-3-3 text-lg text-slate-600 '>
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
            <div className=''>
                    <button className='w-[100px] h-[35px] border border-gray-400 text-lg rounded-sm mx-2'>Login</button>
                    <button className='w-[100px] h-[35px] border border-green-500 text-lg rounded-sm mx-2 text-white bg-green-500'>SignUp</button>
            </div>

        </motion.div>
    )
}

export default MobileNav
