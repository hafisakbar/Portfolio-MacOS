import { useState } from "react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import { photosLinks, gallery } from "#constants/index.js";
import useWindowStore from "#store/window.js";
import { Search } from "lucide-react";
import clsx from "clsx";

const Photos = () => {
  const { openWindow } = useWindowStore();
  const [activeTab, setActiveTab] = useState(photosLinks[0]?.id || 1);

  // Gallery items for different categories while maintaining the 4-item bento grid
  const categoryGalleries = {
    1: gallery.map((item) => ({ ...item, name: `Photo-${item.id}.png` })),
    2: [
      { id: 1, img: "/images/project-1.png", name: "Attendance System.png" },
      { id: 2, img: "/images/project-2.png", name: "SeulawahCo.png" },
      { id: 3, img: "/images/project-3.png", name: "Chabot-AI.png" },
      { id: 4, img: "/images/gal1.png", name: "Memory-1.png" },
    ],
    3: [
      { id: 1, img: "/images/gal3.png", name: "Places-1.png" },
      { id: 2, img: "/images/gal4.png", name: "Places-2.png" },
      { id: 3, img: "/images/gal1.png", name: "Places-3.png" },
      { id: 4, img: "/images/gal2.png", name: "Places-4.png" },
    ],
    4: [
      { id: 1, img: "/images/hafis.jpeg", name: "hafis.jpeg" },
      { id: 2, img: "/images/hafis-2.jpeg", name: "casual-me.jpeg" },
      { id: 3, img: "/images/hafis-3.jpeg", name: "formal-me.jpeg" },
      { id: 4, img: "/images/me.png", name: "me.png" },
    ],
    5: [
      { id: 1, img: "/images/gal4.png", name: "Favorite-1.png" },
      { id: 2, img: "/images/gal2.png", name: "Favorite-2.png" },
      { id: 3, img: "/images/gal1.png", name: "Favorite-3.png" },
      { id: 4, img: "/images/gal3.png", name: "Favorite-4.png" },
    ],
  };

  const currentGallery = categoryGalleries[activeTab] || gallery;

  const openImagePreview = (item) => {
    openWindow("imgfile", {
      name: item.name || `gal${item.id}.png`,
      imageUrl: item.img,
    });
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Gallery</h2>
        <div className="flex items-center gap-2">
          <Search className="icon size-4 text-gray-500 cursor-pointer" />
        </div>
      </div>

      <div className="flex h-full w-full bg-white">
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map((item) => (
              <li
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={clsx(
                  item.id === activeTab
                    ? "!bg-blue-100 !text-blue-700 font-medium"
                    : "!bg-transparent text-gray-700 hover:!bg-gray-200/70",
                )}
              >
                <img src={item.icon} alt={item.title} />
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery flex-1">
          <ul className="h-[360px]">
            {currentGallery.map((item) => (
              <li
                key={item.id}
                onClick={() => openImagePreview(item)}
                className="cursor-pointer group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                title="Click to view full image"
              >
                <img
                  src={item.img}
                  alt={item.name || `Gallery ${item.id}`}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
