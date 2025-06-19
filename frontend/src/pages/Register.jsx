import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { asyncregisteruser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    dispatch(asyncregisteruser(user));
    navigate("/login")
  };
  return (
    <form
      onSubmit={handleSubmit(RegisterHandler)}
      className="flex flex-col w-1/2  jsutify-start items-start" 
    >
      <input
        {...register("username")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        type="text"
        placeholder="John doe"
      />
      <input
        {...register("email")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        type="email"
        placeholder="john@doe.com"
      />
      <input
        {...register("password")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        type="password"
        placeholder="*******"
      />
      
      <button className="mt-5 px-5 py-2 bg-blue-500 rounded-2xl">Register User</button>


      <p>
        Already have an account ? <Link className="text-blue-400 " to="/Login">Login</Link> 
      </p>
    </form>
  );
};

export default Register;
