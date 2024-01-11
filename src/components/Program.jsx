import React from 'react'
import { Container } from '../utils/Utils'
import ProgramCard from './ProgramCard'
import image1 from '../assets/program1.jpg'
import image2 from '../assets/program2.jpg'
import image3 from '../assets/program3.jpg'

const Program = () => {
    return (
        <div className='my-10 py-10 bg-[#f5f2f2]'>
            <Container>
                <div className="text-center my-10">
                    <h2 className='text-[#1b1b1b] text-[40px] lg:text-[50px] '>Our Programs</h2>
                    <p className='text-[#424242] text-[16px] lg:text-[20px]'>Kindedo opened its doors in 1984 with a unique vision to provide its students
                        with a globally focused study of arts.</p>
                </div>
                <div className="program flex flex-wrap gap-x-8 gap-y-2">
                    {datas.map((data, index) => (
                        <ProgramCard key={index} {...data} />
                    ))}
                </div>
            </Container>
        </div>
    )
}
const datas = [
    {
        image: image1,
        title: "Play Ground",
        desc: "We will be magically transform the School’s Sports Centre into a full game area.",
        bgColor: "#ff9B24",
    },
    {
        image: image2,
        title: "Play Ground",
        desc: "We will be magically transform the School’s Sports Centre into a full game area.",
        bgColor: "#ff577B",
    },
    {
        image: image3,
        title: "Play Ground",
        desc: "We will be magically transform the School’s Sports Centre into a full game area.",
        bgColor: "#00bbae",
    }
]
export default Program