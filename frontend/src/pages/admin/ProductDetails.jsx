import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncdeleteproduct,
  asyncUpdateproduct,
} from "../../store/actions/ProductActions";
// import { asyncupdateproduct } from "../redux/actions"; // Make sure to import correctly

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    productReducer: { products },
    userReducer: { users },
  } = useSelector((state) => state);

  // Always call hooks unconditionally
  const { register, reset, handleSubmit } = useForm();

  const product = products.find((product) => String(product.id) === String(id));
  // Reset form values when product is available
  useEffect(() => {
    if (product) {
      reset({
        image: product.image,
        title: product.title,
        price: product.price,
        category: product.category,
        description: product.description,
      });
    }
  }, [product, reset]);

  const UpdateProductHandler = (updatedProduct) => {
    console.log(updatedProduct);
    dispatch(asyncUpdateproduct(id, updatedProduct));
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteproduct(id));
    navigate("/products");
  };

  if (!product) {
    return (
      <div className="text-center text-xl mt-10 text-gray-500">
        Loading product...
      </div>
    );
  }

  return (
    <>
      <div className="w-full flex">
        {product.image ? (
          <img
            className="w-1/2 h-1/2 object-cover"
            src={product.image}
            alt={product.title}
          />
        ) : (
          <div className="w-1/2 h-1/2 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
        <div className="px-3 w-1/2 h-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="mb-4 text-gray-700">{product.description}</p>
          <p className="text-lg font-semibold text-teal-600">
            ${product.price}
          </p>
          <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded-xl">
            Add to cart
          </button>
        </div>
      </div>

      <hr className="my-8" />
      {users && users?.isAdmin && (
        <form
          onSubmit={handleSubmit(UpdateProductHandler)}
          className="flex flex-col w-full justify-start items-start"
        >
          <input
            {...register("image")}
            className="mb-3 outline-0 border-b p-2 text-4xl w-full"
            type="text"
            placeholder="Image URL"
          />
          <input
            {...register("title")}
            className="mb-3 outline-0 border-b p-2 text-4xl w-full"
            type="text"
            placeholder="Title"
          />
          <input
            {...register("price")}
            className="mb-3 outline-0 border-b p-2 text-4xl w-full"
            type="number"
            placeholder="0.000"
          />
          <textarea
            {...register("description")}
            className="mb-3 outline-0 border-b p-2 text-4xl w-full"
            placeholder="Enter description here"
          />
          <input
            {...register("category")}
            className="mb-3 outline-0 border-b p-2 text-4xl w-full"
            type="text"
            placeholder="Category name"
          />

          <button
            type="submit"
            className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-2xl"
          >
            Update Product
          </button>
          <button
            onClick={DeleteHandler}
            type="button"
            className="mt-5 px-6 py-3 bg-red-500 text-white rounded-2xl"
          >
            Delete Product
          </button>
        </form>
      )}
    </>
  );
};

export default ProductDetails;
