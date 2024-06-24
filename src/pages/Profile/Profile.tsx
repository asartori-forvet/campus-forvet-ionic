import { IonAvatar, IonButton, IonContent, IonInput, IonPage } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import AppContext from '../../contexts/AppContext'
import AuthContext from '../../contexts/AuthContext'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import LogoutButton from '../../components/LogoutButton'
import LoaderFullscreen from '../../components/LoaderFullscreen/LoaderFullscreen'

export default function Profile() {
   const { currentUser, setCurrentUser } = useContext(AppContext)
   const { authToken } = useContext(AuthContext)
   const [isLoading, setIsLoading] = useState(false)

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
            }
         } catch (error) {
            console.error(error)
         } finally {
            setIsLoading(false)
         }
      }
      if (currentUser) return
      getUserInfo()
   }, [currentUser, authToken, setCurrentUser])

   // const onSubmit = async (event: Event) => {
   //    event.preventDefault()
   //    const name = event?.target?.name.value
   //    const email = event?.target?.email.value
   //    const phone = event?.target?.phone.value
   //    const nationality = event?.target?.nationality.value

   //    if (!name || !email || !phone || !nationality) {
   //       return console.log('return')
   //    }
   // }

   return (
      <IonPage>
         < SectionHeader title='Mi perfil' />
         <IonContent fullscreen>
            {isLoading || !currentUser
               ? < LoaderFullscreen />
               : <div className='Profile-main-container'>
                  <div className='Profile-avatar-container'>
                     <IonAvatar className='Profile--avatar' >
                        < img src={currentUser?.profilePicture} alt={currentUser.name} />
                     </IonAvatar>

                     <LogoutButton />

                  </div>

                  <form className='Profile-form-container'>

                     <div className='Profile-form-input-container'>
                        <h5 className='Profile-form-input--label'>Nombre</h5>
                        <IonInput
                           className='Profile-form--input'
                           name='name' disabled={isLoading} 
                           value={`${currentUser?.name} ${currentUser?.lastname}`}></IonInput>
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
                        <IonInput
                           className='Profile-form--input'
                           name='nationality' disabled={isLoading} value={currentUser.nationality}></IonInput>
                     </div>

                     <div className='Profile-form-button-container'>
                        <IonButton color='secondary' className='Profile-form--button' disabled={isLoading} type='submit'>Guardar cambios</IonButton>
                     </div>
                  </form>

               </div>
            }

         </IonContent>
      </IonPage>
   )
}
