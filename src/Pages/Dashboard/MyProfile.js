import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
  };
  return (
    <div className="text-slate-900">
      <div class=" ">
        <div class="flex justify-between">
          <div className="flex flex-col justify-start">
            <p className="font-medium">Name:</p>
            <h2 className="text-2xl font-semibold mb-3">{user.displayName}</h2>
            <p className="font-medium">Email:</p>
            <h2 className="text-2xl font-semibold">Email: {user.email}</h2>
          </div>

          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
                <h2 className="text-center text-slate-700 font-semibold text-xl">Complete or Update full profile</h2>
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Your Education"
                  className="input input-bordered w-full max-w-xs my-3"
                  {...register("text")}
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full max-w-xs my-3"
                  {...register("text")}
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="input input-bordered w-full max-w-xs my-3"
                  {...register("text")}
                />
                <input
                  className="btn btn-warning w-full max-w-xs my-3"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
