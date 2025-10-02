import Products from "../app/Products";
import { memo } from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = ({ products }) => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-secondary text-xl font-extrabold">
        You may also like
      </h1>

      <section className="mt-10 relative h-52 sm:h-96 w-full overflow-hidden">
        <Marquee
          direction="right"
          speed={40}
          gradient={true}
          gradientColor={[255, 255, 255]}
          gradientWidth={50}
          pauseOnHover={true}
          pauseOnClick={false}
          delay={0}
          loop={0}
          className="flex items-center"
        >
          {products.map((product) => (
            <div key={product._id} className="mx-4 flex-shrink-0">
              <Products products={product} />
            </div>
          ))}
        </Marquee>
      </section>
    </div>
  );
};

export default memo(MarqueeComponent);
