import React from "react";
import Container from "./ui/Container";
import Feature from "./ui/Feature";

const Features = () => {
  return (
    <section className="mt-16">
      <Container>
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl text-center font-bold">
            Un producto, <span className="block">miles de soluciones</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg text-center md:w-1/2 mx-auto mt-5 text-balance">
            Personaliza la educación de <strong>cada alumno</strong> accediendo
            a su registro, asegurando así construir una imagen completa de cada
            uno.
          </p>
        </div>
        <div className="space-y-10">
          <Feature
            title="Analiza el panorama completo de cada alumno"
            text="Ultrices velit odio amet vitae vel. Volutpat tortor laoreet euismod cursus a in ut."
            buttonText="Saber Más"
            buttonHref="/"
            imageSrc="/img/feature_01.png"
          />
          <Feature
            reverse
            title="Comprende sus virtudes y debilidades"
            text="Aliquet integer arcu mollis ut tellus ut quisque aliquam turpis. Eu morbi consequat non faucibus sit."
            buttonText="Saber Más"
            buttonHref="/"
            imageSrc="/img/feature_02.png"
          />
          <Feature
            title="Mejora su rendimiento con mejor comprensión de los datos"
            text="Vel platea sed eget morbi cras sed fermentum sit. Sit sed facilisis et at in mi augue eu aliquet."
            buttonText="Saber Más"
            buttonHref="/"
            imageSrc="/img/feature_03.png"
          />
        </div>
      </Container>
    </section>
  );
};

export default Features;
