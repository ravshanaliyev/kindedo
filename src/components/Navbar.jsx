import React from 'react'
import Logo from '../assets/logo.svg'
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { Button } from '../utils/Utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-4 px-4 '>
            <Link to={"/"} className="img">
                <img src={Logo} className='w-fit' alt="" />
            </Link>
            <ul className='flex gap-6 transition-all'>
                <li className='hover:text-[#ff9b24] '><Link className='text-[18px]' to='/'>Home</Link></li>
                <li className='hover:text-[#ff9b24]'><Link className='text-[18px]' to='/about'>About</Link></li>
                <li className='hover:text-[#ff9b24]'><Link className='text-[18px]' to='/program'>Programs</Link></li>
                <li className='hover:text-[#ff9b24]'><Link className='text-[18px]' to='/shop'>Shop</Link></li>
                <li className='hover:text-[#ff9b24]'><Link className='text-[18px]' to='/news'>News</Link></li>
            </ul>
            <div className="flex items-center gap-3">
                <Link to={"/account"} className='hover:text-[#ff9b24] '><IoPersonOutline size={23} /></Link>
                <Link to={"/wishlist"} className='hover:text-[#ff9b24] '><IoMdHeartEmpty size={23} /></Link>
                <Link to={"/cart"} className='hover:text-[#ff9b24] '><BsCart size={23} /></Link>
                <Link to={"/login"}><Button text="Get In Touch" /></Link>
            </div>
        </div >
    )
}

export default Navbar