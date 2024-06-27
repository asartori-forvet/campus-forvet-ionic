import { IonContent, IonPage } from '@ionic/react'
import LoginButton from '../../components/LoginButton'
import './Login.css'
import Title from '../../components/Title/Title'
import logo from '../../assets/logo/forvet_logo_white.svg'
import { getRandom } from '../../utils/getRandom'
import { ANIMALS_IMAGE_TEXTS } from '../../utils/animal-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Animal } from '../../types/types'

function shuffleArray(array: Animal[]) {
   return array
     .map(value => ({ value, sort: Math.random() }))
     .sort((a, b) => a.sort - b.sort)
     .map(({ value }) => value);
 }

export default function Login() {


   const shuffledAnimals = shuffleArray(ANIMALS_IMAGE_TEXTS);
   
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

               <div className='LoginPage-carousel-main-container'>
                  <Swiper
                     slidesPerView={1}
                     centeredSlides
                  >
                     {shuffledAnimals.map(item => (
                        <SwiperSlide className='LoginPage-swiper-container' key={item.image}>
                           <div className='LoginPage-animal-item-container'>
                              <img className='LoginPage-animal--image' src={item.image} alt="imagen de animal" />
                              <p className='LoginPage-animal-item--text'>{getRandom(item.text)}</p>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>

               <div className='LoginPage-button-container'>
                  <LoginButton />
               </div>
            </div>
         </IonContent>
      </IonPage>
   )
}
