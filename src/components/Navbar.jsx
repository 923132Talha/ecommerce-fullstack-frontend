import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchQuery } from "../store/reducers/searchSlice.js"
import { checkUser,logoutUser } from '../store/reducers/userSlice.js';


const Navbar = () => {
    const searchIcon = "/searchicon.png";

    const [query, setQuery] = useState("");
    const [showBtn, setShowBtn] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(checkUser());
        if(!isAuthenticated){
            navigate("/login")
        }
        setShowBtn(true);
    }, [isAuthenticated])

    const handleSearch = (e) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (query.trim()) {
            dispatch(setSearchQuery(query.trim()));
            navigate("/products");
        }
    }

    const handleLogout=async ()=>{
       await dispatch(logoutUser());
            navigate("/login");
    }

    return (

        <>
            {/*NAVBAR */}
            <div className='px-4 md:px-8 lg:px-16 w-full max-w-[1440px] h-[86px] flex justify-between items-center bg-white m-auto'>
                <Link to="/"><div className="flex items-center h-full gap-3">
                    {/*LOGO*/}
                    <div className="w-[38.26px] h-[40.17px] bg-[#0D6EFD] rounded-xl flex items-center justify-center">
                        <img src="/Logo.png" className='w-[17.45px] h-[20.64px]' alt="Logo" />
                    </div>
                    <p className='text-[#8CB7F5] text-2xl md:3xl lg:6xl font-bold'>Brand</p>
                </div>
                </Link>

                {/*SEARCHBAR */}
                <div className='hidden md:flex items-center gap-0' onSubmit={() => handleSubmit()}>
                    <input type="text" placeholder='Search' className='p-2 border border-[#0D6EFD] rounded-l-md h-10 w-[421px]' onChange={handleSearch} value={query} />

                    <div className='border flex justify-center items-center border-[#0D6EFD] rounded-r-md'>
                        <div className="flex justify-center items-center px-3">
                            <div className='text-[12px] w-[73px]'>
                                All Category

                            </div>

                            <select name="" id="Category" className='h-full px-2 cursor-pointer'></select>
                        </div>
                        <button className='bg-[#0D6EFD] border border-[#0D6EFD] w-[100px] px-3 h-10 text-white rounded-r-md cursor-pointer'> Search</button>
                    </div>
                </div>

                    <button className={showBtn ? `bg-blue-600 w-16 h-9 rounded-md text-white text-[13px] block cursor-pointer` : "hidden"} onClick={handleLogout}>Log out</button>
                {/*USER OPTIONS FOR DESKTOP*/}
                <div className='w-[228px] h-[41px] hidden md:flex gap-9 justify-center items-center text-[12px] text-[#8B96A5]'>
                    <Link to="/register"><div className='cursor-pointer'><img src="/user/profile.png" alt="" />Profile</div></Link>
                    <Link ><div className='cursor-pointer'><img src="/user/message.png" alt="" />Message</div></Link>
                    <Link to="/products"><div className='cursor-pointer'><img src="/user/orders.png" alt="" />Orders</div></Link>
                    <Link to="/cart"><div className='cursor-pointer'><img src="/user/cart.png" alt="" /><p>Mycart</p></div></Link>
                </div>

                {/*USER OPTIONS FOR MOBILE SCREEN*/}
                <div className="w-[228px] h-[41px] top-4 left-[276px] flex items-center justify-center ml-39 gap-3 md:hidden">
                    <Link to="/cart">
                        <div className="w-6 h-6">
                            <img src="/cart.png" alt="cart" />
                        </div>
                    </Link>
                    <div className="w-6 h-6">
                        <img src="/person.png" alt="person" />
                    </div>
                </div>

            </div>
            {/*RESPONSIVE SEARCHBAR*/}
            <div className="w-full h-10 flex justify-center items-center">

                <div className='h-10 flex md:hidden items-center gap-0' onSubmit={handleSubmit}>
                    <input type="text" placeholder={"     Search"} className='bg-[#F7FAFC] text-[#8B96A5] p-2 rounded-md h-10 w-[421px]' onChange={handleSearch} />
                </div>
            </div>
        </>
    )
}

export default Navbar