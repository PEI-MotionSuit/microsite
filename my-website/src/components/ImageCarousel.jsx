import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#25b2cb"}}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#25b2cb" }}
      onClick={onClick}
    />
  );
};

const ImageCarousel = ({ items, imageStyle = {} }) => {
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

  // Estilo padrão que será mesclado com o imageStyle personalizado
  const defaultStyle = {
    width: "100%",
    height: "auto",
    maxWidth: "900px",
    margin: "0 auto",
    display: "block"
  };

  const finalImageStyle = { ...defaultStyle, ...imageStyle };

  return (
    <Slider {...settings}>
      {items.map((item, idx) => (
        <div key={idx} style={{ textAlign: "center", padding: "20px 0" }}>
          <img 
            src={item.url} 
            alt={`Slide ${idx}`} 
            style={finalImageStyle} 
          />
          {item.caption && (
            <p style={{ 
              textAlign: "center", 
              fontSize: "20px", 
              backgroundColor: "#25b2cb", 
              padding: "5px 10px",
              borderRadius: "10px",
              margin: "10px auto 0",
              maxWidth: finalImageStyle.maxWidth || "900px",
              width: "fit-content"
            }}>{item.caption}</p> 
          )}
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;