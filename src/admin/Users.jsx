import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getUser } from '../store/reducers/userSlice';

const Users = () => {
  const dispatch = useDispatch();
  const { userList, loading } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch])

  return (
    <div className='w-[1200px] m-auto mt-16 flex flex-col items-center'>
      {userList.map((u) => (
        <div className="h-25 w-[900px] border border-gray-600 flex justify-around items-center" key={u._id}>
          <p>{u.email}</p>
          <select name="" id="" className='cursor-pointer'>
            <option value="" disabled selected>
              {u.isAdmin == false ? "user" : "admin"}
            </option>
            <option>admin</option>
            <option>user</option>
          </select>
          <button className=' border border-gray-300 text-16px cursor-pointer'>delete</button>
        </div>))}
    </div>
  )
}

export default Users