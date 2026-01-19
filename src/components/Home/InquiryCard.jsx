import React from 'react'

const InquiryCard = () => {
    return (
        <div className='max-w-[1180px] h-[150px] md:h-[420px] m-auto my-3 bg-linear-to-r from-[#2C7CF1] to-[#00D1FF80] flex justify-around'>
            <div className="flex flex-col text-white gap-3 px-3 py-9 md:px-9">
                <p className='text-[16px] md:text-[32px] font-semibold'>An easy way to send <br /> requests to all suppliers</p>
                <p className='text-[16px] font-normal hidden md:flex'>Lorem ipsum dolor sit amet, consectetur adipisicing<br /> elit, sed do eiusmod tempor incididunt.</p>
                <button className='bg-[#0067FF] text-white text-[13px] w-[98px] h-[30px] md:w-32 md:h-10 rounded-md cursor-pointer block md:hidden'>Send inquiry</button>
            </div>

            {/*INQUIRY SECTION */}
            <div className="bg-white w-[491px] h-[346px] mt-9 hidden md:flex flex-col gap-5 p-6 rounded-md">
                <p className='text-black text-[20px] font-semibold'>Send quote to suppliers</p>
                <input type="text" className='w-[440px] h-10 border border-gray-300 px-3' placeholder='What item you need?' />
                <input type="text" className='w-[440px] h-[73px] border border-gray-300 px-3' placeholder='Type more details' />
                <div className="flex gap-2 items-center">
                    <input type="text" className='w-[206px] h-10 border border-gray-300 px-3' placeholder='Quantity' />
                    <label>Pcs</label>
                    <select className='w-[111px] h-10 border border-gray-300 px-3'>Start</select>
                </div>
                <button className='bg-[#0067FF] text-white w-32 h-10 rounded-md cursor-pointer'>Send inquiry</button>
            </div>


        </div>
    )
}

export default InquiryCard