import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkUser, logoutUser } from '../../store/reducers/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, loading } = useSelector(state => state.user);

  useEffect(() => {
     dispatch(checkUser());
  }, [dispatch,isAuthenticated])

  if (!isAuthenticated) {
    navigate("/login");
  }

  if (loading) {
    <div className='fixed inset-0 bg-white flex justify-center items-center z-50'>
      <img src="/loading.gif" alt="loading" className='w-32 h-32' />
    </div>
  }

  return (
    <div className='border-2 w-full h-26 p-9 flex justify-between items-center'>
      <div className='h-[78px] flex flex-col justify-center'>
        <img src="brandlogo.png" />
        <p className='text-[16px] font-bold'>Admin Panel</p>
      </div>
      {isAuthenticated ? <button className='w-19 h-11 rounded-md bg-blue-600 text-16px text-white cursor-pointer'
        onClick={() => {dispatch(logoutUser()) }}>Logout</button> : ""}

    </div>
  )
}

export default Header