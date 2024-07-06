import Image from "next/image";
import React from "react";
import Container from "./ui/Container";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section>
      <Container className="pt-40 flex h-full min-h-svh items-center">
        {/* Background illustration */}
        <div className="relative flex flex-col w-full md:w-1/2 justify-cente">
          <div
            className="absolute -translate-y-1/2 top-1/2 w-[200%] h-svh fade-borders inset-0 hidden lg:block pointer-events-none"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1440 680"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M767.616 223.899L852.875 371.754L767.616 519.609H597.097L511.838 371.754L597.097 223.899L767.616 223.899Z"
                stroke="#D8D8D8"
                stroke-dasharray="12 12"
              />
              <path
                d="M572.721 -113.673L657.981 34.1819L572.721 182.037H402.203L316.943 34.1819L402.203 -113.673L572.721 -113.673Z"
                stroke="#D8D8D8"
                stroke-dasharray="12 12"
              />
              <path
                d="M257.838 73.8672L556.884 588.477L470.938 736.516H299.045L0 221.906L85.9461 73.8672L257.838 73.8672Z"
                stroke="#D8D8D8"
                stroke-dasharray="12 12"
              />
            </svg>
          </div>

          {/* Hero content */}
          <div className="relative z-20 md:z-0 flex flex-col justify-center">
            {/* Section header */}

            <div className="mx-auto text-start pb-12 md:pb-16">
              <div className="flex flex-col items-start">
                <h1 className="text-4xl md:text-6xl mb-4">
                  Los alumnos{" "}
                  <strong className="block">no son solo un número</strong>
                </h1>
                <p className="text-md md:text-xl md:w-3/4 text-gray-400 mb-8">
                  Utilicemos los <strong>datos</strong> para aprender más sobre{" "}
                  <strong>cada uno</strong>.
                </p>
                <div className="flex flex-col w-full md:flex-row gap-2 md:gap-5">
                  <Button href="/contact" text="Contactanos" type="primary" />
                    <Button href="/video" text="Ver Video" type="secondary" />
                </div>
                <p className="mt-4 text-gray-400">
                  Mejoramos el rendimiento de{" "}
                  <strong className="text-black block md:inline-block">2000+ Alumnos</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="hidden md:block fade-out-bottom max-w-[50%] h-full object-cover object-left absolute z-10 md:z-0 right-0"
          alt="Vista previa de la web de Datapps"
          src="/img/hero_img.png"
          width={758}
          height={629}
        />
      </Container>
    </section>
  );
};

export default Hero;
