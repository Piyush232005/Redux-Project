import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asynccreateproduct } from "../../store/actions/ProductActions";

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CreateProductHandler = (product) => {
    product.id = nanoid();
    console.log(product);

    dispatch(asynccreateproduct(product));
    navigate("/products");
  };
  return (
    <form
      onSubmit={handleSubmit(CreateProductHandler)}
      className="flex flex-col w-1/2  jsutify-start items-start"
    >
      <input
        {...register("image")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        type="text"
        placeholder="image url"
      />
      <input
        {...register("title")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        type="text"
        placeholder="title"
      />
      <input
        {...register("price")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        type="number"
        placeholder="0.000"
      />
      <textarea
        {...register("discription")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        type="password"
        placeholder="Enter discription here"
      ></textarea>
      <input
        {...register("category")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        type="text"
        placeholder="category name"
      />

      <button className="mt-5 px-5 py-2 bg-blue-500 rounded-2xl">
        Create product{" "}
      </button>
    </form>
  );
};

export default CreateProduct;
