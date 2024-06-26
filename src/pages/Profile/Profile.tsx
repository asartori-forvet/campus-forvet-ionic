import { IonAvatar, IonButton, IonContent, IonInput, IonPage, IonSelect, IonSelectOption } from '@ionic/react'
import React, { useContext } from 'react'
import './Profile.css'
import AppContext from '../../contexts/AppContext'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import LogoutButton from '../../components/LogoutButton'
import LoaderFullscreen from '../../components/LoaderFullscreen/LoaderFullscreen'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { COUNTRIES_LIST } from '../../utils/country-list'
import { capitalize } from '../../utils/capitalize'
import useProfile from '../../hooks/Profile/useProfile'
import Input from '../../components/Input/Input'

export default function Profile() {
   const { currentUser } = useContext(AppContext)
   const {
      onSubmit,
      isLoading,
      error,
      setError } = useProfile();

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

                     < Input 
                        name='name'
                        disabled={isLoading}
                        value={currentUser?.name}
                        label='Nombre'
                     />

                     < Input 
                        name='lastname'
                        disabled={isLoading}
                        value={currentUser?.lastname}
                        label='Apellido'
                     />

                     < Input 
                        name='email'
                        disabled
                        value={currentUser?.email}
                        label='Email'
                     />

                     < Input 
                        name='phone'
                        disabled={isLoading}
                        value={currentUser?.phone}
                        label='Teléfono'
                     />

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
