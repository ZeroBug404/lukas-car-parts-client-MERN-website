import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState({})


  console.log(userInfo);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // const name = data.name;
    // const email = data.email;
    // const password = data.password;

    const userDetail = {
      education: data.education,
      address: data.address,
      phone: data.phone
    }
    fetch(`http://localhost:5000/usersDetail/${user.email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetail),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          toast.success('Your profile is updated')
          // setUserInfo(data)
        });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/usersDetail/${user.email}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUserInfo(data)
    })
  },[user])

  return (
    <div className="text-slate-900">
      <div class=" ">
        <div class="flex justify-between">
          <div className="flex flex-col justify-start">
            <p className="font-medium">Name:</p>
            <h2 className="text-2xl font-semibold mb-3">{user.displayName}</h2>
            <p className="font-medium">Email:</p>
            <h2 className="text-2xl font-semibold mb-3">{user.email}</h2>
            {/* {
              userInfo?.map(info => <>
              <p className="font-medium">Address:</p>
              <h2 className="text-2xl font-semibold">{info.address}</h2>
              </>)
            } */}
              <p className="font-medium">Address:</p>
              <h2 className="text-2xl font-semibold mb-3">{userInfo.address}</h2>
              <p className="font-medium">Education:</p>
              <h2 className="text-2xl font-semibold mb-3">{userInfo.education}</h2>
              <p className="font-medium">Phone:</p>
              <h2 className="text-2xl font-semibold mb-3">{userInfo.phone}</h2>
          </div>

          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
                <h2 className="text-center text-slate-700 font-semibold text-xl">Complete or Update full profile</h2>
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="education"
                  placeholder="Your Education"
                  className="input input-bordered w-full max-w-xs my-3"
                  {...register("education")}
                />
                <input
                  type="address"
                  placeholder="Address"
                  className="input input-bordered w-full max-w-xs my-3"
                  {...register("address")}
                />
                <input
                  type="phone"
                  placeholder="Phone number"
                  className="input input-bordered w-full max-w-xs my-3"
                  {...register("phone")}
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
