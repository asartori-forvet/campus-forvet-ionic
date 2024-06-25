import React from "react";
import "./LessonCard.css";
import { IonButton, IonIcon, IonItem } from "@ionic/react";
import { videocam, calendar } from 'ionicons/icons';
import moment from 'moment'
import { openUrl } from "../../../utils/openUrl";
import { LessonData } from "../../../types/types";



interface LessonCardProps {
   lesson: LessonData;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {

   return (
      <IonItem
         routerLink={`/clase/${lesson.data._id}`}
         className="coursesCards-father-div"
         key={lesson.data._id}
      >
         <div className="coursesCards-description-color">
            <div className="coursesCards-date-container">
               <IonIcon color="var(--ion-color-primary-contrast)" icon={calendar}></IonIcon>
               <h6>{moment(lesson.data.initDate).format('DD-MM-YYYY')}</h6>
            </div>
            <h6 className="coursesCards-description">{lesson.data.name}</h6>
            <div className="coursesCards-buttons-div">
               <IonButton
                  color='secondary'
                  onClick={() => openUrl(`${lesson.data.roomUrl}`)}
               >
                  <IonIcon style={{ marginRight: 'var(--gap-xsm)' }} slot="icon-only" icon={videocam}></IonIcon>
                  Ver Clase
               </IonButton>
               <IonButton
                  color='primary'
                  routerLink={`/clase/${lesson.data._id}`}
               >
                  Ver detalles
               </IonButton>
            </div>
         </div>
      </IonItem>
   );
};

export default LessonCard;
