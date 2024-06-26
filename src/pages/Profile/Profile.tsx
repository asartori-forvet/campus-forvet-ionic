import { IonAvatar, IonButton, IonContent, IonInput, IonPage, IonSelect, IonSelectOption } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import AppContext from '../../contexts/AppContext'
import AuthContext from '../../contexts/AuthContext'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import LogoutButton from '../../components/LogoutButton'
import LoaderFullscreen from '../../components/LoaderFullscreen/LoaderFullscreen'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { COUNTRIES_LIST } from '../../utils/country-list'
import { capitalize } from '../../utils/capitalize'
import { validateForm } from '../../utils/validate-profile-from'

export default function Profile() {
   const { currentUser, setCurrentUser, setAlert } = useContext(AppContext)
   const { authToken } = useContext(AuthContext)
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(false)

   useEffect(() => {
      const getUserInfo = async () => {

         try {
            setIsLoading(true)

            const response = await fetch('http://localhost:8000/campus/login', {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authToken}`
               }
            })

            const data = await response.json()

            if (data && data.user && setCurrentUser) {
               setCurrentUser(data.user);
               setError(false)
            }
         } catch (error) {
            console.error(error)
            setError(true)
         } finally {
            setIsLoading(false)
         }
      }
      if (!currentUser && !error) {
         getUserInfo()
      }
   }, [currentUser, authToken, setCurrentUser, error])

   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const name = formData.get('name') as string;
      const lastname = formData.get('lastname') as string;
      const phone = formData.get('phone') as string;
      const nationality = formData.get('nationality') as string;

      const isInvalid = validateForm({ name, lastname, phone, nationality })
      if (isInvalid) {
         setAlert({ isOpen: true, message: isInvalid, status: 'error' })
         return
      }

      try {
         setIsLoading(true)

         const data = {
            name,
            lastname,
            phone,
            nationality
         }

         const options = {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify({ data })
         };

         const response = await fetch('http://localhost:8000/campus/users', options);
         const updatedUser = await response.json();
         setCurrentUser && setCurrentUser(updatedUser)
         setAlert({ isOpen: true, message: 'Tus cambios han sido guardado exitosamente. Podrás verlos reflejados ahora mismo.', status: 'success' })

      } catch (error) {
         setAlert({ 
            isOpen: true, 
            message: 'Por favor, ten paciencia. Estamos trabajando para solucionarlo', 
            status: 'error' 
         })
      } finally {
         setIsLoading(false)
      }
   };

   return (
      <IonPage>
         < SectionHeader title='Mi perfil' />
         <IonContent fullscreen>

            {isLoading && < LoaderFullscreen />}

            {error && <div className='Profile-error-container'>
               < ErrorMessage text='Ha ocurrido un error al intentar cargar tus datos' />
               <IonButton onClick={() => setError(false)}>Cargar nuevamente</IonButton>
            </div>}


            {currentUser &&
               <div className='Profile-main-container'>
                  <div className='Profile-avatar-container'>
                     <IonAvatar className='Profile--avatar' >
                        < img src={currentUser?.profilePicture} alt={currentUser.name} />
                     </IonAvatar>

                     <LogoutButton />

                  </div>

                  <form className='Profile-form-container' onSubmit={onSubmit}>

                     <div className='Profile-form-input-container'>
                        <h5 className='Profile-form-input--label'>Nombre</h5>
                        <IonInput
                           className='Profile-form--input'
                           name='name' disabled={isLoading}
                           value={currentUser?.name}></IonInput>
                     </div>

                     <div className='Profile-form-input-container'>
                        <h5 className='Profile-form-input--label'>Apellido</h5>
                        <IonInput
                           className='Profile-form--input'
                           name='lastname' disabled={isLoading}
                           value={currentUser?.lastname}></IonInput>
                     </div>

                     <div className='Profile-form-input-container'>
                        <h5 className='Profile-form-input--label'>Email</h5>
                        <IonInput
                           className='Profile-form--input'
                           name='email' disabled type='email' value={currentUser.email}></IonInput>
                     </div>

                     <div className='Profile-form-input-container'>
                        <h5 className='Profile-form-input--label'>Teléfono</h5>
                        <IonInput
                           className='Profile-form--input'
                           name='phone' disabled={isLoading} value={currentUser.phone}></IonInput>
                     </div>

                     <div className='Profile-form-input-container'>
                        <h5 className='Profile-form-input--label'>Nacionalidad</h5>
                        <IonSelect
                           className='Profile-form--input'
                           name='nationality' disabled={isLoading}
                           value={currentUser?.nationality?.toLowerCase()}
                        >
                           {COUNTRIES_LIST.map(country => (
                              <IonSelectOption key={country} value={country}>{capitalize(country)}</IonSelectOption>
                           ))}
                        </IonSelect>
                     </div>

                     <div className='Profile-form-button-container'>
                        <IonButton color='secondary' className='Profile-form--button' disabled={isLoading || error} type='submit'>Guardar cambios</IonButton>
                     </div>
                  </form>

               </div>
            }

         </IonContent>

      </IonPage>
   )
}
