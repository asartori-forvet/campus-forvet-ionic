import React, { useContext, useEffect, useState } from 'react';
import {
   IonBackButton,
   IonBadge,
   IonButtons,
   IonHeader,
   IonIcon,
   IonToolbar,
   useIonRouter,
} from '@ionic/react';
import Title from '../Title/Title';
import { notifications } from 'ionicons/icons';
import AuthContext from '../../contexts/AuthContext';
import NotificationModal from '../NotificationModal/NotificationModal';
import AppContext from '../../contexts/AppContext';

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
   styles?: SectionHeaderStyles;
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
   const [error, setError] = useState(false);

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
            if (setNotifications) {
               setNotifications(data)
            }

         } catch (error) {
            console.log(error)
            setError(true)
         } finally {
            setIsLoading(false)
         }
      }
      if (NOTIFICATIONS === null && !error) {
         getNotifications()
      }
   }, [authToken, NOTIFICATIONS, setNotifications, error])

   const allNotifications = [
      ...(NOTIFICATIONS?.nationality ?? []),
      ...(NOTIFICATIONS?.acaUnits ?? [])
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
         right: 'var(--padding-app)',
         top: '40%',
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
