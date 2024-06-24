import React, { useState } from 'react';
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

const NOTIFICATIONS = FAKE_NEWS.acaUnits[0];

export default function SectionHeader({
  backTitle,
  title,
  withBackArrow = true,
  children,
  styles,
}: SectionHeaderProps) {
  const { canGoBack } = useIonRouter();
  const canBack = canGoBack();

  const [isOpen, setIsOpen] = useState(false);

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
          {NOTIFICATIONS.length > 0 && (
            <IonBadge color="danger" style={mergedStyles.badge}>
              {NOTIFICATIONS.length}
            </IonBadge>
          )}
          <IonIcon
            onClick={() => setIsOpen(true)}
            icon={notifications}
          ></IonIcon>
        </div>
      </IonToolbar>

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
          {NOTIFICATIONS.length > 0 ? (
            <div>
              {NOTIFICATIONS?.map((item) => (
                <p key={item._id}>{item.notification}</p>
              ))}
            </div>
          ) : (
            <div>
              <p>No hay notificaciones</p>
            </div>
          )}
        </IonContent>
      </IonModal>
    </IonHeader>
  );
}
