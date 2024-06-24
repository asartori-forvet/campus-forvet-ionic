import { IonButton, IonItem, IonLabel, IonList, IonListHeader, IonSkeletonText, IonThumbnail } from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import AuthContext from "../../../contexts/AuthContext";
import './OwnCoursesCarousel.css'
import Title from "../../../components/Title/Title";
import CardSkeleton from "../../../components/CardSkeleton/CardSkeleton";
import AppContext from "../../../contexts/AppContext";

export default function OwnCoursesCarousel() {
   const { courses, setCourses } = useContext(AppContext)
   const { authToken } = useContext(AuthContext)
   const [isLoading, setIsLoading] = useState(false)
   
   useEffect(() => {
      const getCourses = async () => {
         setIsLoading(true)
         try {
            const response = await fetch('http://localhost:8000/campus/users/courses', {
               headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${authToken}`,
               }
            })
            const data = await response.json()
            if (data && setCourses) {
               setCourses(data)
            }

         } catch (error) {
            console.log(error)
         } finally {
            setIsLoading(false)
         }
      }
      if (courses === null) {
         getCourses()
      }
   }, [authToken, courses, setCourses])

   return (
      <div className="OwnCoursesCarousel-main-container">
         <Title >Mis cursos</Title>
         {(isLoading) &&
            < CardSkeleton />
         }

         {courses && courses?.length > 0 &&
            <div>
               <Swiper
                  slidesPerView={1.3}
                  spaceBetween={0}
               >
                  {courses?.map(item => (
                     <SwiperSlide
                        key={item._id}
                     >
                        <IonItem style={{ boxShadow: 0 }} routerLink={`/curso/${item._id}`}>
                           <div className="OwnCoursesCarousel-article">
                              < img className="OwnCoursesCarousel-article--image" src={item.comercialInformation.image} alt={item.comercialInformation.name} />
                              <h3 className="OwnCoursesCarousel-article--title">{item.comercialInformation.name}</h3>
                           </div>
                        </IonItem>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>}
         <IonButton color='secondary' routerLink="/mis-cursos">ver todos los cursos</IonButton>

      </div>
   )
}
