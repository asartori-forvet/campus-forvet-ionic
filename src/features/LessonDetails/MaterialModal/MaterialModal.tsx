import React from 'react'
import './MaterialModal.css'
import { IonBadge, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from '@ionic/react'
import { openUrl } from '../../../utils/openUrl'
import { downloadSharp } from 'ionicons/icons'
import { Materials } from '../../../types/types'
import NoContentCard from '../../../components/NoContentCard/NoContentCard'


interface MaterialModalProps {
   isModal: boolean;
   setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
   materials?: Materials[];
}

const MaterialModal: React.FC<MaterialModalProps> = ({ 
   isModal, 
   setIsModal, 
   materials 
}) => {

   return (
      <IonModal isOpen={isModal}>
         <IonHeader>
            <IonToolbar color='primary'>
               <IonTitle>Materiales</IonTitle>
               <IonButtons slot="end">
                  <IonButton onClick={() => setIsModal(false)}>Cerrar</IonButton>
               </IonButtons>
            </IonToolbar>
         </IonHeader>
         <IonContent className="ion-padding MaterialModal-wrapper-container">
            {materials && materials.length > 0
               ? materials.map(material => (
                  <div key={material._id} className='MaterialModal-item-container'>
                     <div className='MaterialModal-column-container'>
                        <h5 className='MaterialModal-materialName'>{material?.name}</h5>
                        <IonBadge className='MaterialModal-badge-container'>.{material?.type}</IonBadge>
                     
                     </div>

                     <div className='MaterialModal-item-button-container'>
                        <IonButton 
                           onClick={() => openUrl(material?.link)}
                           >
                              <IonIcon icon={downloadSharp}></IonIcon>
                        </IonButton>
                     </div>
                  </div>
               ))
               : <div className='MaterialModal-no-content-container'>
                  < NoContentCard text='Esta clase no tiene materiales para descargar' />
               </div>
            }
         </IonContent>
      </IonModal>
   )
}

export default MaterialModal