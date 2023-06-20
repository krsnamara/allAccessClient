import { useState, useEffect, useRef } from "react";
import { API_URLS } from "../urls";

const useImages = (props) => {
  const [images, setImages] = useState(null);

  const getImagesRef = useRef(null);

  const URL = API_URLS.IMAGES;

  console.log(URL);

  const getImages = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setImages(data);
  };

  // console.log(`images.js line 17 ${JSON.stringify(images)}`);
  // console.log(`main.js line 18 ${URL}`);

  const createImages = async (images) => {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(images),
    });
    getImages();
  };

  const updateImages = async (id, updatedImage) => {
    const token = await props.user.getIdToken();
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(updatedImage),
    });
    getImages();
  };

  const deleteImages = async (id) => {
    const token = await props.user.getIdToken();
    await fetch(URL + id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    getImages();
  };

  useEffect(() => {
    getImagesRef.current = getImages;
  });

  useEffect(() => {
    if (props.user) {
      getImagesRef.current();
    } else {
      setImages(null);
    }
  }, [props.user]);

  return {
    images,
    createImages,
    updateImages,
    deleteImages,
  };
};

export default useImages;
