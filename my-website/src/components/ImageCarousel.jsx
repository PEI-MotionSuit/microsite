import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Componentes customizados para as setas
const CustomNextArrow = (props) => {
  // Você pode adicionar mais estilos ou classes aqui se necessário
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#25b2cb"}} // Exemplo de estilo customizado
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#25b2cb" }} // Exemplo de estilo customizado
      onClick={onClick}
    />
  );
};

const ImageCarousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Slider {...settings}>
      {items.map((item, idx) => (
        <div key={idx}>
          <img src={item.url} alt={`Slide ${idx}`} style={{ width: "100%" }} />
          <p style={{ textAlign: "center", fontSize:"30px", 
                      backgroundColor: "#25b2cb", 
                      padding: "5px 10px", // Espaçamento interno para que o texto não fique muito perto das bordas
                      borderRadius: "10px", // Bordas redondas
                      margin: "0", // Remove a margem padrão do <p>
                      position: "absolute", // Posicionamento absoluto
                      bottom: "0px", // 10px acima do fundo do slide
                      zIndex: 30,
                      }}>{item.caption}</p> 
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
