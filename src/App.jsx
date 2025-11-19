import React, { useEffect, useRef, useState } from "react";
import BG from "./Components/BG";
import { flightOffers, images } from "./data";

const getRandomNumber = () => Math.floor(Math.random() * 41) - 20 

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const modalWrapperRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if(e.target === modalWrapperRef.current){
        setShowModal(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])
  return (
    <>
      <BG />
      <div className="h-screen flex justify-center items-center isolate">
        <button
          onClick={() => setShowModal(true)}
          className={`group relative cursor-pointer p-3 perspective-midrange
          ${showModal ? 'overflow-visible -rotate-y-25' : 'overflow-hidden'}`}
        >
          <div className="bg-zinc-700 px-7 py-3 border-[3px] border-dotted border-cyan-400 rounded-lg bg-clip-padding hover:-rotate-y-25 transition-transform duration-500">
            <span className={`text-white text-2xl group-hover:-translate-y-24 transition-all duration-300 block delay-300 group-hover:delay-75 ${showModal && '-translate-y-24'}`}>
              Book your flight
            </span>
            <span className={`absolute w-full h-.5 border border-dashed border-white top-1/2 left-0 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right group-hover:delay-200 ${showModal && 'scale-x-100'}`} />
            <img
              src="plane.png"
              alt="Plane icon"
              className={`rotate-90 w-1/3 absolute -left-28 top-1/2 -translate-y-1/2 group-hover:left-20
              group-hover:transition-all group-hover:delay-500 group-hover:duration-500 ${
                showModal && "transition-all! left-44! delay-[0s]! scale-200! opacity-0!"
              }`}
            />
          </div>
        </button>
        <div
        ref={modalWrapperRef}
          className={`flex items-center justify-center bg-fuchsia-500/50 absolute inset-0 w-full 
        h-full transition-opacity duration-300 -z-10 pointer-events-none opacity-0 ${
          showModal &&
             "z-10! opacity-100! pointer-events-auto! delay-500"
            
        }`}
        >
          <div className="relative w-[730px] h-[600px] bg-white rounded-3xl flex flex-col items-center justify-center gap-10">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-5 cursor-pointer hover:scale-110 transition-transform"
            >
              <img src="cancel.jpg" alt="Cancel Icon" width={25} />
            </button>
            <h1 className="text-3xl font-semibold text-gray-800 flex items-center justify-center gap-x-3">
              Book your trip around the{" "}
              <div className="w-24 aspect-square relative">
                <div
                  style={{
                    backgroundImage: 'url("earth.jpg")',
                    backgroundSize: "10rem auto",
                  }}
                  className="w-full h-full rounded-full animate-earth bg-repeat-x shadow-[inset_0_0_1rem_#888,0_0_1rem_#888]"
                ></div>
                <img
                src="plane.png"
                alt="Plane icon"
                className={`absolute right-90 top-1/2 -translate-y-1/2 scale-200 opacity-40 rotate-90 ${
                  showModal && "-right-2! scale-100! transition-all delay-500 duration-500 opacity-100"
                }`}
              />
              </div>
            </h1>
            <div className="flex items-center justify-center gap-6">
              {images.map((img, index) => (
                <img style={{transform: `rotate(${getRandomNumber()}deg)`}} src={img} alt="Image" key={index} className="w-32 aspect-square object-cover border-[3px] border-dotted border-cyan-500 rounded-3xl opacity-80 hover:z-10 hover:opacity-100 hover:scale-125 transition-all" />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 w-full px-10">
              {flightOffers.map((offer, index) => (
                <p key={index}>{offer}</p>
              ))}
            </div>
            <div className="absolute bottom-4 right-4 space-x-2">
              <button className="rounded-sm px-2 py-1 text-xs cursor-pointer bg-cyan-500 text-white hover:bg-cyan-600 transition-colors">Book now</button>
              <button onClick={() => setShowModal(false)} className="rounded-sm px-2 py-1 text-xs cursor-pointer bg-gray-100 border border-gray-300 text-cyan-600 hover:bg-gray-200 transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
