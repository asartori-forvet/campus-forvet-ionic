import { IonCard, IonContent, IonInput, IonList, IonPage, IonSelect, IonSelectOption } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import AuthContext from '../../contexts/AuthContext'
import './OwnCourses.css'
import Title from '../../components/Title/Title'
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton'
import CardCourse from '../../components/CardCourse/CardCourse'
import AppContext from '../../contexts/AppContext'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import useOwnCourses from '../../hooks/OwnCourses/useOwnCourses'
import CoursesFilters from '../../features/OwnCourses/CoursesFilters/CoursesFilters'
import NoContentCard from '../../components/NoContentCard/NoContentCard'


export default function OwnCourses() {
   const { filteredCourses, isLoading, setFilter, error, filter } = useOwnCourses()

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

               {(isLoading) &&
                  <>
                     < CardSkeleton />
                     < CardSkeleton />
                     < CardSkeleton />
                  </>
               }

               {error && < ErrorMessage text='Error al cargar la lista de cursos' />}

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
