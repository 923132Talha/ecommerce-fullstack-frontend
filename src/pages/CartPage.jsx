import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import MenuNavbar from '../components/MenuNavbar'
import { useSelector, useDispatch } from 'react-redux'
import { getCart, deletefromCart } from '../store/reducers/addtocartSlice'
import { useNavigate } from 'react-router-dom'
import ProductList from "../components/Home/ProductList"
import "../index.css"

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, cartLoading } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const handleDelete = async (productId) => {
    await dispatch(deletefromCart(productId));
    dispatch(getCart());
  }

  const totalPrice = Array.isArray(items) ? items.reduce((acc, item) => acc + item.product.price * item.quantity, 0) : 0;
  if (cartLoading) {
    return <div className='fixed inset-0 bg-white flex justify-center items-center z-50'>
      <img src="/loading.gif" alt="loading" className='w-32 h-32' />
    </div>
  }
  return (
    <>
      <Navbar />
      <MenuNavbar />
      <div className="flex w-[1380px] h-[562px] my-9 m-auto justify-center items-center gap-3">
        <div className='w-[880px] h-[592px] flex flex-col justify-center gap-3 p-3 my-3'>
          <span className='text-[24px] font-semibold'>My Cart {`(${items.length})`}</span>
          <div className='w-[880px] h-[592px] border border-gray-300 overflow-y-scroll scrollbar-hide'>
            {items.length > 0 ? items.map((item) => (
              <div className="w-[840px] h-[136px] m-auto flex gap-3 border border-gray-300 justify-between items-center p-3  my-3" key={item.product._id}>
                <div className="flex gap-2">
                  <img src={item.product.img} alt="" className='w-16 h-16' />
                  <div className="flex flex-col gap-5">
                    <div className='w-[462px] h-[22px] text-[16px] font-medium'>{item.product.name}</div>
                    <div className='text-[#8B96A5] text-[16px] w-[429px] h-7'>Size: medium, Color: blue,  Material: Plastic
                      Seller: Artel Market
                    </div>
                    <div className="flex gap-2 text-[13px]">
                      <button className='w-[70px] h-[30px] text-[#FA3434] border border-[#DEE2E7] cursor-pointer' onClick={() => handleDelete(item.product._id)}>Remove</button>
                      <button className='w-[103px] h-[30px] text-[#0D6EFD] border border-[#DEE2E7] cursor-pointer'>Save for later</button>
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
          <button className='w-[130px] h-[59px] rounded-md text-[16px] bg-[#0067FF] text-white cursor-pointer' onClick={() => navigate("/products")}>Back to shop</button>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">

          <img src="/cart/couponblock.png" alt="" className='w-[280px] h-[110px]' />

          <div className="flex flex-col justify-around items-center w-[280px] h-[302px] border border-gray-300">
            <div className="flex flex-col">

              <div className="w-[280px] flex justify-around items-center text-[#505050] text-[16px]">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="w-[280px] flex justify-around items-center text-[#FA3434] text-[16px]">
                <span>Discount:</span>
                <span>-$60.00</span>
              </div>
              <div className="w-[280px] flex justify-around items-center text-[#00B517] text-[16px]">
                <span>Tax:</span>
                <span>+$14</span>
              </div>
            </div>

            <div className="w-[280px] flex flex-col gap-3 justify-around items-center text-[#505050] font-semibold">
              <div className='w-[280px] flex justify-around'>
                <span className='text-[16px]'>Total:</span>
                <span className='text-[20px]'>${totalPrice.toFixed(2)}</span>
              </div>
              {

              }
              <button disabled={items.length === 0} className={`w-[248px] h-[54px] text-white text-[18px] bg-[#00B517] rounded-lg ${items.length === 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={() => (navigate(`/shipdetails`))}>
                Checkout
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="w-[990px] h-[90px] m-auto flex justify-start gap-9">
        <img src="/cart/securepayment.png" className='w-[242px] h-12' />
        <img src="/cart/customersupport.png" className='w-[242px] h-12' />
        <img src="/cart/freedelivery.png" className='w-[242px] h-12' />
      </div>

      <ProductList />

      <img src="/products/discountbanner.png" className='w-[1180px] h-[120px] m-auto' />
      <img src="/footer.png" className='w-full h-[324px] mt-9' />

    </>
  )
}

export default CartPage