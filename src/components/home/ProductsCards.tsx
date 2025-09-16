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
            className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white/90 font-bold px-6 py-3 cursor-pointer"
          > 
            Show more
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsCards;
