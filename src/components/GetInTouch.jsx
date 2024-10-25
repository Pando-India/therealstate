import React, { useState } from "react";

function GetInTouch() {
  const [formData, setFormData] = useState({
    fName: "",
    mNumber: "",
    email: "",
    msg: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add mortgage calculation logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full bg-[#effcf6]  py-10 mb-10" id="Contact">
      <p className="text-[36px] text-black text-center font-semibold">Get In Touch</p>
      <div className=" lg:mx-auto flex gap-10 lg:w-[1100px] md:flex-row-reverse flex-col w-full items-center  px-3">
        {/* form */}
        <div className="py-5 px-4 mx-8 md:mx-auto md:px-10 bg-white md:w-[30rem] w-full 2xl:max-w-lg rounded-3xl flex flex-col items-center justify-center max-w-md">
          {/* <img src={contactIcon} alt="" className="text-center" /> */}
          <p className="text-lg font-semibold">Contact Us Form</p>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col md:flex-row md:gap-2 gap-0 mt-9">
              <div className="flex flex-col w-full text-left mb-4 md:mb-0">
                <label htmlFor="firstName" className="text-sm ml-2 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="py-3 pl-4 text-[#ADADAD] text-[12px] rounded-lg w-full border-[#E6E6E6] border"
                  value={formData.fName}
                  onChange={(e) =>
                    setFormData({ ...formData, fName: e.target.value })
                  }
                />
                <p className="text-[10px] text-red-500 h-1 ml-2">
                  {/* {errors.firstName && <span>This field is required</span>} */}
                </p>
              </div>
            </div>

            <div className="flex flex-col text-left mt-6">
              <label htmlFor="mno" className="text-sm ml-2 mb-1">
                Mobile No.<sup className="text-red-500 text-sm">*</sup>
              </label>
              <input
                type="text"
                placeholder="+1 8452 4144 222"
                className="py-3 pl-4 rounded-lg text-[12px] w-full border-[#E6E6E6] border"
                value={formData.mNumber}
                onChange={(e) =>
                  setFormData({ ...formData, mNumber: e.target.value })
                }
              />
              <p className="text-[10px] text-red-500 h-1 ml-2">
                {/* {errors.Mob && <span>This field is required</span>} */}
              </p>
            </div>

            <div className="flex flex-col text-left mt-6">
              <label htmlFor="email" className="text-sm ml-2 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="deepakpatel@zamplia.com"
                className="py-3 pl-4 rounded-lg text-[12px] w-full border-[#E6E6E6] border"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <p className="text-[10px] text-red-500 h-1 ml-2">
                {/* {errors.Mob && <span>This field is required</span>} */}
              </p>
            </div>

            <div className="flex flex-col text-left mt-6">
              <label htmlFor="message" className="ml-2 text-sm mb-1">
                Message<sup className="text-red-500 text-sm">*</sup>
              </label>
              <textarea
                placeholder="Please provide more details about your inquiry"
                className="py-3 pl-4 pb-8 rounded-lg text-[12px] w-full border-[#E6E6E6] border resize-none outline-none"
              />
            </div>

            <input
              type="submit"
              value="Submit"
              className="w-full p-3 px-10 bg-[#0C9A5A] text-white rounded-full my-5 hover:bg-green-500"
            />
          </form>
        </div>
        {/* text */}
        {/* <div className=" mx-auto text-white">
          <h2 className="text-4xl font-semibold mb-3">Get in touch</h2>
          <p className="font-semibold text-lg mt-6">
            Are you ready to find your rhythm? Join <br /> our recreational
            dance program today <br /> and dance your way to confidence, <br />{" "}
            fitness, and fun!
          </p>
        </div> */}
        {/* map */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d55705.52889560498!2d79.55111098608288!3d29.235448656967286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDEyJzU3LjAiTiA3OcKwMzEnNDUuNSJF!5e0!3m2!1sen!2sin!4v1729763586337!5m2!1sen!2sin"
            width="600"
            height="450"
            className="rounded-2xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
