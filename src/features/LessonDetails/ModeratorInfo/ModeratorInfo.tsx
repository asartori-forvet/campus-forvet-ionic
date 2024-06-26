import React from 'react'
import Title from '../../../components/Title/Title'
import { IonAvatar } from '@ionic/react'
import { Teacher } from '../../../types/types'

interface ModeratorInfoProps {
   moderator?: Teacher
}

const ModeratorInfo: React.FC<ModeratorInfoProps> = ({moderator}) => {
   return (
      <>
         {moderator && <div>
            <Title style={{ fontSize: '22px', marginBottom: 'var(--gap-sm)', textAlign: 'center' }}>Moderador</Title>
            <div>
               <div className='LessonDetails-teacher-carousel-item'>
                  {moderator.profilePicture &&
                     <IonAvatar
                        className='LessonDetails-teacher-carousel--image'
                     >
                        <img
                           src={moderator?.profilePicture}
                           alt={`${moderator?.name} ${moderator?.lastname}`}
                        />
                     </IonAvatar>
                  }
                  <h5 className='LessonDetails-teacher-carousel--name'>{`${moderator?.name} ${moderator?.lastname}`}</h5>
               </div>
            </div>
         </div>}
      </>
   )
}

export default ModeratorInfo