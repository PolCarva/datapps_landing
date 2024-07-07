"use client";
import React, { useEffect, useState, useRef } from "react";
import Advantage from "./ui/Advantage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Advantages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerMarginLeft, setContainerMarginLeft] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const margin = containerRef.current?.offsetLeft || 0;
      setContainerMarginLeft(margin);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      <div ref={containerRef} className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="w-full space-y-4">
          <h2 className="text-3xl md:text-5xl md:w-1/2 font-bold">
            Ventajas de utilizar Datapps en tu colegio
          </h2>
          <div className="w-full flex-col md:flex-row flex items-end justify-between">
            <p className="text-lg md:w-1/2 text-gray-400">
              Te mostramos las razones por las que Datapps puede mejorar la
              organización y rendimiento de tu colegio
            </p>
            <div className="flex gap-2 mt-16 md:mt-6">
              <button id="swiper-button-prev" className="bg-primary swiper-btn hover:border-black hover:bg-black transition group w-10 grid place-content-center p-3 rounded-full border border-black">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 13.25L1.25 7L7.5 0.75"
                    className="group-hover:stroke-white transition"
                    stroke="#1C1C1C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button id="swiper-button-next" className="rotate-180 swiper-btn bg-primary hover:border-black hover:bg-black transition group w-10 grid place-content-center p-3 rounded-full border border-black">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 13.25L1.25 7L7.5 0.75"
                    className="group-hover:stroke-white transition"
                    stroke="#1C1C1C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-5">
        <Swiper
          className="w-full"
          style={{ padding: `0 max(${containerMarginLeft}px, 1rem)` }}
          modules={[Navigation]}
          navigation={{
            nextEl: "#swiper-button-next",
            prevEl: "#swiper-button-prev",
            disabledClass: "opacity-50 hover:!bg-white hover:!border-black hover:!text-black",
          }}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={
            {
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.5,
              },
             
            }
          }
        >
          <SwiperSlide>
            <Advantage
              alt="Alt 1"
              src="/img/advantage_03.png"
              title="Maneja datos de forma sencilla"
              text="Simplifica y organiza los datos de todos tus alumnos, clases y profesores de forma simple y ordenada."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Advantage
              alt="Alt 1"
              src="/img/advantage_03.png"
              title="Maneja datos de forma sencilla"
              text="Simplifica y organiza los datos de todos tus alumnos, clases y profesores de forma simple y ordenada."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Advantage
              alt="Alt 1"
              src="/img/advantage_03.png"
              title="Maneja datos de forma sencilla"
              text="Simplifica y organiza los datos de todos tus alumnos, clases y profesores de forma simple y ordenada."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Advantage
              alt="Alt 1"
              src="/img/advantage_03.png"
              title="Maneja datos de forma sencilla"
              text="Simplifica y organiza los datos de todos tus alumnos, clases y profesores de forma simple y ordenada."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Advantages;
