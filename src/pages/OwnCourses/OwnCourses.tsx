import { IonCard, IonContent, IonInput, IonList, IonPage, IonSelect, IonSelectOption } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import AuthContext from '../../contexts/AuthContext'
import './OwnCourses.css'
import Title from '../../components/Title/Title'
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton'
import CardCourse from '../../components/CardCourse/CardCourse'
import AppContext from '../../contexts/AppContext'


export default function OwnCourses() {
   const { courses, setCourses} = useContext(AppContext)
   const { authToken } = useContext(AuthContext)
   const [isLoading, setIsLoading] = useState(false)
   const [filter, setFilter] = useState<{ name: string; state: string }>({
      name: '',
      state: 'all',
   });

   useEffect(() => {
      const getCourses = async () => {
         setIsLoading(true)
         try {
            const response = await fetch('http://localhost:8000/campus/users/courses', {
               headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${authToken}`,
               }
            })
            const data = await response.json()
            if(data && setCourses){
               setCourses(data)
            }

         } catch (error) {
            console.log(error)
         } finally {
            setIsLoading(false)
         }
      }
      if(courses === null){
         getCourses()
      }
   }, [authToken, courses, setCourses])

   const filterCourses = () => {
      return courses?.filter(course => {
         const matchesName = course.comercialInformation.name.toLowerCase().includes(filter.name.toLowerCase());
         const matchesState = filter.state === 'all' || course.state === filter.state;
         return matchesName && matchesState;
      });
   };

   const filteredCourses = filterCourses();

   return (
      <IonPage>
         < SectionHeader title="Mis cursos" />

         <IonContent>
            <div className='OwnCoruses-wrapper-container'>

               <div>
                  <div className='OwnCourses-input-container'>
                     <div className='OwnCourses-input-wrapper'>
                        <IonInput
                           style={{ paddingLeft: '10px' }}
                           color='light'
                           clearInput={true}
                           disabled={isLoading}
                           onIonChange={({ target }) => {
                              const value = target.value?.toString();
                              if (value) {
                                 setFilter(prevState => ({
                                    ...prevState,
                                    name: value,
                                 }));
                              }
                           }}
                           placeholder="Buscar por nombre"
                        ></IonInput>
                     </div>
                  </div>

                  <div className='OwnCourses-select-container'>
                     <div className='OwnCourses-select-wrapper'>
                        <IonSelect color='light' disabled={isLoading} placeholder="Buscar por estado" onIonChange={(e) => setFilter(prevState => ({ ...prevState, state: e.target.value }))}>
                           <IonSelectOption color='light' value="all">Todas</IonSelectOption>
                           <IonSelectOption color='light' value="Open">Abiertas</IonSelectOption>
                           <IonSelectOption color='light' value="Closed">Cerradas</IonSelectOption>
                        </IonSelect>
                     </div>
                  </div>
               </div>

               {(isLoading) &&
                  <>
                     < CardSkeleton />
                     < CardSkeleton />
                     < CardSkeleton />
                  </>
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
                     <IonCard>
                        <Title style={{ fontWeight: 400, textAlign: 'center', fontSize: '22px' }}>No hay resultados para esta búsqueda</Title>
                     </IonCard>
                  }
               </IonList>
            </div>
         </IonContent>

      </IonPage>
   )
}
