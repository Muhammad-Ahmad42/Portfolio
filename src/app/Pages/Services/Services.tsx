import React from "react";
import { FaCode, FaShoppingCart, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section  id="services" className="py-20 bg-gradient-to-b from-[#0f1627] to-[#07101d]">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
        Collaborate with Brands <br /> and Agencies to Create <br /> Impactful Results
      </h1>

      <div
        className="w-[90%] sm:w-[85%] lg:w-[70%] mx-auto 
                   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16
                   place-items-center"
      >
        <ServiceCard
          icon={<FaCode />}
          title="Web and Mobile Apps"
          description="High-quality web and mobile applications built with modern frameworks for seamless performance."
        />

        <ServiceCard
          icon={<FaShoppingCart />}
          title="E-commerce Solutions"
          description="Customized online store experiences designed to boost conversions and optimize user journeys."
        />

        <ServiceCard
          icon={<FaPaintBrush />}
          title="UI and UX Design"
          description="Beautiful and intuitive designs that elevate your brand and enhance user engagement."
        />

        <div className="lg:col-start-2">
          <ServiceCard
            icon={<FaMobileAlt />}
            title="Design and Creations"
            description="Creative branding and visuals that tell your story with clarity and impact."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
