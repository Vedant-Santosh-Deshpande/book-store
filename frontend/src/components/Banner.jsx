import React from "react";

const Banner = () => {
  const banner = 'Banner.jpg'
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <div className="text-4xl font-bold">
              Hello, Welcome here to learn something
              <span className="text-pink-500"> new Today!!!</span>{" "}
            </div>
            <p className="text-xl">
              Expand your knowledge with our expert-curated courses! Whether
              you're a passionate reader, an aspiring writer, or a curious
              learner, we have something for you. Dive into the world of
              literature, enhance your storytelling skills, and explore
              insightful book discussions. Join us today and start your journey
              towards mastering the art of reading and writing!
            </p>
            <label className="input validator input-bordered flex items-center gap-2 mt-12">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn mt-6 btn-secondary">Get Started</button>
        </div>
        <div className=" order-1 w-full md:w-1/2">
          <img src={banner} alt="Banner" className="w-192 h-192 " />
        </div>
      </div>
    </>
  );
};

export default Banner;
