import React from 'react'
import { useNavigate } from "react-router-dom"

const OrderCancel = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-6 font-medium text-[29px] text-red-600'>
      <p> OrderCancel</p>
      <button onClick={() => { navigate("/products") }}>Back to shop</button>
    </div>
  )
}

export default OrderCancel