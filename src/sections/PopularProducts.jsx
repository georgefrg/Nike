import { products } from "../constants";
import PopularProductCard from "../Components/PopularProductCard";

export default function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      7
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg marker:mt-2 font-montserrat text-slate-gray">
          Discover our most sought-after products, each meticulously crafted to
          deliver exceptional quality and satisfaction. From cutting-edge
          electronics and innovative gadgets to luxurious beauty items and
          stylish home decor, our collection ensures the perfect blend of
          performance, reliability, and style. Enjoy the superior experience
          that countless satisfied customers have come to love.
        </p>
      </div>
      <div className="grid grid-cols-1 mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard
            key={product.name}
            imgURL={product.imgURL}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
}
