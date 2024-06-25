import React, { useContext, useEffect, useState } from 'react'
import './LessonDetails.css'
import { IonAvatar, IonBadge, IonButton, IonContent, IonIcon, IonPage, IonSpinner } from '@ionic/react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import AuthContext from '../../contexts/AuthContext'
import { useParams } from 'react-router'
import Title from '../../components/Title/Title'
import { calendar, videocam,  starOutline } from 'ionicons/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import moment from 'moment'
import StatusBadge from '../../components/StatusBadge/StatusBadge'
import { openUrl } from '../../utils/openUrl'
import {  LessonItem } from '../../types/types'

interface RouteParams {
   lessonId: string;
}

export default function LessonDetails() {

   const { authToken } = useContext(AuthContext)
   const { lessonId }: RouteParams = useParams();
   const [lesson, setLesson] = useState<LessonItem | null>(null)
   const [isLoading, setIsLoading] = useState(false)


   useEffect(() => {
      const getLessonInfo = async () => {
         try {
            setIsLoading(true)
            const response = await fetch(`http://localhost:8000/campus/class/${lessonId}`, {
               headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${authToken}`
               }
            })
            const data = await response.json()
            setLesson(data)
         } catch (error) {
            console.log(error)
         } finally {
            setIsLoading(false)
         }
      }
      getLessonInfo()
   }, [lessonId, authToken])

   return (
      <IonPage>
         < SectionHeader title="Clase" />
         <IonContent fullscreen >
            <div className='LessonDetails-wrapper-container'>
               {isLoading
                  ? <div className='LessonDetails-spinner-container'>
                     <IonSpinner color='primary'></IonSpinner>
                  </div>
                  : <>
                     <div className='LessonDetails-header-container'>
                        <div className='LessonDetails-header-badges-container'>
                           {lesson?.state && < StatusBadge state={lesson?.state} />}
                           <div className='LessonDetails-valoration-container'>
                              <IonBadge color='success'>
                                 <IonIcon icon={starOutline}></IonIcon>
                                 {lesson?.rates?.valorations?.good}
                              </IonBadge>

                              <IonBadge color='danger'>
                                 <IonIcon icon={starOutline}></IonIcon>
                                 {lesson?.rates?.valorations?.bad}
                              </IonBadge>
                           </div>
                        </div>
                        <Title>
                           {lesson?.name}
                        </Title>

                     </div>

                     {lesson?.roomUrl &&
                        <IonButton
                           color='primary'
                           onClick={() => openUrl(`${lesson.roomUrl}`)}
                        >
                           <IonIcon style={{ marginRight: 'var(--gap-xsm)' }} slot="icon-only" icon={videocam}></IonIcon>
                           Link de Zoom
                        </IonButton>
                     }

                     <div>
                        <Title style={{ fontSize: '22px', textAlign: 'center' }}>
                           <IonIcon style={{ marginRight: 'var(--gap-xsm)' }} color='primary' icon={calendar}>
                           </IonIcon>
                           Fecha de inicio
                        </Title>
                        <h5 className='LessonDetails--date-text'>{moment(lesson?.initDate).format('DD-MM-YYYY')}</h5>
                     </div>

                     <div>
                        <Title style={{ fontSize: '22px', marginBottom: 'var(--padding-app)', textAlign: 'center' }}>Profesores</Title>
                        <Swiper
                           slidesPerView={2}
                           spaceBetween={0}
                           centeredSlides
                        >
                           {lesson?.teachers?.map(item => (
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

                     {lesson?.moderator && <div>
                        <Title style={{ fontSize: '22px', marginBottom: 'var(--padding-app)', textAlign: 'center' }}>Moderador</Title>
                        <div>
                           <div className='LessonDetails-teacher-carousel-item'>
                              {lesson?.moderator.profilePicture &&
                                 <IonAvatar
                                    className='LessonDetails-teacher-carousel--image'
                                 >
                                    <img
                                       src={lesson?.moderator?.profilePicture}
                                       alt={`${lesson?.moderator?.name} ${lesson?.moderator?.lastname}`}
                                    />
                                 </IonAvatar>
                              }
                              <h5 className='LessonDetails-teacher-carousel--name'>{`${lesson?.moderator?.name} ${lesson?.moderator?.lastname}`}</h5>
                           </div>
                        </div>
                     </div>}
                  </>
               }

            </div>
         </IonContent>
      </IonPage>
   )
}
