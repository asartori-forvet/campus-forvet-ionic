import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IonAvatar } from '@ionic/react'
import { Teacher } from '../../../types/types'
import Title from '../../../components/Title/Title'

interface TeacherCarouselProps {
   teachers?: Teacher[]
}

const TeacherCarousel: React.FC<TeacherCarouselProps> = ({ teachers }) => {
   return (
      <div>
         <Title style={{ fontSize: '22px', marginBottom: 'var(--gap-sm)', textAlign: 'center' }}>Profesores</Title>
         <Swiper
            slidesPerView={2}
            spaceBetween={0}
            centeredSlides
         >
            {teachers?.map(item => (
               <SwiperSlide
                  key={item._id}
               >
                  <div className='LessonDetails-teacher-carousel-item'>

                     {item.profilePicture &&
                        <IonAvatar className='LessonDetails-teacher-carousel--image'>
                           <img src={item?.profilePicture} alt={`${item?.name} ${item?.lastname}`} />
                        </IonAvatar>}
                     <h5 className='LessonDetails-teacher-carousel--name'>{`${item?.name} ${item?.lastname}`}</h5>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

export default TeacherCarousel
