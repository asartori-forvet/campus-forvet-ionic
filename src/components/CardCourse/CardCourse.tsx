import { IonBadge, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonProgressBar } from '@ionic/react'
import React from 'react'
import StatusBadge from '../StatusBadge/StatusBadge'
import './CardCourse.css'
import { CardCourseProps, State } from '../../types/types'

const CardCourse: React.FC<CardCourseProps> = ({ item }) => {

   const isState = (state: any): state is State => {
      return ['Closed', 'Opened', 'Open'].includes(state);
   };

   return (
      <IonCard>
         <div className='CardCourse-image-container'>
            {item?.comercialInformation.image && <img className='CardCourse--image' src={item?.comercialInformation.image} alt={item?.comercialInformation.name} />}

            {item.percentage && <div className='CardCourse-progressBar-container'>
               <IonBadge color='secondary'>Porcentaje de completado: %{item.percentage?.split('.')[0]}</IonBadge>
               <IonProgressBar color='secondary' value={Number(item.percentage)}></IonProgressBar>
            </div>}

            {item.state && isState(item.state) && (
               <div className='CardCourse-statusBadge'>
                  <StatusBadge state={item.state} />
               </div>
            )}
         </div>

         <IonCardHeader>
            <IonCardTitle class='CardCourse--title' >{item.comercialInformation.name}</IonCardTitle>
            <IonCardSubtitle><IonBadge>{item.comercialInformation.classDays} {item.comercialInformation.classHour}</IonBadge></IonCardSubtitle>
         </IonCardHeader>

         <IonCardContent color='var(--color-text-primary)' >{item.comercialInformation.description}</IonCardContent>

         <IonCardContent>
            <div className='CardCourse-seeMoreBtn'>
               <IonButton style={{ width: '100%' }} routerLink={`/curso/${item._id}`} >Ver mas</IonButton>
            </div>
         </IonCardContent>

      </IonCard>
   )
}


export default CardCourse;