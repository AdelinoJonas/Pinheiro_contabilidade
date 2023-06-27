import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #ffff;
  padding: 5rem 0 5rem 0;
  `;

const Image = styled.img`
  width: 250px;
  height: 300px;
  cursor: pointer;
  border: 1px solid #000; 
  margin-bottom: 5rem;
`;

export function News() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://www.businessinformativos.com.br/Services/Informativos/json?auth=ODkyNw%3D%3D'
        );
        console.log(response);
        setImages(response.data.infos);
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <ImageContainer>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.mini}
          alt={image.titulo}
          onClick={() => handleImageClick(image.pdffile)}
        />
        ))}
    </ImageContainer>
  );
};
// import React, { useContext } from 'react';
// import { ThemeContext } from '../../context/ThemeContext';

// import { Reveal } from "../../utils/Reveal";
// import * as Sc from './styles';

// export function News() {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <Sc.Container theme={theme} >
//       <div className="sectionBox">
//         <Reveal >
//           TESTING
//         </Reveal>

//         <Reveal >
//             <h1>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias laborum dolore, consequatur beatae accusamus. Aspernatur excepturi facere iste sint, numquam officiis iure provident in. Laboriosam quos beatae odit assumenda sunt quibusdam exercitationem natus doloribus culpa consequatur, error nesciunt voluptates eligendi expedita consequuntur veniam, porro eos! Nam, sint sequi excepturi, voluptatem nisi pariatur magnam error aspernatur ducimus voluptate quo iusto! Laborum necessitatibus, provident aperiam alias recusandae
//             </h1>
//         </Reveal>
//         </div>
//         <div
//           className="sectionBox2"
//           >
//           <Reveal >
//               TESTING
//           </Reveal >

//         <Reveal >
//           <h1>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias laborum dolore, consequatur beatae accusamus. Aspernatur excepturi facere iste sint, numquam officiis iure provident in. Laboriosam quos beatae odit assumenda sunt quibusdam exercitationem natus doloribus culpa consequatur, error nesciunt voluptates eligendi expedita consequuntur veniam, porro eos! Nam, sint sequi excepturi, voluptatem nisi pariatur magnam error aspernatur ducimus voluptate quo iusto! Laborum necessitatibus, provident aperiam alias recusandae nostrum harum unde voluptate pariatur voluptas quam odit non. Ipsa vitae nulla ipsum, iusto sint, aut at recusandae sed ut cum doloribus, aliquid facere incidunt quaerat! At voluptas sequi distinctio excepturi quia repellendus, iste laudantium alias vel voluptate quibusdam officiis a recusandae voluptatum incidunt? Nulla totam, quos magni voluptatibus eveniet in adipisci quis nam! Rem natus, beatae tenetur et expedita magnam iste. Voluptates maiores tempora, officia vel nihil voluptatem ex. Sapiente voluptatem non omnis, molestiae eveniet, suscipit, debitis atque magnam voluptate quibusdam quaerat doloribus.
//           </h1>
//       </Reveal>
//         </div>
//     </Sc.Container>
//   );