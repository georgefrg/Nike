import { shoe8 } from "../assets/images";
import Button from "../Components/Button";
export default function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex items-center justify-between w-full gap-10 max-lg:flex-col max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          We Provide you <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Experience the exceptional comfort and style of our super quality
          shoes, designed for durability and elegance. Crafted with premium
          materials and meticulous attention to detail, our shoes provide
          unmatched support and timeless fashion. Step into superior quality and
          enjoy the ultimate in footwear excellence.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-10">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex items-center justify-center flex-1">
        <img src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    </section>
  );
}
