import React from 'react';

import './App.css';

function App() {
  return (
        <div className="flex overflow-hidden relative flex-col items-center pt-20 max-w-screen text-center text-black min-h-screen max-sm:max-w-screen">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6026a6907b51d17b0ea1e63588565a4b6863904eeb356879a79be279f37be5?apiKey=92d2ace5b6b846329a527a22fb567ac3&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative justify-center transform rotate-[-10deg] px-7 py-8 mt-8 text-4xl text-white whitespace-nowrap bg-neutral-800 max-md:px-5">
            白金瑪麗
          </div>
          <div className="relative mt-20 text-4xl max-md:mt-10">
            已蒐集到的店家清單​
          </div>
          <div className="relative mt-12 text-4xl max-md:mt-10">10/12 Bar Mood</div>
          <div className="relative mt-14 text-4xl max-md:mt-10 max-md:max-w-full">
            11/29 To Infinity and Beyond
          </div>
          <button className="flex relative flex-col shadow-xl shadow-black shrink-0 mt-72 max-w-full transform rotate-[-5deg] bg-white h-[80px] w-[561px] max-md:mt-25 max-sm:w-[80%]">
            <div className="box-border relative shrink-0 self-center mt-5 h-auto text-3xl font-semibold">
              點這集點
            </div>
          </button>
          <div className="flex relative flex-row">
            <div className="mt-0 box-border shrink-0 self-center h-auto font-semibold relative transform rotate-[10deg] justify-center ml-5 px-7 py-8 text-4xl text-white whitespace-nowrap bg-neutral-800 max-md:px-2.5 max-md:py-1.5 max-md:mr-12 max-sm:px-2.5 max-sm:pt-1.5 max-sm:pb-2 max-sm:mr-5 max-sm:text-xl">
            LINE POINTS<br/>兌換
            </div>
            <div className="mt-0 box-border shrink-0 self-center h-auto font-semibold relative transform rotate-[-10deg] justify-center ml-5 px-7 py-8 text-4xl text-white whitespace-nowrap bg-neutral-800 max-md:px-2.5 max-md:py-1.5 max-md:mr-12 max-sm:px-2.5 max-sm:pt-1.5 max-sm:pb-2 max-sm:mr-5 max-sm:text-2xl">
            已集點店家
            </div>
          </div>
          <div className="shadow-xl shadow-black relative font-semibold justify-center px-8 py-6 mt-0 text-3xl whitespace-nowrap bg-white max-md:px-5">
            活動店家
          </div>
          <img
            src="https://static.accupass.com/eventintro/2111190607161439126534.jpg"
            className="relative h-full mt-10 w-full aspect-[5.88]"
          />
        </div>
  );
}

export default App;
