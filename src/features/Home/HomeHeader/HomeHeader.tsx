import React, { useContext } from 'react'
import AppContext from '../../../contexts/AppContext'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import { IonAvatar, useIonRouter } from '@ionic/react'
import Title from '../../../components/Title/Title'

export default function HomeHeader() {
   const { currentUser } = useContext(AppContext)
   const { push } = useIonRouter()
   return (
      <>
         {!currentUser
            ? < SectionHeader
               withBackArrow={false}
               styles={{
                  toolbar: { paddingLeft: 'var(--padding-app)' }
               }}
               title='Forvet Campus'
            />
            : < SectionHeader
               withBackArrow={false}
            >
               <div className="HomePage-headerWithAvatar-container">
                  <IonAvatar onClick={() => push('/perfil')}>
                     <img src={currentUser?.profilePicture} alt={`${currentUser?.name} ${currentUser?.lastname}`} />
                  </IonAvatar>
                  <Title style={{ color: '#fff', fontSize: 'var(--fs-body)', width: 'max-content' }}>{`Hola de nuevo, ${currentUser?.name}`}</Title>
               </div>
            </SectionHeader>
         }
      </>
   )
}
