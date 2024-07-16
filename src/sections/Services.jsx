import { services } from "../constants";
import ServiceCard from "../Components/ServiceCard";
export default function Services() {
  return (
    <section className="flex flex-wrap justify-center max-container gap-9">
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
        />
      ))}
    </section>
  );
}
