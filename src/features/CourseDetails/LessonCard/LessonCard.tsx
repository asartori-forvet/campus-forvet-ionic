import React from "react";
import "./LessonCard.css";
import { IonButton, IonIcon, IonItem } from "@ionic/react";
import { videocam, calendar, time } from 'ionicons/icons';
import moment from 'moment'
import { openUrl } from "../../../utils/openUrl";
import { Exam, LessonData } from "../../../types/types";



interface LessonCardProps {
   lesson: LessonData | Exam;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {

   const isLessonData = (lesson: LessonData | Exam): lesson is LessonData => {
      return lesson.type === 'lessons';
   };

   const isLesson = isLessonData(lesson)

   const mapClassNames = {
      lessons: '',
      exams: 'LessonCard-exams-container',
      reExam: 'LessonCard-reExam-container',
      recoveryExam: 'LessonCard-recoveryExam-container'
   }

   return (
      <IonItem
         routerLink={
            isLesson
               ? `/clase/${lesson.data._id}`
               : undefined
         }
         className="coursesCards-father-div"
         key={lesson.data._id}
      >
         <div className={`coursesCards-description-color ${mapClassNames[lesson?.type]}`}>
            <div className="coursesCards-date-container">
               <div className="coursesCards--initDate">
                  <IonIcon color="var(--ion-color-primary-contrast)" icon={calendar}></IonIcon>
                  <h6>{moment(lesson.data.initDate).format('DD-MM-YYYY')}</h6>
               </div>
               {!isLesson &&
                  <div className="coursesCards--initDate">

                     <h6>{lesson.data.duration} minutos</h6>
                     <IonIcon color="var(--ion-color-primary-contrast)" icon={time}></IonIcon>
                  </div>
               }
            </div>
            <h6 className="coursesCards-description">{lesson.data.name}</h6>
            {isLesson &&
               <div className="coursesCards-buttons-div">
                  <IonButton
                     color='secondary'
                     onClick={() => openUrl(`${lesson.data.roomUrl}`)}
                  >
                     <IonIcon style={{ marginRight: 'var(--gap-xsm)' }} slot="icon-only" icon={videocam}></IonIcon>
                     Ver Clase
                  </IonButton>
                  <IonButton
                     routerLink={`/clase/${lesson.data._id}`}
                  >
                     Ver detalles
                  </IonButton>
               </div>
            }
         </div>
      </IonItem>
   );
};

export default LessonCard;
