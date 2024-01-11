// import React from 'react'


// const  = () => {
//     return (
//         <>
//             <div className='flex items-center justify-between py-4 px-4 '>
//                 <Link to={"/"} className="img">
//                     <img src={Logo} className='w-fit' alt="" />
//                 </Link>
//                 <ul className='flex gap-6 transition-all'>
// <li className='hover:text-[#ff9b24] '><Link className='text-[18px]' to='/'>Home</Link></li>
// <li className='hover:text-[#ff9b24]'><Link className='text-[18px]' to='/about'>About</Link></li>
// <li className='hover:text-[#ff9b24]'><Link className='text-[18px]' to='/program'>Programs</Link></li>
// <li className='hover:text-[#ff9b24]'><Link className='text-[18px]' to='/shop'>Shop</Link></li>
// <li className='hover:text-[#ff9b24]'><Link className='text-[18px]' to='/news'>News</Link></li>
//                 </ul>
//                 <div className="flex items-center gap-3">
//                     <Link to={"/account"} className='hover:text-[#ff9b24] '><IoPersonOutline size={23} /></Link>
//                     <Link to={"/wishlist"} className='hover:text-[#ff9b24] '><IoMdHeartEmpty size={23} /></Link>
//                     <Link to={"/cart"} className='hover:text-[#ff9b24] '><BsCart size={23} /></Link>
//                     <Link to={"/login"}><Button text="Get In Touch" /></Link>
//                 </div>
//             </div >
//         </>
//     )
// }

// export default Navbar


import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import Logo from '../assets/logo.svg'
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { ButtonMain } from '../utils/Utils';
import { Link } from 'react-router-dom';
export function CollapseDefault() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex text-black flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className='hover:text-[#ff9b24] '><Link className='text-[18px]' to='/'>Home</Link></li>
            <li className='hover:text-[#ff9b24]'><Link className='text-[18px]' to='/about'>About</Link></li>
            <li className='hover:text-[#ff9b24]'><Link className='text-[18px]' to='/program'>Programs</Link></li>
            <li className='hover:text-[#ff9b24]'><Link className='text-[18px]' to='/shop'>Shop</Link></li>
            <li className='hover:text-[#ff9b24]'><Link className='text-[18px]' to='/news'>News</Link></li>
        </ul>
    );

    return (
        <Navbar className="mx-auto text-black max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <img src={Logo} alt="" />
                <div className="hidden lg:block">{navList}</div>
                <div className="flex items-center gap-x-1">
                    <Link to={"/account"} className='hover:text-[#ff9b24] hidden lg:inline-block'><IoPersonOutline size={23} /></Link>
                    <Link to={"/wishlist"} className='hover:text-[#ff9b24] hidden lg:inline-block'><IoMdHeartEmpty size={23} /></Link>
                    <Link to={"/cart"} className='hover:text-[#ff9b24] hidden lg:inline-block'><BsCart size={23} /></Link>
                    <Link to={"/login"} className="hidden lg:inline-block"><ButtonMain text="Get In Touch" /></Link>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <div className="flex items-center gap-3">
                            <Link to={"/account"} className='hover:text-[#ff9b24] '><IoPersonOutline size={23} /></Link>
                            <Link to={"/wishlist"} className='hover:text-[#ff9b24] '><IoMdHeartEmpty size={23} /></Link>
                            <Link to={"/cart"} className='hover:text-[#ff9b24] '><BsCart size={23} /></Link>
                            <Link to={"/login"}><ButtonMain text="Get In Touch" /></Link>
                        </div>
                    </div>
                </div>
            </MobileNav>
        </Navbar>
    );
}