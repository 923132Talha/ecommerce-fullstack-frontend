import React from 'react';
import products from '../../lib/products.js';

const SaleCard = () => {
    return (
        <div className="flex flex-wrap md:flex-nowrap w-full max-w-[1180px] border border-[#DEE2E7] mx-auto my-6 rounded-md overflow-hidden">

            {/* LEFT SECTION */}
            <div className="w-full md:max-w-[220px] p-4 flex flex-col">
                <div>
                    <p className="text-[20px] font-medium">Deals and offers</p>
                    <p className="text-[16px] text-[#8B96A5]">Hygiene equipments</p>
                </div>

                {/* TIMER */}
                <div className="flex gap-2 justify-center items-center mt-3 text-white">
                    {["Days", "Hour", "Min", "Sec"].map((label, i) => (
                        <div
                            key={i}
                            className="w-[45px] h-[50px] bg-[#606060] flex flex-col justify-center items-center text-[16px] font-bold rounded-sm"
                        >
                            {["04", "13", "34", "56"][i]}
                            <p className="text-[12px]">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex flex-wrap gap-1 justify-center md:justify-start w-full md:w-auto p-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="w-[179px] h-[235px] sm:w-[25%] md:w-[179px] flex flex-col items-center justify-center border border-gray-200 rounded-md p-2"
                    >
                        <img
                            src={product.imgSrc}
                            alt={product.name}
                            style={{ width: `${product.width}px`, height: `${product.height}px` }}
                        />
                        <p className="text-[16px] text-[#1C1C1C]">{product.name}</p>
                        <div className="w-[61px] h-7 rounded-[29px] bg-[#FFE3E3] text-[14px] text-[#EB001B] text-center font-medium">
                            {product.discount}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SaleCard;
