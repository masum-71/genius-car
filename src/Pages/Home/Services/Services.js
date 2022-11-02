import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center my-5">
        <p className="text-2xl font-bold text-orange-600 ">Services</p>
        <h2 className="text-5xl my-3">Our Service Area</h2>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline btn-secondary my-4">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
