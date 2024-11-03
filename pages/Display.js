import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";

export default function ProductDetailPage() {
  const router = useRouter();
  const { name, price, desc, image } = router.query || {};

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="max-w-screen-lg mx-auto bg-white mt-20 shadow-md rounded-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-5 flex justify-center items-center">
            <img
              src={`/images/${image}`}
              alt="Product Image"
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 p-5">
            <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
            <p className="text-lg text-gray-600 mt-2">{desc}</p>
            <div className="mt-4">
              <span className="text-2xl font-semibold text-gray-800">
                {price}
              </span>
            </div>
            <div className="mt-4">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="text-gray-600 ml-2">(10,555 ratings)</span>
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-500 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="mt-5 p-5">
          <h2 className="text-xl font-semibold text-gray-800">
            Product Details
          </h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>
              Detail 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li>Detail 2: Curabitur vehicula enim eu tempus tincidunt.</li>
            <li>
              Detail 3: Vivamus lacinia arcu quis sapien fermentum, id imperdiet
              ex placerat.
            </li>
            <li>
              Detail 4: Sed euismod, ligula et semper venenatis, felis purus
              mollis augue.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
