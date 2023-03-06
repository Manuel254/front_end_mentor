import { useState } from "react";
import { useStyles } from "../assets/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Thumbs } from "swiper";
import pic1 from "../images/image-product-1.jpg";
import pic2 from "../images/image-product-2.jpg";
import pic3 from "../images/image-product-3.jpg";
import pic4 from "../images/image-product-4.jpg";
import thumb1 from "../images/image-product-1-thumbnail.jpg";
import thumb2 from "../images/image-product-2-thumbnail.jpg";
import thumb3 from "../images/image-product-3-thumbnail.jpg";
import thumb4 from "../images/image-product-4-thumbnail.jpg";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

SwiperCore.use([FreeMode, Thumbs]);

const Image = ({ image }) => {
  const classes = useStyles();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const pictures = [pic1, pic2, pic3, pic4];
  const slides = [];
  const thumbnails = [thumb1, thumb2, thumb3, thumb4];
  const slidesThumbs = [];

  for (let i = 0; i < pictures.length; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img className={classes.imgSize} src={pictures[i]} alt={`Slide-${i}`} />
      </SwiperSlide>
    );
  }

  for (let i = 0; i < thumbnails.length; i++) {
    slidesThumbs.push(
      <SwiperSlide key={`thumb-${i}`} className={classes.thumbFocus}>
        <img className={classes.thumb} src={thumbnails[i]} alt={`thumb-${i}`} />
      </SwiperSlide>
    );
  }

  return (
    <>
      <Swiper className={classes.cardImg} thumbs={{ swiper: thumbsSwiper }}>
        {slides}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        className={classes.imageThumb}
      >
        {slidesThumbs}
      </Swiper>
    </>
  );
};

export default Image;
