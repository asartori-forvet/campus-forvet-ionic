import { IonButton, IonItem } from "@ionic/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './OwnCoursesCarousel.css'
import Title from "../../../components/Title/Title";
import CardSkeleton from "../../../components/CardSkeleton/CardSkeleton";
import { useHistory } from "react-router";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import useOwnCoursesHome from "../../../hooks/Home/useOwnCoursesHome";

export default function OwnCoursesCarousel() {
   const { courses, error, setError, isLoading } = useOwnCoursesHome() 
   const history = useHistory()

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
            color='primary-light'
            disabled={isLoading}
            onClick={() => !error ? history.push('/mis-cursos') : setError(false)}>{!error ? 'ver todos los cursos' : 'Cargar nuevamente'}</IonButton>

      </div>
   )
}
