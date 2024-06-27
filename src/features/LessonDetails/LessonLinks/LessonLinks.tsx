import { IonButton, IonIcon } from '@ionic/react'
import React from 'react'
import { openUrl } from '../../../utils/openUrl'
import { fileTray, videocam } from 'ionicons/icons'

interface LessonLinkProps {
   roomUrl?: string;
   setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LessonLinks: React.FC<LessonLinkProps> = ({roomUrl, setIsModal}) => {
   return (
      <div style={{
         width: '100%', 
         display: 'flex', 
         flexDirection: 'column', 
         gap: 'var(--gap-xsm)'
         }}
      >
         {roomUrl &&
            <IonButton
               color='primary'
               onClick={() => openUrl(`${roomUrl}`)}
            >
               <IonIcon style={{ marginRight: 'var(--gap-xsm)' }} slot="icon-only" icon={videocam}></IonIcon>
               Link de Zoom
            </IonButton>
         }

         <IonButton
            color='light'
            onClick={() => setIsModal(true)}
         >
            <IonIcon style={{ marginRight: 'var(--gap-xsm)' }} color='primary' slot="icon-only" icon={fileTray}></IonIcon>
            <span style={{ color: 'var(--color-text-secondary)' }}>Materiales</span>
         </IonButton>
      </div>
   )
}

export default LessonLinks