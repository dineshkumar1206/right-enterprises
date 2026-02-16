import Navbar from "../component/Navbar";
import Gallery from "./Gallery";
import WorkClients from "./WorkClients";

export default function Home() {
  return (

    <>
    <div className="relative  w-screen h-screen overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/image/homepage-banner.jpg"
          alt="background"
          className="  w-full h-[95%] object-cover object-center"
        />

        {/* Gradient overlay (lighter like Wix) */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#9c005d]/60 via-[#b10060]/55 to-[#3a003a]/80"></div> */}
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

  {/* Hero Content */}
  <div className="relative flex flex-col items-center justify-center h-[80%]  text-center text-white  px-6 gap-6">

  {/* Main Heading */}
  <h1 className="font-bold text-[20px] sm:text-[26px] md:text-[34px] lg:text-[42px] leading-snug tracking-wide">
    Your design gets with a <br />
    <span className="font-bold">Perfect impression</span>
  </h1>

  {/* Divider Text */}
  <p className="text-[10px] sm:text-[12px] md:text-[13px] tracking-wider uppercase font-medium text-white/80">
    Offset Printing <span className="mx-2">|</span> Digital Printing <span className="mx-2">|</span> Package Manufacturing
  </p>

</div>
</div>
    <WorkClients/>
    {/* <Gallery/> */}
    </> 
  );
}
