import React from 'react'
import { Button, Container } from '../utils/Utils'
import Child from '../assets/header.jpg'
const Header = () => {
    return (
        <div className="header mt-8">
            <Container>
                <div className='flex items-center justify-between'>
                    <div className="header-info">
                        <h3 className='text-[#00bbae] text-[24px] font-bold'>Kindergarten Program</h3>
                        <h1 className='text-[#111] text-[70px] font-bold'>Best Children’s Education</h1>
                        <Button text="Admission Open 22-23" type="button" />
                    </div>
                    <div className="header-img">
                        <img className='w-[600px] rounded-xl' src={Child} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header