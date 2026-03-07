import React, { useState, useEffect } from "react";

const images = [
  { id: 1, src: "/gallery/Hackathon1.jpeg", category: "hackathon" },
  { id: 2, src: "/gallery/Hackathon2.jpeg", category: "hackathon" },
  { id: 3, src: "/gallery/Hackathon3.jpeg", category: "hackathon" },
  { id: 4, src: "/gallery/Hackathon4.jpeg", category: "hackathon" },

  { id: 5, src: "/gallery/Winner1.jpeg", category: "winner" },
  { id: 6, src: "/gallery/winner2.jpeg", category: "winner" },
  { id: 7, src: "/gallery/winner3.jpeg", category: "winner" },
  { id: 8, src: "/gallery/winner4.jpeg", category: "winner" },
  { id: 9, src: "/gallery/winner5.jpeg", category: "winner" },
  { id: 10, src: "/gallery/winner6.jpeg", category: "winner" },

  { id: 11, src: "/gallery/sponsors1.jpeg", category: "sponsors" },
  { id: 12, src: "/gallery/sponsors2.jpeg", category: "sponsors" },
  { id: 13, src: "/gallery/sponsors3.jpeg", category: "sponsors" },
  { id: 14, src: "/gallery/sponsors4.jpeg", category: "sponsors" },

  { id: 15, src: "/gallery/coordinator1.jpeg", category: "coordinator" },
  { id: 16, src: "/gallery/coordinator2.jpeg", category: "coordinator" },
  { id: 17, src: "/gallery/coordinator3.jpeg", category: "coordinator" },
  { id: 18, src: "/gallery/coordinator4.jpeg", category: "coordinator" },
];

const categories = ["all", "sponsors", "winner", "hackathon", "coordinator"];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [galleryImages, setGalleryImages] = useState([]);

  // Shuffle images
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setGalleryImages(shuffleArray(images));
  }, []);

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );
  };

  return (
    <div className="w-full min-h-screen bg-black py-20 px-6">

      {/* Title */}
      <h1 className="text-center text-4xl md:text-5xl font-bold text-white mb-12">
        Event <span className="text-cyan-400">Gallery</span>
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition
            ${
              activeFilter === cat
                ? "bg-cyan-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-cyan-600 hover:text-white"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 max-w-7xl mx-auto">

        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="mb-6 break-inside-avoid cursor-pointer group"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={image.src}
              alt="gallery"
              className="w-full rounded-xl object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        ))}

      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 text-white text-5xl hover:text-cyan-400"
          >
            ❮
          </button>

          {/* Image */}
          <img
            src={filteredImages[selectedIndex].src}
            alt="preview"
            className="max-h-[85vh] max-w-[90vw] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 text-white text-5xl hover:text-cyan-400"
          >
            ❯
          </button>

          {/* Close */}
          <button
            className="absolute top-6 right-8 text-white text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
          >
            ×
          </button>

        </div>
      )}

    </div>
  );
};

export default Gallery;