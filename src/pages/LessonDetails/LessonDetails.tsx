import './LessonDetails.css'
import { IonContent, IonIcon, IonPage } from '@ionic/react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Title from '../../components/Title/Title'
import moment from 'moment'
import MaterialModal from '../../features/LessonDetails/MaterialModal/MaterialModal'
import LoaderFullscreen from '../../components/LoaderFullscreen/LoaderFullscreen'
import useLessonDetails from '../../hooks/LessonDetails/useLessonDetails'
import LessonHeader from '../../features/LessonDetails/LessonHeader/LessonHeader'
import LessonLinks from '../../features/LessonDetails/LessonLinks/LessonLinks'
import TeacherCarousel from '../../features/LessonDetails/TeacherCarousel/TeacherCarousel'
import ModeratorInfo from '../../features/LessonDetails/ModeratorInfo/ModeratorInfo'
import { calendar } from 'ionicons/icons'
import NoContentCard from '../../components/NoContentCard/NoContentCard'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import LessonDetailsSkeleton from '../../features/LessonDetails/LessonDetailsSkeleton/LessonDetailsSkeleton'

// const fakeMaterials = [
//    {
//       _id: 'kajshdfkljasdf',
//       name: 'Este es un material de prueba un poco mas alrgbo - Antonino Sartori',
//       link: 'https://google.com',
//       type: 'doc'
//    },
//    {
//       _id: 'Clase 3, esto es porque creo que los nombres son bastentes largos che ',
//       name: 'material de prueba',
//       link: 'https://google.com',
//       type: 'pdf'
//    }
// ]

export default function LessonDetails() {
   const {
      isLoading,
      isModal,
      setIsModal,
      lesson,
      error
   } = useLessonDetails()

   return (
      <IonPage>
         < SectionHeader title="Clase" />
         <IonContent fullscreen >
            <div className='LessonDetails-wrapper-container'>
               {isLoading && < LessonDetailsSkeleton />}

               {(!isLoading && error) && 
                  <NoContentCard>
                     < ErrorMessage text='Ha ocurrido un error al cargar la clase' />
                  </NoContentCard>
               } 

               {(!isLoading && !error) &&
                  <>
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

         < MaterialModal materials={lesson?.materials} isModal={isModal} setIsModal={setIsModal} />

      </IonPage>
   )
}
