import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import LoginButton from '../../components/LoginButton'
import './Login.css'
import Title from '../../components/Title/Title'
import logo from '../../assets/logo/forvet_logo_white.svg'

export default function Login() {

   return (
      <IonPage>
         <IonContent fullscreen>
            <div className='LoginPage-wrapper-container'>
               <div className='LoginPage-content-container'>
                  <img className='LoginPage-logo-image' src={logo} alt="Forvet" />
                  <div>
                     <Title style={{ textAlign: 'center', color: 'var(--ion-color-primary-contrast' }}>Campus</Title>
                  </div>
               </div>
               <div className='LoginPage-button-container'>
                  <LoginButton />
               </div>
            </div>
         </IonContent>
      </IonPage>
   )
}
