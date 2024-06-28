import { IonItem } from "@ionic/react";
import { useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './NewsCarousel.css'
import Title from "../../../components/Title/Title";
import { openUrl } from "../../../utils/openUrl";
import AppContext from "../../../contexts/AppContext";
import NoContentCard from "../../../components/NoContentCard/NoContentCard";
import CarouselWithCardsSkeleton from "../CarouselWithCardsSkeleton/CarouselWithCardsSkeleton";


export default function NewsCarousel() {
   const { notifications } = useContext(AppContext)
   
   const isLoading = notifications === null

   return (
      <div className="NewsCarousel-main-container">
         <Title>Novedades</Title>

         {isLoading &&
            < CarouselWithCardsSkeleton
               withText={false}
               cardHeight="200px"
               cardWidth="200px"
            />
         }

         {notifications?.general && notifications?.general?.length > 0 &&
            <>

               <div>
                  <Swiper
                     slidesPerView={1.3}
                     spaceBetween={0}
                  >
                     {notifications?.general?.map(item => (
                        <SwiperSlide
                           key={item._id}
                        >
                           <IonItem style={{ position: 'relative' }} onClick={() => item?.link ? openUrl(item.link) : null} >
                              <div className="NewsCarousel-article">
                                 < img className="NewsCarousel-article--image" src={item.img} alt={item.title} />
                                 <h3 className="NewsCarousel-article--title">{item.title}</h3>
                                 <p className="NewsCarousel-article--description">{item.notification}</p>
                              </div>
                           </IonItem>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </>
         }

         {(!isLoading && notifications?.general && notifications?.general?.length === 0) &&
            <div className="NewsCarousel-no-content-container">
               < NoContentCard text="No hay novedades" />
            </div>
         }
      </div>
   )
}
