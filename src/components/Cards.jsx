import React from 'react'
import { MdOutlineSportsSoccer } from "react-icons/md";
import { LiaDrumSolid } from "react-icons/lia";
import { PiPaintBucket } from "react-icons/pi";
import Card from './Card';
import { Container } from '../utils/Utils';

const Cards = () => {
    return (
        <div>
            <Container>
                <div className="info text-center my-10">
                    <h2 className='text-[#1b1b1b] text-[50px]'>Our Offerings</h2>
                    <p className='text-[#424242] text-[18px]'>Our multi-level kindergarten programs cater to the age group of 2-5 years
                        with a curriculum focussing children.</p>
                </div>
                <div className="cards flex flex-wrap gap-8">
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