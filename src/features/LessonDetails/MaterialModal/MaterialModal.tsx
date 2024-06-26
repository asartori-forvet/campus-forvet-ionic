import React from 'react'
import './MaterialModal.css'
import { IonBadge, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from '@ionic/react'
import { openUrl } from '../../../utils/openUrl'
import { download,  } from 'ionicons/icons'
import { Materials } from '../../../types/types'


interface MaterialModalProps {
   isModal: boolean;
   setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
   materials?: Materials[];
}

const MaterialModal: React.FC<MaterialModalProps> = ({ isModal, setIsModal, materials }) => {

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
                     <h5 className='MaterialModal-materialName'>{material?.name}</h5>
                     <div className='MaterialModal-item-button-container'>
                        <IonBadge className='MaterialModal-badge-container'>{material?.type}</IonBadge>
                        <IonButton 
                           onClick={() => openUrl(material?.link)}
                           >
                              <IonIcon icon={download}></IonIcon>
                        </IonButton>
                     </div>
                  </div>
               ))
               : <div>
                  <p>Esta clase no tiene materiales para descargar</p>
               </div>
            }
         </IonContent>
      </IonModal>
   )
}

export default MaterialModal