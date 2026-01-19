import React from 'react'
import { furnitures1 } from "../../lib/furniture.js"
import "../../index.css"

const BlockCard = () => {
    return (
        <>
            <div className='flex max-w-[1180px] h-[257px] mx-auto my-6 relative'>

                {/* FURNITURE BG */}
                <div className='hidden md:flex w-[570px]'>
                    <img src="/furniturebg.png" alt="" className="w-[290px] h-[257px] object-cover opacity-80" />
                    <p className='font-semibold text-[20px] absolute top-5 left-5'>Home and <br /> outdoor</p>
                    <button className='bg-white w-[123px] h-10 rounded-md border border-[#FFFFFF] absolute top-22 left-4 cursor-pointer'>Source now</button>
                </div>

                {/* FURNITURE ITEMS */}
                <div className='flex overflow-x-auto md:flex-wrap snap-x snap-mandatory scrollbar-hide justify-start items-center px-2 md:px-0'>
                    {furnitures1.map((item, id) => {
                        return (
                            <div
                                key={id}
                                className="snap-start shrink-0 border-2 border-gray-100 flex justify-center items-center w-[223px] h-[127px] bg-white rounded-md"
                            >
                                <>
                                    <div className="flex flex-col p-3">
                                        <p className="text-[16px] font-normal">{item.type}</p>
                                        <br />
                                        <p className='text-[13px] text-[#8B96A5]'>
                                            From<br />USD {item.price}
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <img
                                            src={item.img}
                                            alt=""
                                            style={{ width: `${item.width}px`, height: `${item.height}px` }}
                                            className="ml-9 mt-6"
                                        />
                                    </div>
                                </>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full m-auto h-10 cursor-pointer text-[#0D6EFD] text-[16px] font-medium flex items-center md:hidden border border-gray-300 absolute top-53 p-6">Source now -&gt; </div>
            </div>

        </>
    )
}

export default BlockCard
