"use client";
import { useState } from "react";
import { BannerDataTypes, ProductsTypes } from "../app/page";
import FooterBanner from "../comps/FooterBanner";
import MainBanner from "./MainBanner";
import Products from "../app/Products";

interface HomeProps {
  products: ProductsTypes[];
  bannerData: BannerDataTypes[];
}

const Home = ({ products, bannerData }: HomeProps) => {
  const [sortedProducts, setSortedProducts] =
    useState<ProductsTypes[]>(products);
  const [sortOrder, setSortOrder] = useState<string>("");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortOrder(value);

    let sorted = [...products];
    if (value === "low-to-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "high-to-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sorted);
  };

  return (
    <main>
      {/* === MAIN BANNER  */}
      <MainBanner banner={bannerData[0]} />

      <section className="mb-4 flex items-center flex-col">
        <h1
          className="headTitle px-8 py-4 sm:py-2 sm:text-4xl text-2xl text-secondary
         font-sans font-extrabold sm:rounded-t-3xl"
        >
          Best Selling Headphones
        </h1>

        {/* === SORT DROPDOWN */}
        <div className="mt-4 mb-6">
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="px-4 py-2 border border-gray-300 rounded-md text-secondary bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Sort by Price</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </section>

      {/* === SHOW PRODUCTS  */}
      <section
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3
       lg:mx-20 overflow-hidden"
      >
        {/* === MAP PRODUCTS  */}
        {sortedProducts?.map((products: ProductsTypes) => {
          return <Products key={products._id} products={products} />;
        })}
      </section>

      {/* ==== FOOTER BANNER  */}
      <FooterBanner bannerData={bannerData && bannerData[1]} />
    </main>
  );
};

export default Home;
