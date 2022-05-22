import React from "react";
import banner1 from '../../images/banner-1.webp'
import banner2 from '../../images/banner-2.webp'
import banner3 from '../../images/banner-3.webp'
 
const Special3Service = () => {
  return (
    <div  className="lg:px-12 grid lg:grid-cols-3 sm:grid-cols-1 bg-slate-200 gap-6">
      <div style={{marginTop: '-85px'}} class="bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={banner1}
            alt=""
          />
        </figure>
      </div>
      <div style={{marginTop: '-85px'}} class=" bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={banner2}
            alt=""
          />
        </figure>
      </div>
      <div style={{marginTop: '-85px'}} class="bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={banner3}
            alt=""
          />
        </figure>
      </div>
    </div>
  );
};

export default Special3Service;
