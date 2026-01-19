import React from 'react';

const MenuNavbar = () => {
    return (
        <div className="border border-gray-300 w-full hidden md:flex">

        <div className=' w-full max-w-[1440px] h-14 flex justify-between items-center mx-auto px-4'>
            {/* MENU LIST ITEMS */}
            <div className="flex items-center gap-6 w-full max-w-[620px]">
                <img src="/hamburger.png" className='w-[18px] h-[12px] hidden md:flex cursor-pointer' alt="Hamburger Icon" />
                <p className='cursor-pointer'>All Category</p>
                <p className='cursor-pointer'>Hot Offers</p>
                <p className='cursor-pointer'>Gift Boxes</p>
                <p className='cursor-pointer'>Projects</p>
                <p className='cursor-pointer'>Menu Items</p>
                <div className='flex items-center'>
                    Help
                    <select name="" id="Currency" className='cursor-pointer'></select>
                </div>
            </div>

            {/* CURRENCY SELECTOR */}
            <div className="flex items-center gap-2 ml-auto">
                <p>English, USD</p>
                <select name="" id="Currency" className='cursor-pointer'></select>
            </div>

            {/* COUNTRY SELECTOR */}
            <div className="flex items-center gap-3 ml-6">
                <p>Ship to</p>
                <img src="/flags.png" alt="Flag" />
                <select name="" id="Currency" className='cursor-pointer'></select>
            </div>
        </div>
        </div>
    );
};

export default MenuNavbar;
