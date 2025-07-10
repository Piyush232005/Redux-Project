import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from "../../store/actions/userActions";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    userReducer: { users },
  } = useSelector((state) => state);

  // Always call hooks unconditionally
  const { register, reset, handleSubmit } = useForm();
  // Reset form values when product is available
  useEffect(() => {
    if (users) {
      reset({
        username: users.username,
        email: users.email,
        password: users.password,
      });
    }
  }, [users, reset]);

  const UpdateUserHandler = (user) => {
    dispatch(asyncupdateuser(users.id, user));
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteuser(users.id))
    navigate("/login");
  };

  const LogoutUserhandler = () => {
    dispatch(asynclogoutuser())
    navigate("/login");
  };

  if (!users) {
    return (
      <div className="text-center text-xl mt-10 text-gray-500">
        Loading product...
      </div>
    );
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(UpdateUserHandler)}
        className="flex flex-col w-full justify-start items-start"
      >
        <input
          {...register("username")}
          className="mb-3 outline-0 border-b p-2 text-4xl w-full"
          type="text"
          placeholder="Johne-Doe"
        />
        <input
          {...register("email")}
          className="mb-3 outline-0 border-b p-2 text-4xl w-full"
          type="email"
          placeholder="johndoe@example.com"
        />
        <input
          {...register("password")}
          className="mb-3 outline-0 border-b p-2 text-4xl w-full"
          type="password"
          placeholder="********"
        />
        <button
          type="submit"
          className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-2xl"
        >
          Update user
        </button>
        <button
          onClick={DeleteHandler}
          type="button"
          className="mt-5 px-6 py-3 bg-red-500 text-white rounded-2xl"
        >
          Delete user
        </button>
        <button
          onClick={LogoutUserhandler}
          type="button"
          className="mt-5 px-6 py-3 bg-red-500 text-white rounded-2xl"
        >
          Logout user
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
