import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts, deleteProduct } from "../store/reducers/productSlice.js"

const ProductList = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch,loading]);

    return (
        <div className='min-h-screen p-16'>
            <table>

                <thead className='border-gray-100'>
                    <tr>
                        <th className="border px-4 w-[139px] py-2 text-left">Image</th>
                        <th className="border px-4 w-[559px] py-2 text-left">Name</th>
                        <th className="border px-4 py-2 text-left">Price</th>
                        <th className="border px-4 py-2 text-left">Category</th>
                        <th className="border px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((p) => (
                            <tr key={p._id}>
                                <td className="border px-4 w-[139px] py-2 text-left"><img src={p.img} alt={p.name} /></td>
                                <td className="border px-4 w-[559px] py-2 text-left">{p.name}</td>
                                <td className="border px-4 py-2 text-left">{p.price}</td>
                                <td className="border px-4 py-2 text-left">{p.category}</td>
                                <td className="border px-4 py-2 text-left cursor-pointer"><button onClick={async() => await dispatch(deleteProduct(p._id)) }>delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList