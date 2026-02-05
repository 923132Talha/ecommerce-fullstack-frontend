import React from 'react'
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className='min-h-screen w-[20%] border-r flex flex-col justify-start items-end p-6 gap-6 text-[19px] font-bold'>
            <Link to="/admin/list">Product List</Link>
            <Link to="/admin/create">Add Products</Link>
            <Link to="/admin/orders">Orders</Link>
            <Link to="/admin/users">Users</Link>
        </div>
    )
}

export default Sidebar