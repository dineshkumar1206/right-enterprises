import Navbar from "../component/Navbar";
import WorkClients from "./WorkClients";

export default function Home() {
  return (

    <>
    <div className="relative w-screen h-screen overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/image/background-image.jpg"
          alt="background"
          className="w-full h-full object-cover object-center"
        />

        {/* Gradient overlay (lighter like Wix) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#9c005d]/60 via-[#b10060]/55 to-[#3a003a]/80"></div>
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

    {/* Hero Content */}
<div className=" relative flex flex-col items-center justify-center h-full text-center text-white px-6 gap-12">

  {/* Main Heading */}
  <h1 className="font-display italic text-[60px] md:text-[95px] leading-[1] tracking-wide">
    WEB <span className="font-bold">folk</span>
  </h1>

  {/* Subtitle */}
  <p className="mt-4 text-[18px] tracking-[0.6em] uppercase font-medium">
    Web Design Studio
  </p>

  {/* Description */}
  <p className="mt-8 text-[18px] leading-[1.8] font-medium max-w-2xl">
    We dream, explore, create and craft <br />
    progressive digital experiences
  </p>

</div>
    </div>
    <WorkClients/>
    </>
  );
}
