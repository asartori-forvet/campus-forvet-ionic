import CardSkeleton from "../../../components/CardSkeleton/CardSkeleton";
import Title from "../../../components/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { IonAvatar, IonBadge, IonItem } from "@ionic/react";
import './AdvicesCarousel.css'
import useAdvices from "../../../hooks/Home/useAdvices";


export default function AdvicesCarousel() {
   const { advices, isLoading } = useAdvices();

   return (
      <div className="AdvicesCarousel-main-container">
         {isLoading && < CardSkeleton />}
         {advices && advices?.length > 0 &&
            <>
               <Title>Consejos</Title>
               <div>
                  <Swiper
                     slidesPerView={1}
                     spaceBetween={16}
                  >
                     {advices?.map(item => (
                        <SwiperSlide
                           key={item._id}
                        >
                           <IonItem color='primary-light' className="AdvicesCarousel-article-main-container" >
                              <div color="primary.1" className="AdvicesCarousel-article-wrapper">
                                 <div className="AdvicesCarousel-article--header">
                                    {item.user.profilePicture &&
                                       <IonAvatar className="AdvicesCarousel-article--avatar">
                                          < img className="AdvicesCarousel-article--image" src={item.user.profilePicture} alt={item.user.name} />
                                       </IonAvatar>
                                    }
                                    <div className="AdvicesCarousel-article--header-user-description">
                                       <h3 className="AdvicesCarousel-article--username">{item.user.name} {item.user.lastname}</h3>
                                       {item.user.type && <IonBadge color='light' className="AdvicesCarousel-article--type">{item.user.type}</IonBadge>}
                                    </div>
                                 </div>
                                 <p className="AdvicesCarousel-article--text">{item.advice}</p>
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
