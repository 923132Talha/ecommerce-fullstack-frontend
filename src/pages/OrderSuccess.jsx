import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { confirmOrder } from "../store/reducers/orderSlice.js"
import { clearCart } from "../store/reducers/addtocartSlice.js"
import { useNavigate,useSearchParams } from "react-router-dom"

const OrderSuccess = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams]=useSearchParams();
    const sessionId = searchParams.get("session_id");
    const { order } = useSelector(state => state.order);

    useEffect(() => {
        if (sessionId && !order) {
            dispatch(confirmOrder(sessionId));
        }
        if (order) {
            dispatch(clearCart());
        }
    }, [dispatch]);

    return (
        <div className='w-full h-full flex flex-col gap-9 justify-center items-center'>
            <p className='text-[29px] text-center text-green-600'>
                payment successfull, order is confirmed
            </p>
            <button onClick={() => { navigate("/products") }}>Back to shop</button>
        </div>
    )
}

export default OrderSuccess;