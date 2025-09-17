import elephant from "../assets/Elephant.jpg";
import flamingos from "../assets/Flamingos.jpg";
import lion from "../assets/Lion.jpg";
import giraffes from "../assets/Giraffes.jpg";
import BreadCrumb from "./Breadcrumb";

function Hero() {
  return (
    <section className="flex flex-col md:p-8 px-8 md:px-0">
      <div className="relative md:my-10 my-7">
        <div
          className="hidden md:block absolute left-0 top-2 w-28 h-1 bg-[#F6B600]"
          style={{
            width: "calc((100vw - 1640px) / 2 + 4rem)",
          }}
        ></div>

        <div className="container mx-auto md:px-7 flex justify-between items-start">
          <h1 className="text-gray-50 font-oswald font-light md:text-6xl text-[2.55rem]">
            GALLERY
          </h1>
          <button className="bg-[#F6B600] text-[#151515] hover:bg-yellow-400 transition-colors duration-300 cursor-pointer py-3 px-8 self-start text-sm md:block hidden">
            Discover Our Gallery
          </button>
        </div>
      </div>

      <BreadCrumb />

      <div className="flex flex-wrap md:grid md:grid-cols-4 md:gap-8 gap-4 container mx-auto md:px-7">
        <div className="md:col-span-1 flex flex-col md:gap-8 gap-5 overflow-hidden">
          <img className="w-full lg:scale-105" src={lion} alt="lion" />
          <img
            className="w-full lg:scale-105"
            src={flamingos}
            alt="flamingos"
          />
        </div>
        <div className="col-span-2 overflow-hidden">
          <img
            className="w-full md:h-4/5 h-full object-cover aspect-[16/11] object-[10%_center] "
            src={elephant}
            alt="elephant"
          />
        </div>
        <div className="col-span-1 overflow-hidden">
          <img
            className="w-full md:h-4/5 h-3/4 object-cover aspect-[9/16] object-[70%_center] "
            src={giraffes}
            alt="giraffes"
          />
          <button className="bg-[#F6B600] md:hidden  hover:bg-yellow-400 transition-colors duration-300 w-full text-[#151515] py-3.5 px-8 self-start cursor-pointer mt-8">
            Discover Our Gallery
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
