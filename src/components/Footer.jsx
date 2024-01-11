import React from 'react'
import Logo from '../assets/logo.svg'
import { Container } from '../utils/Utils'
const Footer = () => {
    return (
        <Container>
            <div className='flex items-center justify-between mt-[80px]'>
                <img src={Logo} alt="" />
                <p>© 2022. All rights reserved.</p>
            </div>
        </Container>
    )
}

export default Footer