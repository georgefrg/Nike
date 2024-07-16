import { offer } from "../assets/images";
import Button from "../Components/Button";

export default function SpecialOffers() {
  return (
    <section className="flex items-center gap-10 justify-wrap max-xl:flex-col-reverse max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Don't miss out on our special offer! For a limited time, enjoy
          incredible discounts on a wide range of our top-quality products.
          Whether you're looking to upgrade your tech gadgets, refresh your
          wardrobe, or find the perfect gift, now is the perfect time to save
          big. Take advantage of these exclusive deals and experience the best
          we have to offer at unbeatable prices. Hurry, these offers won't last
          long!
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="View details" />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
}
