import { IonButton, IonItem } from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import AuthContext from "../../../contexts/AuthContext";
import './OwnCoursesCarousel.css'
import Title from "../../../components/Title/Title";
import CardSkeleton from "../../../components/CardSkeleton/CardSkeleton";
import AppContext from "../../../contexts/AppContext";
import { useHistory } from "react-router";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";

export default function OwnCoursesCarousel() {
   const { courses, setCourses } = useContext(AppContext)
   const { authToken } = useContext(AuthContext)
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(false)
   const history = useHistory()

   useEffect(() => {
      const getCourses = async () => {
         console.log('OWNCOURSES CAROUSEL')

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
               setError(false)
            }

         } catch (error) {
            console.log(error)
            setError(true)
         } finally {
            setIsLoading(false)
         }
      }
      if (courses === null && !error) {
         getCourses()
      }
   }, [authToken, courses, setCourses, error])

   return (
      <div className="OwnCoursesCarousel-main-container">
         <Title >Mis cursos</Title>
         {(isLoading) &&
            < CardSkeleton />
         }
         {error && < ErrorMessage text='Ha ocurrido un error al cargar los cursos' />}
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
         <IonButton
            disabled={isLoading}
            color='secondary'
            onClick={() => !error ? history.push('/mis-cursos') : setError(false)}>{!error ? 'ver todos los cursos' : 'Cargar nuevamente'}</IonButton>

      </div>
   )
}
