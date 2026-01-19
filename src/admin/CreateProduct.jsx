import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../store/reducers/productSlice';

const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.products);

  const [imgfile, setFile] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    desc: "",
    category: "",
    stock: "",
    img: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = new FormData();

    productData.append("name", formData.name)
    productData.append("price", formData.price)
    productData.append("desc", formData.desc)
    productData.append("category", formData.category)
    productData.append("stock", formData.stock);

    if (imgfile) {
      productData.append("img", imgfile)
    };

   const response= await dispatch(createProduct(productData));
    if(createProduct.fulfilled.match(response)){
      navigate("/admin")
    }

  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImg(reader.result);
    }
    if (file) { reader.readAsDataURL(file) };
  }

  return (
    <div className="w-[1180px] m-auto my-16 flex flex-col gap-6">
      <h1 className="text-[29px] font-semibold">Create Product</h1>
      <form className="flex flex-col gap-9" encType='multipart/form-data' onSubmit={handleSubmit}>
        {/* Product name */}
        <div className="flex w-[600px] justify-around items-center text-[20px]">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Product name"
            className="bg-gray-100 text-[#8B96A5] p-2 rounded-md h-9 w-[300px]"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        {/* Product price */}
        <div className="flex w-[600px] justify-around items-center text-[20px]">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            placeholder="Product price"
            className="bg-gray-100 text-[#8B96A5] p-2 rounded-md h-9 w-[300px]"
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
        </div>

        {/* Product description */}
        <div className="flex w-[600px] justify-around items-center text-[20px]">
          <label>Desc:</label>
          <input
            type="text"
            name="desc"
            placeholder="Product description"
            className="bg-gray-100 text-[#8B96A5] p-2 rounded-md h-[100px] w-[300px]"
            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
            required
          />
        </div>

        {/* Product category */}
        <div className="flex w-[600px] justify-around items-center text-[20px]">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            placeholder="Product category"
            className="bg-gray-100 text-[#8B96A5] p-2 rounded-md h-9 w-[300px]"
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          />
        </div>

        {/* Product stock */}
        <div className="flex w-[600px] justify-around items-center text-[20px]">
          <label>Stock:</label>
          <input
            type="text"
            name="stock"
            placeholder="Stock"
            className="bg-gray-100 text-[#8B96A5] p-2 rounded-md h-9 w-[300px]"
            onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
            required
          />
        </div>

        {/* Image upload */}
        <div className="flex w-[600px] justify-start gap-9 px-9 items-center text-[20px]">
          <label>Image:</label>
          <input
            type="file"
            onChange={handleImageUpload}
            name='p-img'
          />
        </div>

        {/* Preview image */}
        {selectedImg && (
          <div className="mt-4">
            <img
              src={selectedImg}
              alt="Selected preview"
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white p-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Creating Product..." : "Create Product"}
        </button>

        {/* Error display */}
        {error && <p className="text-red-500 mt-2 text-center">Error: {error}</p>}
      </form>
    </div>
  );
};

export default CreateProduct;
