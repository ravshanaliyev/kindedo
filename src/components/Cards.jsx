import React from 'react'
import { MdOutlineSportsSoccer } from "react-icons/md";
import { LiaDrumSolid } from "react-icons/lia";
import { PiPaintBucket } from "react-icons/pi";
import Card from './Card';
import { Container } from '../utils/Utils';

const Cards = () => {
    return (
        <div className=''>
            <Container>
                <div className="text-left px-4 lg:text-center  w-[400px] lg:w-[100%] my-10  ">
                    <h2 className='text-[#1b1b1b] text-[26px] lg:text-[50px]'>Our Offerings</h2>
                    <p className='text-[#424242] text-[15px] lg:text-[20px]'>Our multi-level kindergarten programs cater to the age group of 2-5 years
                        with a curriculum focussing children.</p>
                </div>
                <div className="cards block lg:flex-wrap lg:flex gap-8 px-4">
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </Container>
        </div>
    )
}
const cards = [
    {
        icon: <MdOutlineSportsSoccer />,
        title: "Sports Class",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat illo ut."
    },
    {
        icon: <LiaDrumSolid />,
        title: "Music Class",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat illo ut."
    },
    {
        icon: <PiPaintBucket />,
        title: "Drawing Class",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat illo ut."
    },
]
export default Cards