import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/reducers/productSlice";
import { checkUser } from '../store/reducers/userSlice';
import BreadCrumb from '../components/Products/BreadCrumb';
import CategoryBar from '../components/Products/CategoryBar';
import Navbar from '../components/Navbar';
import MenuNavbar from '../components/MenuNavbar';
import "../index.css";
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/reducers/addtocartSlice';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector(state => state.products);
  const { isAuthenticated, user } = useSelector(state => state.user);
  const query = useSelector(state => state.search.query);

  const [filter, setFilter] = useState({
    category: "",
    brand: [],
    maxPrice: 9000
  });

  const handleCart = (productId, quantity) => {
    if (isAuthenticated) {
      dispatch(addToCart({ productId, quantity }));
      navigate("/cart");
      if (user.isAdmin) {
         navigate("/admin")
       }
    }
    else {
      navigate("/login");
    }
  }

  useEffect(() => {
    dispatch(checkUser());
    dispatch(getAllProducts());
  }, [dispatch]);

  const filteredProducts = products.filter(product => {
    const searchMatch = product.name?.toLowerCase().includes(query.toLowerCase());
    const categoryMatch = filter.category ? product.category === filter.category : true;
    const brandMatch = filter.brand.length === 0 || filter.brand.includes(product.brand);
    const priceMatch = product.price <= filter.maxPrice;

    return searchMatch && categoryMatch && brandMatch && priceMatch;
  });

  return (
    <>
      <Navbar />
      <MenuNavbar />
      <BreadCrumb />
      <div className="flex justify-start gap-9 items-center relative">
        <CategoryBar
          setCategory={(category) => setFilter({ ...filter, category })}
          setPrice={(price) => setFilter({ ...filter, maxPrice: price })}
        />

        <article className='w-full max-w-[1100px] h-[1430px] flex flex-col border border-gray-300 scrollbar-hide overflow-y-scroll'>

          <div className="hidden md:flex w-full h-[62px] py-9 border border-gray-300 justify-around items-center text-[16px]">
            <div className='w-[251px] h-[19px]'>12,911 items in <span className='font-bold'>{filter.category || 'All Categories'}</span></div>
            <div className="flex gap-1">
              <div className='w-36 h-9 flex justify-center items-center gap-2 border border-gray-300'>
                <input type="checkbox" />
                <label>Verified only</label>
              </div>
              <div className='w-36 h-9 flex justify-around items-center gap-3 border border-gray-300'>
                <label>Featured</label>
                <select></select>
              </div>
            </div>
          </div>

          {loading && (
            <div className='fixed inset-0 bg-white flex justify-center items-center z-50'>
              <img src="/loading.gif" alt="loading" className='w-32 h-32' />
            </div>
          )}

          {error && (
            <div className='w-full h-full bg-white text-black text-[39px] flex justify-center items-center'>
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className='bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow-md transition relative cursor-pointer'
              >
                <div className="w-full h-48 flex justify-center items-center mb-3">
                  <img src={product.img} alt={product.desc} className="h-full object-contain" />
                </div>

                <div className="flex gap-2 items-center">
                  <span className="text-lg font-bold">${product.price}</span>
                  <span className="text-gray-400 line-through">${"1128.00"}</span>
                </div>

                <div className="flex items-center gap-1 text-orange-500">
                  <img src="/cart/r4.png" className='w-20 h-[15px]' />
                  <span className='text-[16px] text-[#8B96A5]'>{"7.5"}</span>
                </div>

                <p className="text-gray-700 text-sm mt-1">{product.name}</p>

                <div className='text-[16px] text-blue-600' onClick={() => navigate(`/product/${product._id}`)}>See details</div>

                <button className="absolute top-2 right-2 w-8 h-8 rounded-full border flex justify-center items-center bg-white cursor-pointer" onClick={() => handleCart(product._id, 1)}>
                  <img src="/cart/addtocarticon.png" alt="wishlist" className="w-4" />
                </button>
              </div>
            ))}
          </div>

        </article>
      </div>
      <img src="/footer.png" className="w-full" />
    </>
  );
};

export default ProductListingPage;
