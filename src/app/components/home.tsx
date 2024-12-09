import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";
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
      {/* nike air max after image */}
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

      {/* first  Card section */}

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

      {/* featured */}
      <div className="px-12 mt-5 md:mt-8 space-y-4">
        <p>Featured</p>
        <Image
          className=""
          src="/home_page/Image-3.png" // Path relative to the 'public' folder
          alt="Nike App" // Descriptive alt text for the image
          width={1344} // Set width of the image
          height={700} // Set height of the image
        />

        {/* step into what feels good */}

        <div className="flex justify-center mt-5">
          <div className="text-center flex flex-col ">
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

      {/* gears up cards*/}
      <div className="flex px-12 mt-5">
        <div>
          <p>Gear Up</p>
          <div className="mb-8 container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="w-full sm:w-[250px] md:w-[300px] lg:w-[300px] mx-auto overflow-hidden bg-white">
      {/* Image Section */}
      <div className="h-[300px] sm:w-[250px] md:w-[300px] lg:w-[300px] bg-gray-100">
        <img
          src='home_page/image-4.png'
          alt='image'
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="mt-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="text-center sm:text-left">
            <h2 className="text-md font-semibold text-gray-800">Nike Dri-FIT Challenger</h2>
            <p className="text-sm text-gray-600 mt-1">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
          </div>
          <span className="text-lg font-bold text-gray-800 mt-2 sm:mt-0">₹ 3 895</span>
        </div>
      </div>
    </div>
<div className="w-full sm:w-[250px] md:w-[300px] lg:w-[300px] mx-auto overflow-hidden bg-white">
      {/* Image Section */}
      <div className="h-[300px] sm:w-[250px] md:w-[300px] lg:w-[300px] bg-gray-100">
        <img
          src='home_page/image-5.png'
          alt='{name}'
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold text-gray-800">Nike Dri-FIT Challenger</h2>
            <p className="text-sm text-gray-600 mt-1">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
          </div>
          <span className="font-semibold text-gray-800 mt-2 sm:mt-0">₹ 2 495</span>
        </div>
      </div>
    </div>
<div className="w-full sm:w-[250px] md:w-[300px] lg:w-[300px] mx-auto overflow-hidden bg-white">
      {/* Image Section */}
      <div className="h-[300px] sm:w-[250px] md:w-[300px] lg:w-[300px] bg-gray-100">
        <img
          src='home_page/image-6.png'
          alt='{name}'
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold text-gray-800">Nike Dri-FIT ADV Run Division</h2>
            <p className="text-sm text-gray-600 mt-1">Women's Long-Sleeve Running Top</p>
          </div>
          <span className="text-lg text-gray-800 mt-2 sm:mt-0">₹ 5 295</span>
        </div>
      </div>
    </div>
<div className="w-full sm:w-[250px] md:w-[300px] lg:w-[300px] mx-auto overflow-hidden bg-white">
      {/* Image Section */}
      <div className="h-[300px] sm:w-[250px] md:w-[300px] lg:w-[300px] bg-gray-100">
        <img
          src='home_page/image-7.png'
          alt='image'
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold text-gray-800">Nike Fast</h2>
            <p className="text-sm text-gray-600 mt-1">Women's Mid-Rise 7/8 Running Leggings with Pockets</p>
          </div>
          <span className="text-lg text-gray-800 mt-2 sm:mt-0">₹ 3 795</span>
        </div>
      </div>
    </div>

    </div>

        </div>
        </div>

        {/* Dont miss */}

      <div className="px-12 mt-5 md:mt-5">
        <div>

        <p>Don't Miss</p>
        
        <Image
          className=""
          src="/home_page/Image-8.png" // Path relative to the 'public' folder
          alt="Nike App" // Descriptive alt text for the image
          width={1344} // Set width of the image
          height={700} // Set height of the image
        />


        </div>
        </div>

         {/* fligth essentials*/}

         <div className="flex justify-center mt-5 mb-5">
          <div className="text-center flex flex-col ">
            <h1 className="text-[56px]">FLIGHT ESSENTIALS</h1>
            <p className="text-[15px]">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-5 mb-5">
              <Button className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-3 md:text-base md:px-8">
                Shop
              </Button>
            </div>
          </div>
        </div>

{/* the essencilas */}
        
        <div className="flex px-12 mt-5">
        <div>
          <p>The Essentials</p>
        {/* Cards section  */}

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
         <div className="relative w-full h-[300px]">
      {/* Image */}
      <img
        src="home_page/image-9.png" // Replace with your image path
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
        src="home_page/image-10.png" // Replace with your image path
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
        src="home_page/image-11.png" // Replace with your image path
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


        {/* lists last items */}

        <div className="container mx-auto p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {/* Column 1 */}
    <div className=" p-4">
      <ul>
        <li className="font-bold mb-3">Icons</li>
        <li>Air Force 1</li>
        <li>Huarache</li>
        <li>Air Max 90</li>
        <li>Air Max 95</li>
      </ul>
    </div>

    {/* Column 2 */}
    <div className=" p-4">
      <ul>
      <li className="font-bold mb-3">Shoes</li>
        <li>All Shoes</li>
        <li>Custum Shoes</li>
        <li>JOrdan Shoes</li>
        <li>Running Shoes</li>
      </ul>
    </div>

    {/* Column 3 */}
    <div className=" p-4">
      <ul>
      <li className="font-bold mb-3">Clothing</li>
        <li>All Clothing</li>
        <li>Modest Wear</li>
        <li>Hoodeis & Pullovers</li>
        <li>Shirts & Tops</li>
      </ul>
    </div>

    {/* Column 4 */}
    <div className=" p-4">
      <ul>
      <li className="font-bold mb-3">Kids</li>
        <li>Infant & Toddler Shoes</li>
        <li>KId's Shoes</li>
        <li>Kid's Jordan shoes</li>
        <li>Kid's Basketball Shoes</li>
      </ul>
    </div>
  </div>
</div>


    </>
  );
}

