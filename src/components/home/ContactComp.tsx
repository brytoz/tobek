import { F18, H8 } from "../images";

const ContactComp = () => {
  return (
    <div className="w-full flex-wrap md:flex justify-around  relative  py-16 px-6  bg-white">
      <div className="w-full md:w-1/2  flex items-center relative">
        < img src={F18} className="h-96 absolute top-0 left-0 md:left-50 lg:left-100 z-5" />

        <img src={H8} alt="image" className="rounded w-full md:w-5/6 z-10 " />
      </div>
      <div className="w-full h-auto md:w-1/2 bg-[#dfd7c3] rounded flex-wrap md:flex items-center p-6 md:pl-18 z-10">
        <div className="space-y-2 pt-8 md:pt-0">
          <div className="text-[#7b0f0f]/80 font-bold">Need help?</div>
          <div className="text-[#7b0f0f] font-black text-2xl">Ask us anything directly</div>
          <div className="text-base md:text-sm leading-6 text-black/60 font-medium">
            We’re here to help! Have questions or need more information? Feel
            free to reach out—send us an email or drop us a message anytime.
            We’d love to hear from you!
          </div>

          <div className="pt-4">
            <a href="mailto:info@tobekfoods.com" className="rounded-full px-8 py-4 bg-[#7b0f0f] hover:bg-[#7b0f0f]/80 font-black text-white text-base md:text-sm "> Mail Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
