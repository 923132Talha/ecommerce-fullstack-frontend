import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/reducers/productSlice.js'

const ProductItems = () => {

  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <section className='max-w-[1180px] h-[696px] m-auto my-6 flex flex-col gap-3'>
      <p className='text-[24px] font-semibold'>Recommended items</p>
      <div className="flex flex-wrap gap-5">

        {
          loading && <div className='fixed inset-0 bg-white flex justify-center items-center z-50'>
            <img src="/loading.gif" alt="" className='w-32 h-32' />
          </div>
        }

        {
          error && <div className='w-full h-full bg-white text-black text-[39px] flex justify-center items-center'>{error}</div>
        }

        {/*PRODUCT ITEMS*/}
        {products.slice(0,10).map((p) => {
          return (
            <div key={p._id} onClick={()=>navigate(`/product/${p._id}`)} className="w-[220px] h-[310px] p-6 flex flex-col justify-center items-center gap-3 border border-gray-200 cursor-pointer">
              <div className="w-[200px] h-[200px] m-auto">
                <img src={p.img} alt="" className="w-39 h-36" />
              </div>
              <p className='text-[16px] font-medium text-black'>{p.price}</p>
              <p className='text-[16px] text-black'>{p.name}</p>
            </div>
          )

        })
        }
      </div>
    </section>
  )
}

export default ProductItems