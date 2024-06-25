import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import './NotificationModal.css'
import { notificationsCircleOutline } from 'ionicons/icons'
import CardSkeleton from '../CardSkeleton/CardSkeleton'
import { Notification } from '../../types/types'

interface NotificationModalProps {
   isOpen: boolean;
   setIsOpen: (isOpen: boolean) => void;
   notifications: Notification[];
   isLoading: boolean;
 }

 const NotificationModal: React.FC<NotificationModalProps> = ({
   isOpen, 
   setIsOpen, 
   notifications, 
   isLoading 
}) => {

   return (
      <IonModal isOpen={isOpen}>
         <IonHeader>
            <IonToolbar color="primary">
               <IonTitle>Notificaciones</IonTitle>
               <IonButtons slot="end">
                  <IonButton onClick={() => setIsOpen(false)}>Cerrar</IonButton>
               </IonButtons>
            </IonToolbar>
         </IonHeader>
         <IonContent className="ion-padding">
            {isLoading && < CardSkeleton/>}
            {notifications?.length > 0 ? (
               <div className='NotificationModal-notification-wrapper-container'>
                  {notifications?.map((item) => (
                     <div
                        key={item._id} className={`NotificationModal-notification-item-container ${item.img ? 'NotificationModal-notification-item-column' : 'NotificationModal-notification-item-row'}`}>
                            <p className='NotificationModal-notification-item--text' >{item.notification}</p>
                        {item?.img
                           ? < img
                              className='NotificationModal-notification-item--image'
                              src={item.img}
                              alt={item.title}
                           />
                           : <div className='NotificationModal-notification-icon-container'>
                              <IonIcon
                                 icon={notificationsCircleOutline}
                                 color='primary'
                                 className='NotificationModal-notification--icon'
                              >
                              </IonIcon>
                           </div>}

                       
                     </div>
                  ))}
               </div>
            ) : (
               <div>
                  <p>No hay notificaciones</p>
               </div>
            )}
         </IonContent>
      </IonModal>
   )
}

export default NotificationModal;