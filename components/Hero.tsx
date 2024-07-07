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
            className="absolute -translate-y-1/2 top-1/2 overflow-hidden max-w-[calc(100svw-2rem)] md:w-[200%] h-svh inset-0 block pointer-events-none"
            aria-hidden="true"
          >
           <Image className="h-full fade-borders w-full md:w-2/3 object-cover" alt="Hero Pattern" src="/img/hero_pattern.svg" width={835} height={858} />
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
                  <strong className="text-black block md:inline-block">
                    2000+ Alumnos
                  </strong>
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
