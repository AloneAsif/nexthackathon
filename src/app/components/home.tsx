import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import ProductCard from "./product_card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const products = [
  {
    image: "/home_page/Image-1.png",
    name: "Nike Air Max Pulse",
    description: "Woman's shoes",
    price: "£13,995",
  },
  {
    image: "/home_page/Image-1.png",
    name: "Nike Air Max Pulse",
    description: "Men's running shoes",
    price: "£13,900",
  },
  {
    image: "/home_page/Image-2.png",
    name: "Adidas Ultraboost",
    description: "Men's running shoes",
    price: "£10,500",
  },
];

export default function HomeComponent() {
  return (
    <>
      {/* Best of Air Max */}
      <div className="px-12 flex justify-between mb-3">
        <div>
          <p>Best Of Air Max</p>
        </div>
        <div className="flex gap-3 items-center">
          <span>Shop</span>
          <TfiArrowCircleLeft className="text-[24px]" />
          <TfiArrowCircleRight className="text-[24px]" />
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>

      {/* Featured Section */}
      <div className="px-12 mt-5 md:mt-8 space-y-4">
        <p>Featured</p>
        <Image
          src="/home_page/Image-3.png"
          alt="Nike App"
          width={1344}
          height={700}
        />

        <div className="flex justify-center mt-5">
          <div className="text-center flex flex-col">
            <h1 className="text-[56px] font-bold">STEP INTO WHAT FEELS GOOD</h1>
            <p className="text-[15px]">
              Cause everyone should know the feeling of running in that perfect
              pair.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-5 mb-5">
              <Button className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-3 md:text-base md:px-8">
                Find Your Store
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Gear Up Section */}
      <div className="px-12 mt-5">
        <p>Gear Up</p>
        <div className="mb-8 container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[4, 5, 6, 7].map((num) => (
            <div key={num} className="w-full overflow-hidden bg-white">
              <div className="h-[300px] bg-gray-100">
                <Image
                  src={`/home_page/Image-${num}.png`}
                  alt={`Gear Up Item ${num}`}
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Item Title
                </h2>
                <p className="text-sm text-gray-600 mt-1">Item description</p>
                <span className="text-lg font-bold text-gray-800">₹ 3,895</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Don't Miss Section */}
      <div className="px-12 mt-5">
        <p>Don't Miss</p>
        <Image
          src="/home_page/Image-8.png"
          alt="Don't Miss"
          width={1344}
          height={700}
        />
      </div>

      {/* Flight Essentials Section */}
      <div className="flex justify-center mt-5 mb-5">
        <div className="text-center flex flex-col">
          <h1 className="text-[56px]">FLIGHT ESSENTIALS</h1>
          <p className="text-[15px]">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-5 mb-5">
            <Button className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-3 md:text-base md:px-8">
              Shop
            </Button>
          </div>
        </div>
      </div>

      {/* Essentials Section */}
      <div className="flex px-12 mt-5">
        <div>
          <p>The Essentials</p>
          
           
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
         <div className="relative w-full h-[300px]">
      {/* Image */}
      <img
        src="/home_page/image-9.png" // Replace with your image path
        alt="Example"
        className="object-cover w-full h-full rounded-lg shadow-lg"
      />
      {/* Button */}
      <button className="absolute bottom-5 left-5 bg-white text-gray-800 px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100">
        Men's
      </button>
    </div>

    <div className="relative w-full h-[300px]">
      {/* Image */}
      <img
        src="/home_page/image-10.png" // Replace with your image path
        alt="Example"
        className="object-cover w-full h-full rounded-lg shadow-lg"
      />
      {/* Button */}
      <button className="absolute bottom-5 left-5 bg-white text-gray-800 px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100">
        Woman's
      </button>
    </div>
    <div className="relative w-full h-[300px]">
      {/* Image */}
      <img
        src="/home_page/image-11.png" // Replace with your image path
        alt="Example"
        className="object-cover w-full h-full rounded-lg shadow-lg"
      />
      {/* Button */}
      <button className="absolute bottom-5 left-5 bg-white text-gray-800 px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100">
        Kid's
      </button>
    </div>


         </div>
        </div>
      </div>
    </>
  );
}
