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
