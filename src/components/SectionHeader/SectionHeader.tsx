import React, { useContext, useEffect, useState } from 'react';
import {
   IonBackButton,
   IonBadge,
   IonButton,
   IonButtons,
   IonContent,
   IonHeader,
   IonIcon,
   IonModal,
   IonTitle,
   IonToolbar,
   useIonRouter,
} from '@ionic/react';
import Title from '../Title/Title';
import { notifications } from 'ionicons/icons';
import { FAKE_NEWS } from '../../utils/fake-news';
import AuthContext from '../../contexts/AuthContext';
import NotificationModal from '../NotificationModal/NotificationModal';
import AppContext from '../../contexts/AppContext';

// Definir un tipo para los estilos personalizados
interface SectionHeaderStyles {
   toolbar?: React.CSSProperties;
   iconContainer?: React.CSSProperties;
   badge?: React.CSSProperties;
}

interface SectionHeaderProps {
   backTitle?: string;
   title?: string;
   withBackArrow?: boolean;
   children?: React.ReactNode;
   styles?: SectionHeaderStyles; // Cambiado de style a styles para evitar conflictos con la propiedad style de React
}

export default function SectionHeader({
   backTitle,
   title,
   withBackArrow = true,
   children,
   styles,
}: SectionHeaderProps) {
   const { notifications: NOTIFICATIONS, setNotifications } = useContext(AppContext)
   const { authToken } = useContext(AuthContext)
   const { canGoBack } = useIonRouter();
   const canBack = canGoBack();

   const [isOpen, setIsOpen] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      const getNotifications = async () => {
         try {
            setIsLoading(true)
            const response = await fetch('http://localhost:8000/campus/news', {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authToken}`
               }
            })
            const data = await response.json()
            console.log({ data, isRender: 'se hizo de nuevo el campusNews' })
            if (setNotifications) {
               // setNotifications(data)
               setNotifications(FAKE_NEWS)
            }

         } catch (error) {
            console.log(error)
         } finally {
            setIsLoading(false)
         }
      }
      if (NOTIFICATIONS === null) {
         getNotifications()
      }
   }, [authToken, NOTIFICATIONS, setNotifications])

   const allNotifications = [
      ...(NOTIFICATIONS?.nationality[0] ?? []),
      ...(NOTIFICATIONS?.acaUnits[0] ?? [])
   ];

   const defaultStyles: SectionHeaderStyles = {
      toolbar: {
         position: 'relative',
         width: '100%',
         display: 'flex',
         alignItems: 'center',
      },
      iconContainer: {
         display: 'grid',
         placeItems: 'center',
         position: 'absolute',
         right: '10px',
         top: '30px',
      },
      badge: {
         position: 'absolute',
         bottom: 0,
         left: '-10px',
      },
   };

   const mergedStyles: SectionHeaderStyles = {
      ...defaultStyles,
      ...styles,
   };

   return (
      <IonHeader>
         <IonToolbar color="primary" style={mergedStyles.toolbar}>
            {canBack && withBackArrow && (
               <IonButtons slot="start">
                  <IonBackButton color="light" defaultHref="#" />
               </IonButtons>
            )}
            {title && (
               <Title style={{ color: 'var(--ion-color-primary-contrast)' }}>
                  {title}
               </Title>
            )}
            {children}
            <div style={mergedStyles.iconContainer}>
               {allNotifications?.length > 0 && (
                  <IonBadge color="danger" style={mergedStyles.badge}>
                     {allNotifications?.length}
                  </IonBadge>
               )}
               <IonIcon
                  onClick={() => setIsOpen(true)}
                  icon={notifications}
               ></IonIcon>
            </div>
         </IonToolbar>

         <NotificationModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            notifications={allNotifications}
            isLoading={isLoading}
         />

      </IonHeader>
   );
}
