/* eslint-disable no-unused-vars */
import React from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../Hooks/useToken";
import Loading from "../Shared/Loading";


const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser)

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;


    await createUserWithEmailAndPassword(email, password);

    await updateProfile({ displayName: name })

  };

  if (user || gUser) {
    navigate("/");
    // console.log(user, gUser);
  }

  if(token) {
    navigate('/dashboard')
  }

  let signInError;
  if (error || gError || updateError) {
    signInError = (
      <small className="text-red-500">
        {error?.message} || {gError?.message} || {updateError?.message}
      </small>
    );
  }

  if(loading || gLoading || updating){
    return <Loading></Loading>
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl text-slate-700">
        <div className="card-body">
          <h2 className="font-bold text-4xl text-center">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="name"
              placeholder="Fullname"
              className="input input-bordered w-full max-w-xs my-3"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name?.type === "required" && (
              <span className="text-red-500">Name is required</span>
            )}
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
            {signInError}
            <input
              className="btn btn-warning w-full max-w-xs my-3"
              type="submit"
              value="register"
            />
          </form>

          <div className="text-center">
            <p>
              Already registered?{" "}
              <Link to={"/Login"} className="text-primary">
                Login
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

export default Register;
