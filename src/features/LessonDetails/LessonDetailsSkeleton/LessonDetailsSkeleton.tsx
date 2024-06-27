import { IonAvatar, IonSkeletonText } from "@ionic/react";


export default function LessonDetailsSkeleton() {
   return (
      <div style={{
         width: '100%',
         height: '100%',
         display: 'flex',
         flexDirection: "column",
         gap: 'var(--gap-lg)',
         padding: 'var(padding-app)',
      }}
      >
         <div
            style={{
               width: '100%',
               display: "flex",
               justifyContent: "space-between",
               alignItems: 'center'
            }}
         >
            <IonSkeletonText
               animated
               style={{
                  width: '30%',
                  height: 'var(--fs-h4)'
               }}
            ></IonSkeletonText>
            <div
               style={{
                  display: "flex",
                  width: 'max-content',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 'var(--gap-xsm)'
               }}
            >
               <IonSkeletonText
                  animated
                  style={{
                     height: 'var(--fs-h4)',
                     width: '26px',
                     borderRadius: 'var(--border-radius-sm)'
                  }}
               ></IonSkeletonText>
               <IonSkeletonText
                  animated
                  style={{
                     height: 'var(--fs-h4)',
                     width: '26px',
                     borderRadius: 'var(--border-radius-sm)'
                  }}
               ></IonSkeletonText>

            </div>
         </div>

         <div
            style={{
               display: "flex",
               flexDirection: "column",
               gap: '2px'
            }}
         >
            <IonSkeletonText
               animated
               style={{
                  width: '100%',
                  height: 'var(--fs-h3)',
                  borderRadius: 'var(--border-radius-sm)'
               }}></IonSkeletonText>
            <IonSkeletonText
               animated
               style={{
                  width: '85%',
                  height: 'var(--fs-h3)',
                  borderRadius: 'var(--border-radius-sm)'
               }}></IonSkeletonText>
            <IonSkeletonText
               animated
               style={{
                  width: '90%',
                  height: 'var(--fs-h3)',
                  borderRadius: 'var(--border-radius-sm)'
               }}></IonSkeletonText>
         </div>

         <div
            style={{
               width: '100%',
               display: "flex",
               flexDirection: 'column',
               gap: 'var(--gap-xsm)',
            }}
         >
            <div style={{
               width: '100%',
               height: '36px',
               display: 'grid',
               placeItems: 'center',
               backgroundColor: '#f0f0f0',
               borderRadius: 'var(--border-radius-sm)'
            }}
            >
               <IonSkeletonText animated style={{
                  width: '70%',
                  height: '14px',
                  borderRadius: 'var(--border-radius-sm)'
               }}></IonSkeletonText>
            </div>
            <div style={{
               width: '100%',
               height: '36px',
               display: 'grid',
               placeItems: 'center',
               backgroundColor: '#f0f0f0',
               borderRadius: 'var(--border-radius-sm)'
            }}
            >
               <IonSkeletonText animated style={{
                  width: '70%',
                  height: '14px',
                  borderRadius: 'var(--border-radius-sm)'
               }}></IonSkeletonText>
            </div>

         </div>

         <div
            style={{
               width: '100%',
               display: "flex",
               flexDirection: "column",
               gap: 'var(--gap-xsm)',
               alignItems: 'center'
            }}
         >
            <IonSkeletonText
               animated
               style={{
                  width: '200px',
                  height: '22px'
               }}></IonSkeletonText>
            <IonSkeletonText
               animated
               style={{
                  width: '100px',
                  height: 'var(--fs-body)'
               }}></IonSkeletonText>
         </div>

         <div
            style={{
               width: '100%',
               display: "flex",
               flexDirection: "column",
               gap: 'var(--gap-xsm)',
               alignItems: 'center'
            }}
         >
            <IonSkeletonText
               animated
               style={{
                  width: '150px',
                  height: '22px'
               }}></IonSkeletonText>
            <IonAvatar
               style={{
                  width: '80px',
                  height: '80px',
               }}
            >
               <IonSkeletonText
                  animated
                  style={{
                     width: '100%',
                     height: '100%',
                     borderRadius: '50%'
                  }}
               ></IonSkeletonText>
            </IonAvatar>

            <IonSkeletonText
               animated
               style={{
                  width: '220px',
                  height: 'var(--fs-h5)'
               }}></IonSkeletonText>
         </div>

         <div
            style={{
               width: '100%',
               display: "flex",
               flexDirection: "column",
               gap: 'var(--gap-xsm)',
               alignItems: 'center'
            }}
         >
            <IonSkeletonText
               animated
               style={{
                  width: '150px',
                  height: '22px'
               }}></IonSkeletonText>
            <IonAvatar
               style={{
                  width: '80px',
                  height: '80px',
               }}
            >
               <IonSkeletonText
                  animated
                  style={{
                     width: '100%',
                     height: '100%',
                     borderRadius: '50%'
                  }}
               ></IonSkeletonText>
            </IonAvatar>

            <IonSkeletonText
               animated
               style={{
                  width: '200px',
                  height: 'var(--fs-h5)'
               }}></IonSkeletonText>
         </div>
      </div>
   )
}