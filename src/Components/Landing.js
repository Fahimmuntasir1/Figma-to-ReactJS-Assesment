/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Landing = () => {
  return (
    <div className="flex h-screen items-center">
      <div>
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T172705Z&X-Amz-Expires=86400&X-Amz-Signature=bcc0d7f34a2052fa5481f098ef69c0514a373bd2a7673e6ea538a5240734a690&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
          alt="image"
        />
      </div>
      <div>
        <h2 className="text-[64px] font-[700]">
          Imagine if{" "}
          <span className="bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-transparent">
            Snapchat
          </span>{" "}
          had events.
        </h2>
      </div>
    </div>
  );
};

export default Landing;
