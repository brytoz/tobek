import { F18, FLOWER, X01, X02, X03, X04, X05, X06, X07 } from "../images";

interface CardsProps {
  productName: string;
  image: string;
}

const Cards: React.FC<CardsProps> = ({ productName, image }) => {
  return (
    <div className="rounded-lg border border-[#dfd7c3] bg-[#dfd7c3] p-6 shadow-sm  z-5 ">
      <div className="h-96 lg:h-72 w-full">
        <img
          className="mx-auto  contain h-full w-full cover"
          src={image}
          alt=""
        />
      </div>
      <div className="pt-6 ">
        <a
          href="#"
          className="text-lg font-semibold leading-tight text-black/80 hover:underline  "
        >
          {productName}
        </a>

        {/* <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Fast Delivery
              </p>
            </li>

            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Best Price
              </p>
            </li>
          </ul> */}

        {/* <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
              $1,699
            </p>

            <button
              type="button"
              className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                className="-ms-2 me-2 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>
              Add to cart
            </button>
          </div> */}
      </div>
    </div>
  );
};

const ProductsCards = () => {
  return (
    <section className="bg-white py-8 antialiased  md:py-12 relative">
        <img src={F18} className="h-96 absolute bottom-0 right-0 z-5" />
        <img src={FLOWER} className="h-96 absolute top-0 left-0 z-5" />

      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        
          <div className="mb-4 mt-8 md:mt-18 ">
            <h2 className="mt-3 text-3xl font-semibold text-gray-900   w-full text-center ">
              Products
            </h2>
        </div>
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          <Cards image={X01} productName="White Processed garri" />
          <Cards image={X02} productName="Palm Oil (Red Oil) - Fresh from farm" />
          <Cards image={X03} productName="Crayfish " />
          <Cards image={X04} productName="Dried Shrimp" />
          <Cards image={X05} productName="Grinded Crayfish" />
          <Cards image={X06} productName="Garri - Red Grinded cassava " />
          <Cards image={X07} productName="1 Liter Palm Oil - Fresh from farm" />
        </div>
        <div className="w-full text-center">
          <a
            href="/products"
            className="rounded-full text-white bg-[#7b0f0f] hover:bg-[#7b0f0f]/80 font-bold px-6 py-3 cursor-pointer"
          >
            Show more
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsCards;
