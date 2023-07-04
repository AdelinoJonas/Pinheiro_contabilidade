import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Footer from "../../components/Footer";
import * as Sc from "./styles";

export function News() {
  const { theme } = useContext(ThemeContext);

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.businessinformativos.com.br/Services/Informativos/json?auth=ODkyNw%3D%3D"
        );

        setImages(response.data.infos);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Sc.ImageContainer theme={theme}>
        {images.map((image, index) => (
          <Sc.Image
            key={index}
            src={image.mini}
            alt={image.titulo}
            onClick={() => handleImageClick(image.pdffile)}
          />
        ))}
      </Sc.ImageContainer>
      <Footer />
    </>
  );
}
