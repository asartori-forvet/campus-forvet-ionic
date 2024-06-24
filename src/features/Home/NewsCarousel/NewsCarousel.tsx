import { IonItem } from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import AuthContext from "../../../contexts/AuthContext";
import './NewsCarousel.css'
import Title from "../../../components/Title/Title";
import { FAKE_NEWS } from "../../../utils/fake-news";
import { openUrl } from "../../../utils/openUrl";
import { NewsItem } from "../../../types/types";


export default function NewsCarousel() {
   const { authToken } = useContext(AuthContext)
   const [data, setData] = useState<NewsItem[]>([]);

   useEffect(() => {
      const getNews = async () => {
         try {
            const response = await fetch('http://localhost:8000/campus/news', {
               headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${authToken}`,
               }
            })
            const data = await response.json()
            setData(FAKE_NEWS.general[0])

         } catch (error) {
            console.log(error)
         } finally { }
      }
      getNews()
   }, [])

   return (
      <div className="NewsCarousel-main-container">
         <Title>Novedades</Title>
         {data?.length > 0 && <div>
            <Swiper
               slidesPerView={1.3}
               spaceBetween={0}

            >
               {data?.map(item => (
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
         </div>}
      </div>
   )
}
