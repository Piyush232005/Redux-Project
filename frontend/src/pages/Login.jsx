import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncloginuser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginHandler = (user) => {
    console.log(user);
    dispatch(asyncloginuser(user));
    navigate("/");
  };

  return (
    <div
      className=" flex items-center justify-center min-h-screen bg-cover bg-center"
    >
      {/* Glassmorphism container */}
      <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <form
          onSubmit={handleSubmit(LoginHandler)}
          className="text-gray-100 space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-white">Login</h2>

          <input
            {...register("email")}
            className="w-full p-3 bg-white/20 text-white placeholder-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            placeholder="Email ID"
          />
          <input
            {...register("password")}
            className="w-full p-3 bg-white/20 text-white placeholder-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full bg-white text-blue-600 py-3 rounded-md hover:bg-gray-100 transition duration-300 font-semibold"
          >
            Login
          </button>

          <p className="text-center text-gray-200">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-300 hover:underline font-medium"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
