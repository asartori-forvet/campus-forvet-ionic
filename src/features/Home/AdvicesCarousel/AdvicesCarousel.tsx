import { useContext, useEffect, useState } from "react";
import CardSkeleton from "../../../components/CardSkeleton/CardSkeleton";
import AuthContext from "../../../contexts/AuthContext";
import Title from "../../../components/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { IonAvatar, IonItem } from "@ionic/react";
import { Advice } from "../../../types/types";
import './AdvicesCarousel.css'


export default function AdvicesCarousel() {
   const { authToken } = useContext(AuthContext)
   const [isLoading, setIsLoading] = useState(false)
   const [advices, setAdvices] = useState<Advice[] | null>(null);
   const [error, setError] = useState(false)

   useEffect(() => {
      const getAdvices = async () => {
         try {
            setIsLoading(true)

            const response = await fetch('http://localhost:8000/campus/advices', {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authToken}`
               }
            })

            const data = await response.json()
            setAdvices(data)
            setError(false)
         } catch (error) {
            console.log(error)
            setError(true)
         } finally {
            setIsLoading(false)
         }
      }
      if (advices === null && !error) {
         getAdvices()
      }
   }, [authToken, advices, error])

   return (
      <div className="AdvicesCarousel-main-container">
         {isLoading && < CardSkeleton />}
         {advices && advices?.length > 0 &&
            <>
               <Title>Consejos</Title>
               <div>
                  <Swiper
                     slidesPerView={1}
                     spaceBetween={0}
                  >
                     {advices?.map(item => (
                        <SwiperSlide
                           key={item._id}
                        >
                           <IonItem style={{ position: 'relative' }} >
                              <div className="AdvicesCarousel-article">
                                 <div className="AdvicesCarousel-article--header">
                                    {item.user.profilePicture &&
                                       <IonAvatar className="AdvicesCarousel-article--avatar">
                                          < img className="AdvicesCarousel-article--image" src={item.user.profilePicture} alt={item.user.name} />
                                       </IonAvatar>
                                    }
                                    <div className="AdvicesCarousel-article--header-user-description">
                                       <h3 className="AdvicesCarousel-article--username">{item.user.name} {item.user.lastname}</h3>
                                       {item.user.type && <h4 className="AdvicesCarousel-article--type">{item.user.type}</h4>}
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
