import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PostForm from "../components/post/PostForm";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";
import { loadUser } from "../redux/actions/auth";
import store from "../redux/store";
import setAuthToken from "../utils/setAuthToken";

export const Routing = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route index path='login' element={<Login />} />
      <Route path='new' element={<PostForm />} />
      <Route path='post/:id' element={<PostForm />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
