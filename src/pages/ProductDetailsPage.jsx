import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllProducts, getSingleProduct } from '../store/reducers/productSlice'
import Navbar from '../components/Navbar'
import MenuNavbar from '../components/MenuNavbar'

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, singleLoading, singleError } = useSelector(state => state.products);
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch])

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  if (singleLoading) {
    return (<div className='fixed inset-0 bg-white flex justify-center items-center z-50'>
      <img src="/loading.gif" alt="loading" className='w-32 h-32' />
    </div>)
  }

  if (singleError) {
    return (<div className='w-full h-full bg-white text-black text-[39px] flex justify-center items-center'>
      {error}
    </div>)
  }
  return (
    <>
      <Navbar />
      <MenuNavbar />
      <section className='max-w-[1180px] h-[580px] border border-gray-200 m-auto mt-6 flex justify-center items-center gap-3'>
        <div className="border border-[#DEE2E7] p-2">
          <img src={product.img} alt="" className='w-[380px] h-[380px]' />
        </div>
        <div className="w-[430px] h-[514px] flex flex-col gap-3">

          <span className='text-[#00B517] text-[16px]'>In stock</span>
          <span className='text-[20px] font-semibold'>{product.name}</span>

          <div className="w-[366px] h-5 flex justify-center gap-3 items-center">
            <img src="/cart/r4.png" className='w-20 h-[15px]' />
            <span className='text-[16px] text-[#8B96A5]'>154 orders</span>
            <span className='text-[16px] text-[#00B517]'>Free Shipping</span>
          </div>

          <img src="/products/tradeprice.png" alt="" />

          <img src="/products/shortinfo.png" />
        </div>

      </section>
      <div className="flex w-[1200px] gap-6 m-auto my-3">
        <img src="/products/blockdetail.png" alt="" />
        <img src="/products/asideitems.png" alt="" />
      </div>
      {/*PRODUCT ITEMS*/}
      <div className="flex flex-col w-[1180px] m-auto">

        <span className='text-[20px] font-semibold'>Related Products</span>
        <div className="flex flex-wrap gap-5">
          {products.slice(0, 5).map((p) => {
            return (
              <>
                <div key={p._id} className="w-[220px] h-[310px] p-6 flex flex-col justify-center items-center gap-3 border border-gray-200 cursor-pointer">
                  <div className="w-[200px] h-[200px] m-auto">
                    <img src={p.img} alt="" className="w-39 h-36" />
                  </div>
                  <p className='text-[16px] font-medium text-black'>{p.price}</p>
                  <p className='text-[16px] text-black'>{p.name}</p>
                </div>
              </>
            )

          })
          }
        </div>

        <div className="mt-6 mb-16">
          <img src="/products/discountbanner.png" alt="" />
        </div>

      </div>
        <div className='w-full'>
          <img src="/footer.png" alt="" className='w-full'/>
        </div>
    </>
  )
}

export default ProductDetailsPage