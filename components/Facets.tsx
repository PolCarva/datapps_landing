import React from "react";
import Container from "./ui/Container";
import Image from "next/image";
import Button from "./ui/Button";

const Facets = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-5">
          <div>
            <span className="text-lg">Eleginos</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">¿Por qué Datapps?</h2>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex gap-5">
              <Image
                alt="Personas estudiando"
                src="/img/facet_img_01.png"
                width={612}
                height={408}
                className="w-full md:w-[calc(50%-0.625rem)] rounded-xl md:block object-cover"
              />
              <Image
                alt="Personas estudiando"
                src="/img/facet_img_02.png"
                width={612}
                height={408}
                className="w-full md:w-[calc(50%-0.625rem)] rounded-xl hidden md:block object-cover"
              />
            </div>
            <div className="flex gap-5 justify-between mt-4 md:flex-row flex-col">
              <div className="flex gap-5 justify-around">
                <div className="flex-1">
                  <h3 className="text-5xl pb-2 border-b border-black md:text-6xl font-black">
                    +10K
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-5xl pb-2 border-b border-black md:text-6xl font-black">
                    +10K
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 justify-around">
                <div className="flex-1">
                  <h3 className="text-5xl pb-2 border-b border-black md:text-6xl font-black">
                    +10K
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-5xl pb-2 border-b border-black md:text-6xl font-black">
                    +10K
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
            <Button
              href="/contact"
              text="Contactate con nosotros"
              type="primary"
              rounded
              className="w-full mt-5 font-semibold py-5 px-12 mx-auto"
            />
        </div>
      </Container>
    </section>
  );
};

export default Facets;
