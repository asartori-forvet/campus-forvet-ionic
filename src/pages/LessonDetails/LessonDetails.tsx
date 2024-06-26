import React, { useContext, useEffect, useState } from 'react'
import './LessonDetails.css'
import { IonAvatar, IonBadge, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonPage, IonSpinner, IonTitle, IonToolbar } from '@ionic/react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import AuthContext from '../../contexts/AuthContext'
import { useParams } from 'react-router'
import Title from '../../components/Title/Title'
import { calendar, videocam, starOutline, download, fileTray } from 'ionicons/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import moment from 'moment'
import StatusBadge from '../../components/StatusBadge/StatusBadge'
import { openUrl } from '../../utils/openUrl'
import { LessonItem } from '../../types/types'
import MaterialModal from '../../features/LessonDetails/MaterialModal/MaterialModal'
import LoaderFullscreen from '../../components/LoaderFullscreen/LoaderFullscreen'
import useLessonDetails from '../../hooks/LessonDetails/useLessonDetails'
import LessonHeader from '../../features/LessonDetails/LessonHeader/LessonHeader'
import LessonLinks from '../../features/LessonDetails/LessonLinks/LessonLinks'
import TeacherCarousel from '../../features/LessonDetails/TeacherCarousel/TeacherCarousel'
import ModeratorInfo from '../../features/LessonDetails/ModeratorInfo/ModeratorInfo'

const fakeMaterials = [
   {
      _id: 'kajshdfkljasdf',
      name: 'material de prueba',
      link: 'https://google.com',
      type: 'pdf'
   }
]


export default function LessonDetails() {
   const { 
      isLoading, 
      isModal, 
      setIsModal,
      lesson
   } = useLessonDetails()

   return (
      <IonPage>
         < SectionHeader title="Clase" />
         <IonContent fullscreen >
            <div className='LessonDetails-wrapper-container'>
               {isLoading
                  ? < LoaderFullscreen />
                  : <>

                     < LessonHeader 
                        name={lesson?.name}
                        state={lesson?.state}
                        valorations={lesson?.rates.valorations}
                     />

                     < LessonLinks roomUrl={lesson?.roomUrl} setIsModal={setIsModal} />
                  
                     <div>
                        <Title style={{ fontSize: '22px', textAlign: 'center' }}>
                           <IonIcon style={{ marginRight: 'var(--gap-xsm)' }} color='primary' icon={calendar}>
                           </IonIcon>
                           Fecha de inicio
                        </Title>
                        <h5 className='LessonDetails--date-text'>{moment(lesson?.initDate).format('DD-MM-YYYY')}</h5>
                     </div>

                     < TeacherCarousel teachers={lesson?.teachers} />

                     < ModeratorInfo moderator={lesson?.moderator} />
                     
                  </>
               }
            </div>
         </IonContent>

         < MaterialModal materials={fakeMaterials} isModal={isModal} setIsModal={setIsModal} />

      </IonPage>
   )
}
