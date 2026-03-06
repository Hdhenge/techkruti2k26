import React, { useState, useEffect } from "react";

const images = [
  { id: 1, src: "/gallery/img1.jpg" },
  { id: 2, src: "/gallery/img2.jpg" },
  { id: 3, src: "/gallery/img3.jpg" },
  { id: 4, src: "/gallery/img4.jpg" },
  { id: 5, src: "/gallery/img5.jpg" },
  { id: 6, src: "/gallery/img6.jpg" },
];

const Gallery = () => {

  const [selectedIndex, setSelectedIndex] = useState(null);

  // Auto change image every 3 seconds
  useEffect(() => {
    if (selectedIndex === null) return;

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedIndex]);

  return (
    <div className="w-full min-h-screen bg-black py-20 px-6 relative overflow-hidden">

      <h1 className="text-center text-4xl md:text-5xl font-bold text-white mb-16">
        Event <span className="text-cyan-400">Gallery</span>
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => setSelectedIndex(index)}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
          >

            <img
              src={image.src}
              alt="gallery"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">View</p>
            </div>

          </div>
        ))}

      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          <img
            src={images[selectedIndex].src}
            className="max-h-[80vh] max-w-[90vw] rounded-lg"
          />

          {/* Close */}
          <button
            className="absolute top-6 right-8 text-white text-4xl"
            onClick={() => setSelectedIndex(null)}
          >
            ×
          </button>

        </div>
      )}

    </div>
  );
};

export default Gallery;