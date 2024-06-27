import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonPage } from '@ionic/react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import LessonCard from '../../features/CourseDetails/LessonCard/LessonCard'
import useCourseDetails from '../../hooks/CourseDetails/useCourseDetails'
import NoContentCard from '../../components/NoContentCard/NoContentCard'
import { useHistory } from 'react-router'
import CourseDetailsSkeleton from '../../features/CourseDetails/CourseDetailsSkeleton/CourseDetailsSkeleton'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

export default function CourseDetails() {
   const { isLoading, course, error, setError } = useCourseDetails()
   const history = useHistory()

   return (
      <IonPage>

         < SectionHeader title={'Curso'} />

         <IonContent style={{ padding: 'var(--padding-app)' }} fullscreen>

            {isLoading && < CourseDetailsSkeleton />}

            {(!isLoading && !error) &&
               <>
                  <IonCard>
                     <img alt={course?.name} src={course?.image} />
                     <IonCardHeader>
                        <IonCardTitle style={{ color: 'var(--color-text-secondary)', fontWeight: 700 }}>{course?.name}</IonCardTitle>
                     </IonCardHeader>
                  </IonCard>

                  {(!isLoading && course?.events?.length === 0) &&
                     <div style={{ marginTop: 'var(--gap-lg)' }}>
                        < NoContentCard text='Este curso no tiene eventos para mostrar' />
                     </div>
                  }

                  {(course?.events && course.events.length > 0) &&
                     course.events.map((lesson) => (
                        <LessonCard
                           key={lesson.data._id}
                           lesson={lesson}
                        />
                     ))}
               </>
            }

            {(!isLoading && error) &&
               <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'grid',
                  placeItems: 'center',
                  padding: 'var(--padding-app)'
               }}
               >
                  <NoContentCard>
                     < ErrorMessage text='Ha ocurrido un error al cargar este curso' />
                  </NoContentCard>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-xsm)' }}>
                     <IonButton color='secondary' onClick={() => setError(false)}>cargar de nuevo</IonButton>
                     <IonButton color='primary-light' onClick={() => history.goBack()}>Volver</IonButton>
                  </div>
               </div>
            }

         </IonContent>


      </IonPage>
   )
}
