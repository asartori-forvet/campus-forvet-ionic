import React from 'react'
import StatusBadge from '../../../components/StatusBadge/StatusBadge'
import Title from '../../../components/Title/Title'
import { IonBadge, IonIcon } from '@ionic/react'
import { starOutline } from 'ionicons/icons'
import { State } from '../../../types/types'

interface LessonHeaderProps {
   state?: State;
   valorations?: {
      good: number;
      bad: number;
      average: number;
   };
   name?: string;
}

const LessonHeader: React.FC<LessonHeaderProps> = ({ state, valorations, name }) => {
   return (
      <div className='LessonDetails-header-container'>
         <div className='LessonDetails-header-badges-container'>
            {state && < StatusBadge state={state} />}
            <div className='LessonDetails-valoration-container'>
               <IonBadge color='success'>
                  <IonIcon icon={starOutline}></IonIcon>
                  {valorations?.good}
               </IonBadge>

               <IonBadge color='danger'>
                  <IonIcon icon={starOutline}></IonIcon>
                  {valorations?.bad}
               </IonBadge>
            </div>
         </div>
         <Title>
            {name}
         </Title>
      </div>
   )
}

export default LessonHeader
