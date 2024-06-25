import { IonItem } from "@ionic/react";
import { useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './NewsCarousel.css'
import Title from "../../../components/Title/Title";
import { openUrl } from "../../../utils/openUrl";
import CardSkeleton from "../../../components/CardSkeleton/CardSkeleton";
import AppContext from "../../../contexts/AppContext";


export default function NewsCarousel() {
   const { notifications } = useContext(AppContext)

   const isLoading = notifications === null

   return (
      <div className="NewsCarousel-main-container">
         {isLoading && < CardSkeleton />}
         {notifications?.general[0] && notifications?.general[0]?.length > 0 &&
            <>
               <Title>Novedades</Title>
               <div>
                  <Swiper
                     slidesPerView={1.3}
                     spaceBetween={0}

                  >
                     {notifications?.general[0]?.map(item => (
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
      </div>
   )
}
