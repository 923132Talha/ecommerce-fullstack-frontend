import React from 'react'
import { furnitures2 } from "../../lib/furniture.js"
import "../../index.css"

const ElectronicsCard = () => {
    return (
        <>
            <div className='flex max-w-[1180px] h-[257px] mx-auto my-6 relative'>

                {/*ELECTRONICS BG*/}
                <div className='hidden md:flex w-[570px]'>
                    <img src="/electronicsbg.png" alt="" className="w-[290px] h-[257px] object-cover opacity-80" />
                    <p className='font-semibold text-[20px] absolute top-5 left-5'>Consumer <br /> electronics and <br />gadgets</p>
                    <button className='bg-white w-[123px] h-10 rounded-md border border-[#FFFFFF] absolute top-33 left-4 cursor-pointer'>Source now</button>
                </div>

                {/*ELECTRONICS ITEMS*/}
                <div className='flex overflow-x-auto md:flex-wrap snap-x snap-mandatory scrollbar-hide justify-start'>

                    {furnitures2.map((item, id) => {
                        return (
                            <div key={id} className=" snap-start shrink-0 border-2 border-gray-100 flex justify-center items-center w-[223px] h-[127px]">
                                <>
                                    <div className="flex flex-col p-3">
                                        <p className="text-[16px] font-normal">{item.type}</p>
                                        <br />
                                        <p className='text-[13px] text-[#8B96A5]'>From<br />USD {item.price}</p>
                                    </div>
                                    <div className="flex flex-col">

                                        <img src={item.img} alt="" className={`ml-9 mt-6 w-[${item.width}px] h-[${item.height}px]`} />
                                    </div>
                                </>
                            </div>)
                    })}
                </div>


            <div className="w-full m-auto h-10 cursor-pointer text-[#0D6EFD] text-[16px] font-medium flex items-center md:hidden border border-gray-300 absolute top-36 p-6">Source now -&gt; </div>
            </div>
        </>
    )
}

export default ElectronicsCard