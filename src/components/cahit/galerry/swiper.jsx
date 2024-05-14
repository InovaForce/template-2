import "./swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Card } from "react-bootstrap";
import { RiCloseCircleFill } from "react-icons/ri";
const MySwiper = ({ data, setShow }) => {
  return (
 
      
      <Swiper
        navigation={true}
        className="mySwiper"
        modules={[Pagination, Navigation]}
        style={{
          position: "fixed",
          zIndex: 99,
          height: "50vh",
          width: "50vw",
          margin: "auto",
        }}
      >
        <Card>
          <Card.Body>
            {data.map((item) => (
            
              <SwiperSlide key={item.id}>
                <div className="imgDivSwiper">
                  <RiCloseCircleFill
                    style={{
                      position: "fixed",
                      top: 10,
                      right: 10,

                      zIndex: 100,
                      cursor: "pointer",
                      transition: "all 0.7s",
                      fontSize: "2rem",
                    }}
                    onClick={() => setShow(false)}
                  />
                  <Image src={item.image} alt="image" fill />
                </div>
              </SwiperSlide>
             
            ))}
          </Card.Body>
        </Card>
      </Swiper>
       

  );
};

export default MySwiper;
