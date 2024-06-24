import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonSpinner, IonTitle, IonToolbar } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import AuthContext from '../../contexts/AuthContext'
import Title from '../../components/Title/Title'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import LessonCard from '../../features/CourseDetails/LessonCard/LessonCard'
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton'
import { Course } from '../../types/types'


interface RouteParams {
   courseId: string;
}

export default function CourseDetails() {
   const { authToken } = useContext(AuthContext)
   const { courseId }: RouteParams = useParams();
   const [course, setCourse] = useState<Course | null>(null);
   const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
      const getCourseInfo = async () => {
         try {
            setIsLoading(true)
            const response = await fetch(`http://localhost:8000/campus/course/${courseId}`, {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authToken}`
               }
            })
            const data = await response.json()

            setCourse(data)

         } catch (error) {
            console.log(error)
         } finally {
            setIsLoading(false)

         }
      }
      getCourseInfo()
   }, [courseId, authToken])

   return (
      <IonPage>

         < SectionHeader title={'Curso'} />

         <IonContent style={{ padding: '20px' }} fullscreen>
            {isLoading
               ? < CardSkeleton />
               : <>
                  <IonCard>
                     <img alt={course?.name} src={course?.image} />
                     <IonCardHeader>
                        <IonCardTitle>{course?.name}</IonCardTitle>
                     </IonCardHeader>
                  </IonCard>
                  {course?.events?.length === 0 &&
                     <IonCard>
                        <Title style={{ fontWeight: 400, textAlign: 'center', fontSize: '22px' }}>Este curso no tiene eventos para mostrar</Title>
                     </IonCard>
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
         </IonContent>


      </IonPage>
   )
}
