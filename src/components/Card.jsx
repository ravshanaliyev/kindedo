import React from 'react'
import { ButtonMain } from '../utils/Utils'
import { Link } from 'react-router-dom'

const Card = ({ icon, title, desc }) => {
    return (
        <div>
            <div className="card mb-5 w-[400px] rounded-[32px] border-2 border-dashed text-center p-[30px]">
                <div className="card-icon bg-[#fff8eb] w-[120px] h-[120px] mx-auto  flex justify-center items-center text-[64px] rounded-full">
                    {icon}
                </div>
                <div className="card-title text-[#1b1b1b] text-[32px] font-bold my-3">
                    {title}
                </div>
                <div className="card-desc text-[#424242] text-[18px] mb-[15px]">
                    {desc}
                </div>
                <Link to={"/about"}>
                    <ButtonMain text="View Details" />
                </Link>
            </div>
        </div>
    )
}

export default Card