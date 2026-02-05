import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import MenuNavbar from "../components/MenuNavbar"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../store/reducers/userSlice.js'
import { createCheckoutSession } from "../store/reducers/paymentSlice.js"
import { codOrder } from '../store/reducers/orderSlice.js'

const ShippingDetails = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, cartLoading } = useSelector(state => state.cart);
    const { isAuthenticated, loading } = useSelector(state => state.user);
    const { sessionurl, paymentLoading } = useSelector(state => state.payment);


    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const [shipAddress, setshipAddress] = useState({
        country: "",
        city: "",
        address: "",
        phone: ""
    });

    const [paymentType, setpaymentType] = useState("online");

    const totalPrice = Array.isArray(items) ? items.reduce((acc, item) => acc + item.product.price * item.quantity, 0) : 0;

    const handlePayment = async (e) => {
        e.preventDefault();

        if (paymentType === "online") {

            await dispatch(createCheckoutSession({
                items: items,
                shippingAddress: shipAddress,
                totalPrice: totalPrice
            }));
        }
        else if (paymentType === "cod") {
            await dispatch(codOrder({
                items: items,
                shippingAddress: shipAddress,
                totalPrice: totalPrice
            }));
            navigate("/orderplaced");
        }
    }

    useEffect(() => {
        if (sessionurl) {
            window.location.href = sessionurl;
        }
    }, [sessionurl]);

    return (
        <>
            <Navbar />
            <MenuNavbar />
            <section className=' max-w-[1200px] h-[700px] my-16 m-auto mt-16 flex flex-col p-6 gap-9 border border-gray-300'>
                <p className='text-[26px] font-medium'>Shipping Details</p>
                <div className="flex justify-center items-center w-full">
                    <form action="" className='text-[16px] flex flex-col gap-9' onSubmit={handlePayment}>
                        <input type="text" placeholder='Enter your country' className='px-3 w-[200px] h-[39px] bg-gray-100'
                            onChange={(e) => setshipAddress({ ...shipAddress, country: e.target.value })} />

                        <input type="text" placeholder='Enter your city' className='px-3 w-[200px] h-[39px] bg-gray-100'
                            onChange={(e) => setshipAddress({ ...shipAddress, city: e.target.value })} />

                        <input type="text" placeholder='Enter your home address' className='px-3 w-[250px] h-[89px] bg-gray-100' onChange={(e) => setshipAddress({ ...shipAddress, address: e.target.value })} />

                        <input type="text" placeholder='Enter your phone number' className='px-3 w-[250px] h-[39px] bg-gray-100' onChange={(e) => setshipAddress({ ...shipAddress, phone: e.target.value })} />

                        <div className='w-[400px] flex justify-center items-center gap-1'>
                            <p className='text-[16px] font-medium'>Select Payment Type</p>
                            <div className='h-[19px] w-[200px] flex items-center gap-3'>
                                <input type="radio" name='group1' value="online" checked={paymentType === "online"}
                                    onChange={(e) => setpaymentType(e.target.value)} />
                                <label>Pay Online (Stripe)</label>
                            </div>
                            <div className='h-[19px] w-[250px] flex items-center gap-3'>
                                <input type="radio" name='group1' value="cod" checked={paymentType==="cod"} onChange={(e) => { setpaymentType(e.target.value) }} />
                                <label>Cash On Delivery (COD)</label>
                            </div>

                        </div>

                        <button disabled={items.length === 0} className={`w-[248px] h-[54px] text-white text-[18px] bg-[#00B517] rounded-lg ${items.length === 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
                        >
                            {paymentType==="online" ? "Proceed to payment":"Place Order"}
                        </button>
                    </form>
                    <div className="flex flex-col">

                        <div className='w-[690px] h-[500px] border border-gray-300 overflow-y-scroll scrollbar-hide'>
                            {items.length > 0 ? items.map((item) => (
                                <div className="w-[630px] h-[136px] m-auto flex gap-3 border border-gray-300 justify-between items-center p-3  my-3" key={item.product._id}>
                                    <div className="flex gap-2">
                                        <img src={item.product.img} alt="" className='w-16 h-16' />
                                        <div className="flex flex-col gap-5">
                                            <div className='w-[462px] h-[22px] text-[16px] font-medium'>{item.product.name}</div>
                                            <div className='text-[#8B96A5] text-[16px] w-[429px] h-7'>Size: medium, Color: blue,  Material: Plastic
                                                Seller: Artel Market
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between px-3">
                                        <div className='text-[16px] font-medium'>${item.product.price}</div>
                                        <div className='text-[16px]'>Qty: {item.quantity}</div>
                                    </div>

                                </div>
                            ))
                                : <div key="empty-key">cart is empty</div>
                            }
                        </div>
                        <div className="flex justify-between items-center w-full mt-6">
                            <p className='font-medium text-16px'>Total: ${Math.floor(totalPrice)}</p>
                            <button className='w-[110px] h-[39px] rounded-md text-[16px] bg-[#0067FF] text-white cursor-pointer' onClick={() => navigate("/cart")}>Back to cart</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ShippingDetails