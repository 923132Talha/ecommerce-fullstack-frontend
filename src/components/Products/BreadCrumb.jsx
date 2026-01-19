import React from 'react'

const BreadCrumb = () => {
  return (
    <div className='hidden md:flex items-center max-[1440px] h-16 bg-gray-100'>
        <div className='w-[411px] h-6 text-[#8B96A5] ml-16 flex justify-start gap-3 text-[16px]'>
            <p>Home</p>
            <p>Clothings &gt;</p>
            <p>Men s wear &gt;</p>
            <p>Summer clothing</p>
        </div>
    </div>
  )
}

export default BreadCrumb