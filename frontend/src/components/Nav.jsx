import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { asynclogoutuser } from "../store/actions/userActions";

const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.users);
  const navigate = useNavigate()

  const LogoutHandler = () =>{
    dispatch(asynclogoutuser())
    Navigate("/")
  }

  return (
    <nav className="mb-10 flex justify-center items-center gap-x-5 p-10">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      {user ? (
        <>
          <NavLink to="/admin/create-product">Create Product</NavLink>
          <button onClick={LogoutHandler}>Log Out</button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}

      
    </nav>
  );
};

export default Nav;
