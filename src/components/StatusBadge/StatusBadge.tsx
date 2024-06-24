import { IonBadge } from '@ionic/react'
import React from 'react'
import './StatusBadge.css'
import { State } from '../../types/types';

const mapLessonStatus = {
   Closed: 'CERRADA',
   Opened: 'Abierta',
   Open: 'Abierta',
}


interface StatusBadgeProps {
   state: State;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ state = 'Closed' }) => {
   return (
      <IonBadge className={`StatusBadge--status-badge ${state === 'Closed' ? 'StatusBadge--closed' : "StatusBadge--open"}`} slot="end">{mapLessonStatus[state]}</IonBadge>
   )
}


export default StatusBadge;