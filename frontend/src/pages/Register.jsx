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
    navigate("/login");
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <form
          onSubmit={handleSubmit(RegisterHandler)}
          className="text-gray-100 space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-white">Register</h2>

          <input
            {...register("username")}
            className="w-full p-3 bg-white/20 text-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="John Doe"
          />
          <input
            {...register("email")}
            className="w-full p-3 bg-white/20 text-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            placeholder="john@doe.com"
          />
          <input
            {...register("password")}
            className="w-full p-3 bg-white/20 text-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="••••••••"
          />

          <button
            type="submit"
            className="w-full bg-white text-blue-600 py-3 rounded-md hover:bg-gray-100 transition duration-300 font-semibold"
          >
            Register
          </button>

          <p className="text-center text-gray-200">
            Already have an account?{" "}
            <Link
              className="text-blue-300 hover:underline font-medium"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
