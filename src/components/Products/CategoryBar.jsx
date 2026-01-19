import React from 'react'
import { useState } from 'react';
import "../../index.css"

const CategoryBar = ({ setCategory, setPrice }) => {
    const [price, setPriceChange] = useState(50);

    const handleCategoryChange = (category) => {
        setCategory(category);
    }

    const handlePriceChange = (e) => {
        setPriceChange(e.target.value);
        setPrice(e.target.value)
    }

    return (
        <div className='max-w-60 h-[1600px] border border-[#DEE2E7] ml-16 my-3 hidden md:flex flex-col gap-6'>
            {/*CATEGORY FILTER */}
            <div className="flex flex-col gap-3 p-3">

                <div className="flex w-[230px] gap-33 items-center">
                    <p className='text-[16px] font-semibold'>Category</p>
                    <p><img src="/cart/uparrow.png" className='w-3 h-[7.41px]' /></p>
                </div>
                <div className='text-[16px] text-[#505050] font-normal cursor-pointer' onClick={() => handleCategoryChange("Smartphones")}>Smartphones </div>
                <div className='text-[16px] text-[#505050] font-normal cursor-pointer' onClick={() => handleCategoryChange("Electronics")}>Electronics</div>
                <div className='text-[16px] text-[#505050] font-normal cursor-pointer' onClick={() => handleCategoryChange("Modern tech")}>Modern tech</div>
                <div className='text-[16px] text-[#505050] font-normal cursor-pointer' onClick={() => handleCategoryChange("Clothing")}>Clothing</div>
                <div className='text-[16px] text-[#505050] font-normal cursor-pointer' onClick={() => handleCategoryChange("Bags")}>Bags</div>
                <div className='text-[16px] text-[#0D6EFD] cursor-pointer'>See all</div>
            </div>

            {/*BRANDS FILTER */}

            <div className="flex flex-col gap-3 p-3 w-[230px] h-[264px]">

                <div className="flex w-[230px] gap-36 items-center">
                    <p className='text-[16px] font-semibold'>Brands</p>
                    <p><img src="/cart/uparrow.png" className='w-3 h-[7.41px]' /></p>
                </div>
                <form action="">
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3'><input type="checkbox" /> <label>Samsung</label></div>
                        <div className='flex gap-3'><input type="checkbox" /> <label>Apple</label></div>
                        <div className='flex gap-3'><input type="checkbox" /> <label>Huawei</label></div>
                        <div className='flex gap-3'><input type="checkbox" /> <label>Pocco</label></div>
                        <div className='flex gap-3'><input type="checkbox" /> <label>Lenovo</label></div>
                    </div>
                </form>
                <div className='text-[16px] text-[#0D6EFD] cursor-pointer'>See all</div>
            </div>

            {/*FEATURES FILTER */}
            <div className="flex flex-col gap-3 p-3 w-[230px] h-[264px]">

                <div className="flex w-[230px] gap-33 items-center">
                    <p className='text-[16px] font-semibold'>Features</p>
                    <p><img src="/cart/uparrow.png" className='w-3 h-[7.41px]' /></p>
                </div>
                <form action="">
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3'><input type="checkbox" /> <label>Metallic</label></div>
                        <div className='flex gap-3'><input type="checkbox" /> <label>Plastic cover</label></div>
                        <div className='flex gap-3'><input type="checkbox" /> <label>8GB Ram</label></div>
                        <div className='flex gap-3'><input type="checkbox" /> <label>Super power</label></div>
                        <div className='flex gap-3'><input type="checkbox" /> <label>Large Memory</label></div>
                    </div>
                </form>
                <div className='text-[16px] text-[#0D6EFD] cursor-pointer'>See all</div>
            </div>

            {/*PRICE FILTER */}
            <div className="flex flex-col gap-3 p-3 w-[230px] h-[264px]">

                <div className="flex w-[230px] gap-26 items-center">
                    <p className='text-[16px] font-semibold'>Price range</p>
                    <p><img src="/cart/uparrow.png" className='w-3 h-[7.41px]' /></p>
                </div>

                <form action="">
                    <div className='flex flex-col gap-3'>
                        <div><input type="range" min="0" max="100" className='w-[200px] h-5' onChange={handlePriceChange} /></div>
                        <div className='flex justify-between'>
                            <p>0</p>
                            <p>100</p>
                        </div>
                        <p>Price:{price}</p>
                        <button type='submit' className='w-[200px] h-10 rounded-md text-[#0D6EFD] text-[16px] cursor-pointer bg-[#DEE2E7]'>Apply</button>
                    </div>
                </form>
            </div>

            {/*CONDITION FILTER */}
            <div className="flex flex-col gap-3 p-3 w-[230px] h-[264px]">

                <div className="flex w-[230px] gap-33 items-center">
                    <p className='text-[16px] font-semibold'>Features</p>
                    <p><img src="/cart/uparrow.png" className='w-3 h-[7.41px]' /></p>
                </div>
                <form action="">
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3'><input type="radio" /> <label>Any</label></div>
                        <div className='flex gap-3'><input type="radio" /> <label>Refurbished</label></div>
                        <div className='flex gap-3'><input type="radio" /> <label>Brand new</label></div>
                        <div className='flex gap-3'><input type="radio" /> <label>Old items</label></div>
                    </div>
                </form>
                <div className='text-[16px] text-[#0D6EFD] cursor-pointer'>See all</div>
            </div>

            {/*RATINGS FILTER */}
            <div className="flex flex-col gap-3 p-3 w-[230px] h-[264px]">

                <div className="flex w-[230px] gap-33 items-center">
                    <p className='text-[16px] font-semibold'>Ratings</p>
                    <p><img src="/cart/uparrow.png" className='w-3 h-[7.41px]' /></p>
                </div>
                <form action="">
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3'><input type="checkbox" /><img src="/cart/r5.png" /></div>
                        <div className='flex gap-3'><input type="checkbox" /><img src="/cart/r4.png" /></div>
                        <div className='flex gap-3'><input type="checkbox" /><img src="/cart/r3.png" /></div>
                        <div className='flex gap-3'><input type="checkbox" /><img src="/cart/r2.png" /></div>
                    </div>
                </form>
                <div className='text-[16px] text-[#0D6EFD] cursor-pointer'>See all</div>
            </div>

        </div>
    )
}

export default CategoryBar