import { IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import React from 'react'

interface FilterState {
   name: string;
   state: string;
}

interface CoursesFiltersProps {
   isLoading: boolean;
   error: boolean;
   setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
}

const CoursesFilters: React.FC<CoursesFiltersProps> = ({ 
   isLoading, 
   error, 
   setFilter 
}) => {

   return (
      <div>
         <div className='OwnCourses-input-container'>
            <div className='OwnCourses-input-wrapper'>
               <IonInput
                  style={{ paddingLeft: 'var(--gap-xsm)' }}
                  color='light'
                  clearInput={true}
                  disabled={isLoading || error}
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
               <IonSelect
                  className='OwnCourses-select--input'
                  color='light'
                  disabled={isLoading || error}
                  placeholder="Buscar por estado"
                  okText="Buscar" 
                  cancelText="Cancelar"
                  onIonChange={(e) => setFilter(
                     prevState => ({
                        ...prevState, state: e.target.value
                     }))}
               >
                  <IonSelectOption
                     color='light'
                     value="all"
                  >
                     Todas
                  </IonSelectOption>

                  <IonSelectOption
                     color='light'
                     value="Open"
                  >
                     Abiertas
                  </IonSelectOption>

                  <IonSelectOption
                     color='light'
                     value="Closed"
                  >
                     Cerradas
                  </IonSelectOption>

               </IonSelect>
            </div>
         </div>
      </div>
   )
}

export default CoursesFilters
