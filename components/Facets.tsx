import React from "react";
import Container from "./ui/Container";
import Image from "next/image";

const Facets = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-5">
          <div>
            <span className="text-lg">Eleginos</span>
            <h2 className="text-5xl font-bold mt-2">¿Por qué Datapps?</h2>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-5">
              <Image
                alt="Personas estudiando"
                src="/img/facet_img_01.png"
                width={612}
                height={408}
                className="w-full md:w-1/2 rounded-xl hidden md:block object-cover"
              />
              <Image
                alt="Personas estudiando"
                src="/img/facet_img_02.png"
                width={612}
                height={408}
                className="w-full md:w-1/2 rounded-xl block object-cover"
              />
            </div>
            <div className="flex justify-between md:gap-16 gap-8 mt-4 md:flex-row flex-col">
              <div className="flex gap-10 md:gap-14">
                <div className="flex-1">
                  <h3 className="text-5xl pb-2 border-b border-black md:text-6xl font-black">+10K</h3>
                  <p className="mt-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-5xl pb-2 border-b border-black md:text-6xl font-black">+10K</h3>
                  <p className="mt-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>                   
              </div>
              <div className="flex gap-10 md:gap-14">
                <div className="flex-1">
                  <h3 className="text-5xl pb-2 border-b border-black md:text-6xl font-black">+10K</h3>
                  <p className="mt-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-5xl pb-2 border-b border-black md:text-6xl font-black">+10K</h3>
                  <p className="mt-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>                   
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Facets;
