import React from 'react'
import { Container, ButtonMain } from '../utils/Utils'
import Child from '../assets/info.png'
import { FaAngleRight } from "react-icons/fa6";
import Play from '../assets/play.png'
import { Link } from 'react-router-dom';
const Info = () => {
    return (
        <div className='my-10'>
            <Container>
                <div className='block lg:flex lg:items-center lg:justify-between gap-20 '>
                    <div className="info-img">
                        <img className='w-[400px] lg:w-[600px] px-6 rounded-tr-extraLarge rounded-bl-extraLarge' src={Child} alt="" />
                    </div>
                    <div className="px-4 w-[450px] lg:w-[600px]">
                        <h3 className='text-[#1b1b1b] text-[32px] lg:text-[50px] font-bold mt-3'>Best for Your Kids
                        </h3>
                        <p className='text-[#424242] text-[16px] lg:text-[20px]'>Being brave isn’t always a grand gesture sometimes it just means having a go attempting that difficult question, offering an answer in a lesson when you’re simply really trying new.</p>
                        <div className="flex items-center my-8 justify-around bg-[#00bbae] text-[#fff] py-[16px] px-[40px] rounded-[24px]">
                            <div className="flex items-center  gap-3 border-r">
                                <span className='text-[28px] lg:text-[45px]'>14+</span>
                                <p>Years of
                                    experience</p>
                            </div>
                            <div className="flex items-center pl-2 gap-3 border-r">
                                <span className='text-[28px] lg:text-[45px]'>7K+</span>
                                <p>Students
                                    each year</p>
                            </div>
                            <div className="flex items-center pl-2 gap-3">
                                <span className='text-[28px] lg:text-[45px]'>15+</span>
                                <p>Award
                                    Wining</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <FaAngleRight className='bg-[#00bbaec2] text-[#1b7d76] p-1 text-[20px] rounded-full ' />
                            <p className='text-[18px]'>We believe every child is intelligent so we care.</p>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <FaAngleRight className='bg-[#00bbaec2] text-[#1b7d76] p-1 text-[20px] rounded-full ' />
                            <p className='text-[18px]'>Teachers make a difference of your child.</p>
                        </div>
                        <div className="flex gap-8 my-5 items-center">
                            <Link to={"/shop"}>
                                <ButtonMain text="View More" type="button" />
                            </Link>
                            <div className="flex">
                                <Link to={"/shop"} className='flex items-center gap-2  hover:text-[#00bbae]'>
                                    <img src={Play} width={40} height={40} alt="" />
                                    <p className='text-[18px]'>Promotional Video</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Info