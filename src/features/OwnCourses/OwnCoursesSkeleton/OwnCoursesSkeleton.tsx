import { IonSkeletonText } from '@ionic/react'
import React from 'react'

export default function OwnCoursesSkeleton() {
   return (
      /* card */
      <div
         style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--gap-md)',
            padding: 'var(--padding-app)'
         }}
      >
         {/* image */}
         <div
            style={{
               position: 'relative',
               width: '100%',
               height: '246px',
               borderRadius: 'var(--border-radius-sm)',
               backgroundColor: '#f0f0f0'
            }}
         >
            {/* status */}
            <IonSkeletonText animated
               style={{
                  position: 'absolute',
                  top: '6px',
                  right: '6px',
                  width: '81px',
                  height: '21px',
                  borderRadius: 'var(--border-radius-sm)'

               }}
            ></IonSkeletonText>
            <IonSkeletonText animated
               style={{
                  position: 'absolute',
                  bottom: '6px',
                  left: '6px',
                  width: '66%',
                  height: '20px',
                  borderRadius: 'var(--border-radius-sm)'

               }}
            ></IonSkeletonText>
         </div>

         {/* titulo / dia */}
         <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--gap-xsm)'
         }}>
            {/* titulo */}
            <div style={{
               width: '100%',
               display: 'flex',
               flexDirection: 'column',
               gap: '2px'
            }}>
               <IonSkeletonText animated
                  style={{
                     width: '100%',
                     height: 'var(--fs-h4)',
                     borderRadius: 'var(--border-radius-sm)'
                  }}
               ></IonSkeletonText>
               <IonSkeletonText animated
                  style={{
                     width: '60%',
                     height: 'var(--fs-h4)',
                     borderRadius: 'var(--border-radius-sm)'
                  }}
               ></IonSkeletonText>
            </div>
            {/* dia */}
            <IonSkeletonText animated
               style={{
                  width: '110px',
                  height: '20px',
                  borderRadius: 'var(--border-radius-sm)'
               }}
            ></IonSkeletonText>
         </div>

         {/* descripcion */}
         <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
         }}>
            <IonSkeletonText animated
               style={{
                  width: '90%',
                  height: 'var(--fs-body)',
                  borderRadius: 'var(--border-radius-sm)'
               }}></IonSkeletonText>
            <IonSkeletonText animated
               style={{
                  width: '95%',
                  height: 'var(--fs-body)',
                  borderRadius: 'var(--border-radius-sm)'
               }}></IonSkeletonText>
            <IonSkeletonText animated
               style={{
                  width: '80%',
                  height: 'var(--fs-body)',
                  borderRadius: 'var(--border-radius-sm)'
               }}></IonSkeletonText>
               <IonSkeletonText animated
               style={{
                  width: '75%',
                  height: 'var(--fs-body)',
                  borderRadius: 'var(--border-radius-sm)'
               }}></IonSkeletonText>
               <IonSkeletonText animated
               style={{
                  width: '90%',
                  height: 'var(--fs-body)',
                  borderRadius: 'var(--border-radius-sm)'
               }}></IonSkeletonText>
         </div>

         <IonSkeletonText
            style={{
               maringTop: 'var(--gap-xsm)',
               width: '100%',
               height: '36px',
               borderRadius: 'var(--border-radius-sm)'
            }}
         ></IonSkeletonText>
      </div>
   )
}
