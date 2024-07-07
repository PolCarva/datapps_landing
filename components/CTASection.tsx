import React from "react";
import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";
import Container from "./ui/Container";

const CTASection = () => {
  return (
    <section className="bg-black grid place-content-center h-fit md:min-h-[30vh] relative py-20 md:px-12  text-white">
      <Container>
        <Image
          className="absolute object-cover h-full inset-0 opacity-40 from-transparent fade-middle"
          alt="CTA Layout"
          src={"/img/CTA_layout.svg"}
          width={2038}
          height={346}
        />
        <div className="relative z-10 space-y-6 mx-auto">
          <h2 className="text-3xl font-medium md:text-5xl text-center">
            Lleva tu colegio al siguiente nivel
          </h2>
          <p className="text-sm md:text-base text-center md:w-8/12 mx-auto">
            Congue tincidunt rhoncus non purus nullam senectus sed. Pellentesque
            purus nulla sit nam erat. Egestas aliquet imperdiet a sem.
          </p>
          <div className="flex gap-5 flex-col md:flex-row justify-center">
            <Button
              href="/"
              text="Contactanos"
              type="secondary"
              className="hover:!border-white hover:!bg-transparent"
            />
            <Link
              href="/"
              className="underline text-center py-4 px-2 rounded font-medium hover:text-white-tertiary transition"
            >
              Agendar demostración
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
