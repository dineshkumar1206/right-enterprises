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
    <section className="w-full">

      {/* Title Bar */}
      <div className="relative bg-pink-600 text-white text-center py-6 text-sm tracking-[0.4em] uppercase">
        Work & Clients

        {/* Small triangle bottom (like Wix) */}
        <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-0 h-0 
                        border-l-[12px] border-l-transparent
                        border-r-[12px] border-r-transparent
                        border-t-[12px] border-t-pink-600">
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-full">
        {images.map((img, index) => (
          <div key={index} className="relative group overflow-hidden">
            
            <img
              src={img}
              alt={`work-${index}`}
              className="w-full h-[300px] object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-pink-600/80 opacity-0 
                            group-hover:opacity-100 transition duration-300 
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
