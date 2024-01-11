import React from 'react'
import { ButtonMain, Container } from '../utils/Utils'
import Child from '../assets/header.jpg'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <Container>
            <div className="max-w-screen-xl mt-8 relative z-50  ">
                <div className='block lg:flex lg:items-center lg:justify-between '>
                    <div className="header-info ">
                        <h3 className='text-[#00bbae] text-[18px] lg:text-[24px] font-bold max-w-[450px] lg:w-[100%]'>Kindergarten Program</h3>
                        <h1 className='text-[#111] text-[40px] lg:text-[64px] font-bold w-fit max-w-[450px] lg:w-[100%]'>Best Children’s Education </h1>
                        <Link to={"/news"} className='my-3'>
                            <ButtonMain text="Admission Open 22-23" type="button" />
                        </Link>
                    </div>
                    <div className="header-img">
                        <img className='w-[400px] lg:w-[600px] mt-5 lg:mt-0 rounded-xl' src={Child} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Header