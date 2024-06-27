import { IonSkeletonText } from '@ionic/react'
import React from 'react'

export default function CourseDetailsSkeleton() {
   return (
      <div>
         <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)', padding: 'var(--padding-app)' }}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)' }}>
               <IonSkeletonText
                  animated={true}
                  style={{ width: '100%', height: '250px', borderRadius: 'var(--border-radius-sm)' }}
               >
               </IonSkeletonText>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-xsm)' }}>
                  <IonSkeletonText
                     animated={true}
                     style={{ width: '100%', height: 'var(--fs-h3)', borderRadius: 'var(--border-radius-sm)' }}
                  >
                  </IonSkeletonText>
                  <IonSkeletonText
                     animated={true}
                     style={{ width: '100%', height: 'var(--fs-h3)', borderRadius: 'var(--border-radius-sm)' }}
                  >
                  </IonSkeletonText>
               </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)' }}>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)', backgroundColor: '#f0f0f0', padding: 'var(--gap-sm)', borderRadius: 'var(--border-radius-sm)' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                     <IonSkeletonText style={{ width: '40%', height: 'var(--fs-body)', borderRadius: 'var(--border-radius-sm)' }}></IonSkeletonText>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                     <IonSkeletonText style={{ width: '100%', height: 'var(--fs-body)', borderRadius: 'var(--border-radius-sm)' }}></IonSkeletonText>
                     <IonSkeletonText style={{ width: '60%', height: 'var(--fs-body)', borderRadius: 'var(--border-radius-sm)' }}></IonSkeletonText>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                     <IonSkeletonText style={{ width: '40%', height: 'var(--fs-h4)', borderRadius: 'var(--border-radius-sm)' }}></IonSkeletonText>
                     <IonSkeletonText style={{ width: '40%', height: 'var(--fs-h4)', borderRadius: 'var(--border-radius-sm)' }}></IonSkeletonText>
                  </div>
               </div>

               <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)', backgroundColor: '#f0f0f0', padding: 'var(--gap-sm)', borderRadius: 'var(--border-radius-sm)' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                     <IonSkeletonText style={{ width: '40%', height: 'var(--fs-body)', borderRadius: 'var(--border-radius-sm)' }}></IonSkeletonText>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                     <IonSkeletonText style={{ width: '90%', height: 'var(--fs-body)', borderRadius: 'var(--border-radius-sm)' }}></IonSkeletonText>
                     <IonSkeletonText style={{ width: '85%', height: 'var(--fs-body)', borderRadius: 'var(--border-radius-sm)' }}></IonSkeletonText>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                     <IonSkeletonText style={{ width: '40%', height: 'var(--fs-h4)', borderRadius: 'var(--border-radius-sm)' }}></IonSkeletonText>
                     <IonSkeletonText style={{ width: '40%', height: 'var(--fs-h4)', borderRadius: 'var(--border-radius-sm)' }}></IonSkeletonText>
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}
