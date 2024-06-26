import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonPage } from '@ionic/react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import LessonCard from '../../features/CourseDetails/LessonCard/LessonCard'
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton'
import useCourseDetails from '../../hooks/CourseDetails/useCourseDetails'
import NoContentCard from '../../components/NoContentCard/NoContentCard'
import { useHistory } from 'react-router'

export default function CourseDetails() {
   const { isLoading, course, error, setError } = useCourseDetails()
   const history = useHistory()
   return (
      <IonPage>

         < SectionHeader title={'Curso'} />

         <IonContent style={{ padding: 'var(--padding-app)' }} fullscreen>

            {isLoading && < CardSkeleton />}

            {(!isLoading && !error) &&
               <>
                  <IonCard>
                     <img alt={course?.name} src={course?.image} />
                     <IonCardHeader>
                        <IonCardTitle style={{ color: 'var(--color-text-secondary)', fontWeight: 700 }}>{course?.name}</IonCardTitle>
                     </IonCardHeader>
                  </IonCard>

                  {(!isLoading && course?.events?.length === 0) &&
                     <div style={{marginTop: 'var(--gap-lg)'}}>
                        < NoContentCard text='Este curso no tiene eventos para mostrar' />
                     </div>
                  }

                  {(course?.events && course.events.length > 0) &&
                     course?.events?.map((lesson) => {
                        switch (lesson.type) {
                           case "lessons":
                              return <LessonCard key={lesson.data._id} lesson={lesson} />;
                           // case "exams":
                           //    return null
                           // // return <ExamCard key={lesson.id} title={courseData.name} lesson={lesson}/>;
                           // case "recoveryExam":
                           //    return null
                           // // return <ReExamCard key={lesson.id} title={courseData.name} lesson={lesson}/>;
                           // //TODO: Remove "reExam" when no longer needed
                           // case "reExam":
                           //    return null
                           default:
                              return null;
                        }
                     })}
               </>
            }

            {(!isLoading && error) &&
               <div style={{width: '100%', height: '100%', display: 'grid', placeItems: 'center'}}>
                  < NoContentCard text='Ha ocurrido un error al cargar este curso' />
                  <div style={{display: 'flex', flexDirection: 'column', gap:'var(--gap-xsm)'}}>
                  <IonButton color='secondary' onClick={() => setError(false)}>cargar de nuevo</IonButton>
                  <IonButton color='primary-light' onClick={() => history.goBack()}>Volver</IonButton>
                  </div>
               </div>
            }

         </IonContent>


      </IonPage>
   )
}
