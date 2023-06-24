import { useState, useEffect, useRef } from "react";
import { API_URLS } from "../urls";

const useImages = () => {
  const [images, setImages] = useState(null);

  const getImagesRef = useRef(null);

  const URL = API_URLS.IMAGES;

  const getImages = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setImages(data);
  };

  console.log(`images.js line 17 ${JSON.stringify(images)}`);

  const createImages = async (images) => {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(images),
    });
    if (response.ok) {
      getImages();
    }
  };

  const updateImages = async (id, updatedImage) => {
    const response = await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(updatedImage),
    });
    if (response.ok) {
      getImages();
    }
  };

  const deleteImages = async (id) => {
    const response = await fetch(URL + id, {
      method: "DELETE",
    });
    if (response.ok) {
      getImages();
    }
  };

  useEffect(() => {
    getImagesRef.current = getImages;
  });

  useEffect(() => {
    getImagesRef.current();
  }, []);

  return {
    images,
    createImages,
    updateImages,
    deleteImages,
  };
};

export default useImages;
