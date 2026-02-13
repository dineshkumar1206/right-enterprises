export default function WorkClients() {
  const images = [
    "/image/01.jpg",
    "/image/02.jpg",
    "/image/03.jpg",
    "/image/04.jpg",
    "/image/05.jpg",
    "/image/06.jpg",
    "/image/07.jpg",
    "/image/08.jpg",
    "/image/09.jpg",
    "/image/10.jpg",
    "/image/11.jpg",
    "/image/12.jpg",
  ];

  return (
    <section className="w-full relative">

      {/* Title Wrapper */}
  <div className="absolute left-1/2 -top-12 -translate-x-1/2 z-20">

  <div
    className="relative bg-[#ff0048] text-white
               w-[250px] h-[50px]
               flex items-center justify-center
               text-sm tracking-[0.10em] 
               " 
  >
    Work & Clients

    {/* Bigger Triangle */}
    <div
      className="absolute left-1/2 -bottom-5 -translate-x-1/2
                 w-0 h-0
                 border-l-[22px] border-l-transparent
                 border-r-[22px] border-r-transparent
                 border-t-[22px] border-t-[#ff0048]"
    ></div>

  </div>
</div>


      {/* Space for overlap */}
      <div className=""></div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-full cursor-pointer">
        {images.map((img, index) => (
          <div key={index} className="relative group overflow-hidden">
            
            <img
              src={img}
              alt={`work-${index}`}
              className="w-full h-full object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#ff0a54]/80 opacity-0 
                            group-hover:opacity-100 transition duration-100 
                            flex items-center justify-center">

              <h3 className="text-white text-lg font-medium">
                I’m an image title
              </h3>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
