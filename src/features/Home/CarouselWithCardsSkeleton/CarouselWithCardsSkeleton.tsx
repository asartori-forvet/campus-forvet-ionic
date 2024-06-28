import { IonSkeletonText } from '@ionic/react'
import React from 'react'

interface CarouselWithCardsSkeletonProps {
   cardWidth?: string;
   cardHeight?: string;
   withText?: boolean;
}

const CarouselWithCardsSkeleton: React.FC<CarouselWithCardsSkeletonProps> = ({
   cardHeight = '250px',
   cardWidth = '250px',
   withText = true
}) => {
   return (

      <div style={{
         minWidth: '100%',
         display: 'flex',
         overflowX: 'scroll',
         alignItems: 'flex-start',
         justifyContent: 'flex-start',
         gap: 'var(--gap-lg)',
      }}>

         {/* Card */}
         <div
            style={{
               width: cardWidth,
               display: 'flex',
               flexDirection: 'column',
               gap: 'var(--gap-sm)',

            }}
         >
            <IonSkeletonText animated
               style={{
                  width: cardWidth,
                  height: cardHeight,
                  borderRadius: 'var(--border-radius-sm)'
               }}
            ></IonSkeletonText>
            {/* textos */}
            {withText && <div
               style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column'
               }}
            >
               <IonSkeletonText animated
                  style={{
                     width: '200px',
                     height: '18px',
                     borderRadius: 'var(--border-radius-sm)'
                  }}
               ></IonSkeletonText>
               <IonSkeletonText animated
                  style={{
                     width: '240px',
                     height: '18px',
                     borderRadius: 'var(--border-radius-sm)'
                  }}
               ></IonSkeletonText>
            </div>}
         </div>

         {/* Card */}
         <div
            style={{
               width: cardWidth,
               display: 'flex',
               flexDirection: 'column',
               gap: 'var(--gap-sm)'
            }}
         >
            <IonSkeletonText animated
               style={{
                  width: cardWidth,
                  height: cardHeight,
                  borderRadius: 'var(--border-radius-sm)'
               }}
            ></IonSkeletonText>
            {/* texto */}
            {withText &&
               <div
                  style={{
                     width: '100%',
                     display: 'flex',
                     flexDirection: 'column'
                  }}
               >

                  <IonSkeletonText animated
                     style={{
                        width: '200px',
                        height: '18px',
                        borderRadius: 'var(--border-radius-sm)'
                     }}
                  ></IonSkeletonText>

               </div>
            }

         </div>
      </div>
   )
}

export default CarouselWithCardsSkeleton