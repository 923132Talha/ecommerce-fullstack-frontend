import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/reducers/productSlice";
import "../index.css";
import { useNavigate } from 'react-router-dom';
import { checkUser, logoutUser } from '../store/reducers/userSlice.js';


const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector(state => state.products);
  const { isAuthenticated, user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(checkUser());
    dispatch(getAllProducts());
    if (!isAuthenticated) {
      setShowBtn(true)

      if (!user.isAdmin) {
        console.error("admins allowed only");
      }
      else {

        navigate("/admin")
      }
    }
  }, [dispatch, isAuthenticated, user]);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate("/login");
  }

  return (
    <>
      <div className=' text-[29px] font-semibold text-blue-600 px-3 mt-3' >Admin Dashboard</div>
      <div className="flex justify-center items-center w-[750px]">
        <button className="bg-blue-600 w-[130px] h-[29px] rounded-md text-white text-[13px] cursor-pointer" onClick={handleLogout}>Log out
        </button>
        <button className='w-[130px] h-[29px] my-3 ml-39 rounded-md bg-green-600 text-white cursor-pointer'
          onClick={() => navigate("/admin/create")}
        >create product
        </button>
      </div>
      <div className="w-[1200px] m-auto flex justify-around order border-gray-300">
        <span className='text-[16px] font-semibold'>name</span>
        <span className='text-[16px] font-semibold'>img</span>
        <span className='text-[16px] font-semibold'>price</span>
        <span className='text-[16px] font-semibold'>actions</span>
      </div>
      <section className=' w-[1200px] h-[590px] flex flex-col justify-start m-auto p-6 my-2 mb-3 border border-gray-300 overflow-y-scroll scrollbar-hide'>
        {
          products.map((product) => (
            <div className=" flex justify-around items-center gap-22 px-3 my-3" key={product._id}>
              <img src={product.img} className='w-32 h-32' />
              <div className='text-[16px] flex w-[260px] justify-between items-center gap-3'>
                <span>{product.name}</span>
                <span className='font-semibold'>${product.price}</span>
              </div>

              <div className='text-[16px] flex gap-3'>
                <button className='w-[70px] h-[29px] rounded-md bg-[#0067FF] text-white cursor-pointer' onClick={() => navigate("/admin/update")}>update</button>
                <button className='w-[70px] h-[29px] rounded-md bg-[#FA3434] text-white cursor-pointer'>delete</button>
              </div>
            </div>
          ))
        }
      </section>

    </>
  )
}

export default AdminDashboard