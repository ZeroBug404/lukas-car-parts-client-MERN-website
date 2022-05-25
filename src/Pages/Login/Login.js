/* eslint-disable no-unused-vars */
import React from 'react';
import {  useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
      console.log(data)
      const name = data.name;
      const email = data.email;
      const password = data.password;

      signInWithEmailAndPassword(email, password)
    };

    if(user || gUser) {
        navigate(from, { replace: true });
    }

    if(loading || gLoading){
        <Loading></Loading>
    }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl text-slate-700">
        <div className="card-body">
          <h2 className="font-bold text-4xl text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs my-3"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              })}
            />
            {errors.email?.type === "required" && (
              <span className="text-red-500">Email is required</span>
            )}
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs my-3"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password?.type === "required" && (
              <span className="text-red-500">Password is required</span>
            )}
            {/* {signInError} */}
            <input
              className="btn btn-warning w-full max-w-xs my-3"
              type="submit"
              value="Login"
            />
          </form>

          <div className="text-center">
            <p>
              Don't have any account?{" "}
              <Link to={"/register"} className="text-primary">
                Register
              </Link>
            </p>
          </div>

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-warning"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;