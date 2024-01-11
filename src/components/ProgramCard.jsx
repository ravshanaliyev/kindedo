import React from 'react'

const ProgramCard = ({ image, title, desc, bgColor }) => {
    return (
        <div>
            <div className="card mb-5 w-[400px] rounded-[32px] bg-[#fff]  text-center px-[30px] py-[20px]">
                <div className="card-icon   mx-auto">
                    <img src={image} className='rounded-[24px]' alt="" />
                </div>
                <div className="card-title text-[#1b1b1b] text-[24px] lg:text-[32px]  font-bold my-3">
                    {title}
                </div>
                <div className="card-desc text-[#424242] text-[16px] lg:text-[18px]  mb-[15px]">
                    {desc}
                </div>
                <div style={{ backgroundColor: bgColor }} className={`flex items-center my-8 justify-around  text-[#fff] py-[16px] px-[10px] rounded-[24px]`}>
                    <div className="px-1 pr-2 border-r">
                        <span className='text-[20px] lg:text-[25px]'>4-5 Yrs</span>
                        <p>age</p>
                    </div>
                    <div className=" px-1 pr-2 border-r">
                        <span className='text-[20px] lg:text-[25px]'>5 Days</span>
                        <p>weekly</p>
                    </div>
                    <div className="px-1">
                        <span className='text-[20px] lg:text-[25px]'>3.30 Hrs</span>
                        <p>period</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgramCard