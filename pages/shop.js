import { useRouter } from "next/navigation";

export default function ShopPage() {
  const router = useRouter();
  const products = [
    {
      name: "WebDesignPro.com",
      description:
        "A premium website design service offering custom solutions.",
      price: "$499.99",
      image: "web_design_pro.jpg",
    },
    {
      name: "HostHub.com",
      description: "Reliable web hosting with 99.9% uptime and 24/7 support.",
      price: "$89.99/year",
      image: "host_hub.jpg",
    },
    {
      name: "SEOBoosters.com",
      description: "Expert SEO services to increase your website's visibility.",
      price: "$199.99",
      image: "seo_boosters.jpg",
    },
    {
      name: "ContentCreators.com",
      description:
        "Professional content writing services for your business needs.",
      price: "$29.99/article",
      image: "content_creators.jpg",
    },
    {
      name: "EcommerceBuilder.com",
      description: "Easy-to-use platform for creating your online store.",
      price: "$59.99/month",
      image: "ecommerce_builder.jpg",
    },
  ];

  const HandleChange = (prod) => {
    console.log(prod);
    router.push({
      pathname: "/Display",
      query: {
        name: prod.name,
        price: prod.price,
        desc: prod.description,
        image: prod.image,
      },
    });
  };

  return (
    <div className="bg-white min-h-screen overflow-y-auto">
      <div className="max-w-screen-lg mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-9 gap-y-9 justify-items-center mt-14">
          {products.map((product, key) => (
            <div
              key={key}
              className="relative flex cursor-pointer flex-col h-96 w-full max-w-xs rounded-lg shadow-lg bg-white overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-500 to-indigo-300 flex justify-center items-center">
                <span className="text-gray-100 text-lg">{product.image}</span>
              </div>
              <div className="pt-48 pb-4 px-4 flex flex-col justify-between h-full">
                <h1 className="text-indigo-600 text-lg font-extrabold text-center">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-center text-sm mt-1">
                  {product.description}
                </p>
                <h1 className="text-indigo-600 text-lg font-extrabold text-center">
                  {product.price}
                </h1>
                <button
                  onClick={() => HandleChange(product)}
                  className="bg-indigo-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-indigo-500 transition-colors duration-300"
                >
                  View Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
