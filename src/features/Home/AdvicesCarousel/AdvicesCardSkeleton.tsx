import { IonSkeletonText } from '@ionic/react'
import React from 'react'

export default function AdvicesCardSkeleton() {
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '250px',
            backgroundColor: '#f0f0f0',
            borderRadius: 'var(--border-radius-md)',
            padding: 'var(--gap-sm)',
            gap: 'var(--gap-sm)'
         }}
      >
         {/* card header */}
         <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: "var(--gap-xsm)",
         }}>
            {/* avatar */}
            <IonSkeletonText animated
               style={{
                  width: '75px',
                  height: '80px',
                  borderRadius: '50%'
               }}
            ></IonSkeletonText>
            {/* nombre y tipo */}
            <div
               style={{
                  display: 'flex',
                  flexGrow: 1,
                  flexDirection: 'column',
                  gap: 'var(--gap-xsm)',
               }}
            >
               {/* name */}
               <IonSkeletonText animated
                  style={{
                     width: '85%',
                     height: 'var(--fs-body)',
                     borderRadius: 'var(--border-radius-sm)'
                  }}
               ></IonSkeletonText>
               {/* type */}
               <IonSkeletonText animated
                  style={{
                     width: '45px',
                     height: 'var(--fs-body)',
                     borderRadius: 'var(--border-radius-sm)'
                  }}
               ></IonSkeletonText>
            </div>
         </div>

         {/* text */}
         <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
         }}>
            <IonSkeletonText animated
               style={{
                  height: 'var(--fs-small)',
                  width: '95%',
                  borderRadius: 'var(--border-radius-sm)'
               }}
            ></IonSkeletonText>
            <IonSkeletonText animated
               style={{
                  height: 'var(--fs-small)',
                  width: '90%',
                  borderRadius: 'var(--border-radius-sm)'
               }}
            ></IonSkeletonText>
            <IonSkeletonText animated
               style={{
                  height: 'var(--fs-small)',
                  width: '93%',
                  borderRadius: 'var(--border-radius-sm)'
               }}
            ></IonSkeletonText>
            <IonSkeletonText animated
               style={{
                  height: 'var(--fs-small)',
                  width: '80%',
                  borderRadius: 'var(--border-radius-sm)'
               }}
            ></IonSkeletonText>
         </div>
      </div>
   )
}
