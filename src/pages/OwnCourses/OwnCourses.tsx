import { IonContent, IonList, IonPage } from '@ionic/react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import './OwnCourses.css'
import CardCourse from '../../components/CardCourse/CardCourse'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import useOwnCourses from '../../hooks/OwnCourses/useOwnCourses'
import CoursesFilters from '../../features/OwnCourses/CoursesFilters/CoursesFilters'
import NoContentCard from '../../components/NoContentCard/NoContentCard'
import OwnCoursesSkeleton from '../../features/OwnCourses/OwnCoursesSkeleton/OwnCoursesSkeleton'


export default function OwnCourses() {
   const {
      filteredCourses,
      setFilter,
      isLoading,
      error,
      filter
   } = useOwnCourses();

   return (
      <IonPage>
         < SectionHeader title="Mis cursos" />

         <IonContent>
            <div className='OwnCoruses-wrapper-container'>

               < CoursesFilters
                  error={error}
                  setFilter={setFilter}
                  isLoading={isLoading}
               />

               {isLoading && < OwnCoursesSkeleton />}

               {error &&
                  <NoContentCard>
                     < ErrorMessage text='Error al cargar la lista de cursos' />
                  </NoContentCard>
               }

               <IonList className='OwnCourses-cards-container'>
                  {(!isLoading && filteredCourses && filteredCourses?.length > 0) &&
                     filteredCourses?.map(item => (
                        < CardCourse
                           key={item._id}
                           item={item}
                        />
                     ))
                  }

                  {(!isLoading && filteredCourses?.length === 0) &&
                     < NoContentCard
                        text={`No hay resultados para: ${filter.name}`}
                     />
                  }
               </IonList>
            </div>
         </IonContent>

      </IonPage>
   )
}
