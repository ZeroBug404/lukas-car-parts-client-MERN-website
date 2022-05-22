import React from "react";
import bgCar from '../../images/bg-car.webp'

const Banner2 = () => {
  return (
    <div className="text-slate-900 font-bold">
      <div className="py-12 h-96 text-center bg-slate-200">
          <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl">ALL KINDS OF PARTS THAT YOU NEED CAN FIND HERE</h1>
        <button class="btn btn-warning my-6">Warning</button>
        </div>
      </div>
      <div style={{marginTop: '-130px'}} className="flex justify-center">
          <img className="" src={bgCar} alt="" />
      </div>
    </div>
  );
};

export default Banner2;
