import React from 'react';

import './App.css';

function App() {
  return (
<div className="flex overflow-hidden relative flex-col items-center pt-20 text-center text-black max-sm:mx-auto">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="box-border flex relative flex-col shrink-0">
      <div className="relative justify-center px-7 py-8 mt-8 text-4xl text-white whitespace-nowrap bg-neutral-800 max-md:px-5 transform rotate-[-15deg]">
        白金瑪麗
      </div>
      </div>
      <div className="font-semibold relative mt-14 text-4xl max-md:mt-10">
        已蒐集到的店家清單​
      </div>
      <div className="font-semibold relative mt-16 text-4xl max-md:mt-10">10/12 Bar Mood</div>
      <div className="font-semibold relative mt-8 text-4xl max-md:max-w-full">
        11/29 To Infinity and Beyond
      </div>
      <button className="flex relative flex-col shadow-xl shadow-black shrink-0 mt-72 max-w-full bg-white h-[93px] w-[561px] max-md:mt-10 transform rotate-[-10]">
        <div className="box-border relative shrink-0  self-center mt-5 h-auto text-4xl font-semibold">
          點這集點
        </div>
      </button>
      <div className="relative">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className=" transform rotate-[20deg] flex flex-col w-6/12 mr-10 max-md:ml-0 max-md:w-full">
            <button className="relative justify-center  px-7  mr-10 text-2xl text-white whitespace-nowrap bg-neutral-800 max-md:px-5">
            LINE POINTS<br/>兌換
            </button>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <button className="relative transform rotate-[-20deg] justify-center px-7 py-5  ml-20 text-2xl text-white whitespace-nowrap bg-neutral-800 max-md:px-5">
              已集點店家
            </button>
          </div>
        </div>
      </div>
      <button className="relative shadow-xl shadow-black justify-center px-8 py-6 text-2xl whitespace-nowrap bg-white s max-md:px-5">
        活動店家
      </button>
      <img
      src="https://static.accupass.com/eventintro/2111190607161439126534.jpg"
      className="relative h-40 mt-10 w-full aspect-[5.88]"
      alt="Relevant alternative text describing the image"
      />
    </div>
  );
}

export default App;
