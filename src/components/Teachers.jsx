import React from 'react'
import teacher1 from '../assets/t1.jpg'
import teacher2 from '../assets/t2.jpg'
import teacher3 from '../assets/t3.jpg'
import teacher4 from '../assets/t4.jpg'
import { Container } from '../utils/Utils'
const Teachers = () => {
    return (
        <div className='mb-12 mt-10 py-15'>
            <Container>
                <div className="text-center my-10">
                    <h2 className='text-[#1b1b1b] text-[50px]'>Our Best Teachers</h2>
                    <p className='text-[#424242] text-[18px]'>With the help of teachers and the environment as the third teacher, students
                        have opportunities to confidently take risks.</p>
                </div>
                <div className="teachers flex flex-wrap gap-8">
                    {teachers.map((teacher, index) => (
                        <div key={index} className="teacher relative w-[300px] shadow-lg">
                            <img src={teacher.img} className='h-full' alt="" />
                            <h3 className='text-[#1b1b1b] text-[24px] text-center bg-[#fff] w-full font-bold'>{teacher.name}</h3>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
const teachers = [
    {
        img: teacher1,
        name: "Sara Smith",
    },
    {
        img: teacher2,
        name: "Emmy Hill",
    },
    {
        img: teacher3,
        name: "Frances R.",
    },
    {
        img: teacher4,
        name: "Olinda Evans",
    },
]
export default Teachers