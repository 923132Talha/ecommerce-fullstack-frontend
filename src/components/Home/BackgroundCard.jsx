import { useState } from 'react';
import { categories } from '../../lib/categories.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const BackgroundCard = () => {
    const [active, setActive] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, loading } = useSelector(state => state.user);

    const handleLogin = () => {
        if (!isAuthenticated) {
            return navigate("/login");
        }
    }
    return (
        <div className='bg-[#FFFFFF] border border-[#DEE2E7] mt-9 m-auto max-w-[1180px] h-[400px] px-3 flex items-center relative'>
            {/* CATEGORIES */}
            <div className="hidden md:flex flex-col w-[250px] h-[360px]">
                {categories.map((category, index) => (
                    <p
                        key={index}
                        className={`w-[250px] flex items-center px-3 h-10 cursor-pointer ${active === index ? "bg-[#E5F1FF] font-medium" : ""}`}
                        onClick={() => setActive(index)}
                    >
                        {category}
                    </p>
                ))}
            </div>

            {/*ADVERTISEMENT*/}
            <div className='relative w-full'>
                <img src="/bannerboard.png" className=' w-[664px] h-[373px] md:ml-3' alt="Advertisement" />
                <div className="absolute top-[10%] left-[5%]">
                    <p className="text-3xl font-bol font- text-black">Latest trending</p>
                    <p className="text-4xl font-bold text-black">Electronic items</p>
                </div>
                <button className='absolute top-[35%]  left-[5%] w-[119px] h-10 rounded-md bg-white cursor-pointer'>
                    Learn More
                </button>
            </div>

            {/*USER*/}
            <div className="hidden md:flex gap-3 flex-col ml-5 justify-center items-center">

                <div className='bg-[#E3F0FF] w-[200px] h-[150px] flex justify-center items-center flex-col gap-3'>
                    <div className='flex gap-3 text-[16px] justify-center items-center rounded-lg'>
                        <img src="/profile.png" alt="profile" />
                        <div>Hi, user <br /> let’s get stated</div>
                    </div>
                    <button className="bg-[#127FFF] text-white px-10 rounded-md w-[180px] h-[30px] cursor-pointer">Join now</button>
                    <button className="bg-white text-[#0D6EFD] px-10 rounded-md w-[180px] h-[30px] cursor-pointer" onClick={()=>handleLogin}>{isAuthenticated ? "logout" : "login"}</button>
                </div>

                {/*DISCOUNT*/}

                <div className='bg-[#F38332] pl-2 pt-2 text-white text-[16px] w-[200px] h-[95px] rounded-md'>Get US $10 off<br /> with a new<br />  supplier</div>
                <div className='bg-[#55BDC3] pl-2 pt-2 text-white w-[200px] h-[95px] rounded-md'>Send quotes with<br />  supplier <br /> preferences</div>
            </div>


        </div>
    );
};

export default BackgroundCard;
