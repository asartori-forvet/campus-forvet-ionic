/* CARD COURSE */


export interface UserType {
   _id: string;
   about: {
      description: string;
      personalItems: string[];
   };
   academicUnits: string[];
   academicUnitsData: {
      certificates: string[];
   };
   animalType: string;
   birthDate: string;
   city: string;
   codirection: string[];
   coordinator: string[];
   direction: string[];
   disabled: boolean;
   discussions: {
      allowed: boolean;
      interest: string[];
   };
   email: string;
   env: string;
   exams: string[];
   forVetRole: string[];
   gender: string;
   lastname: string;
   name: string;
   nationality: string;
   notes: any[];
   phone: string;
   profilePicture: string;
   specialties: string[];
   testimonies: string[];
   type: string;
   user_id_campus: string;
   __v: number;
}

interface Price {
   usd: number;
   ars: number;
}

interface ComercialInformation {
   certificate: string;
   classDays: string;
   classHour: string;
   classQuantity: number;
   description: string;
   endBreak: string | null;
   endDate: string;
   heroImage: string;
   image: string;
   initBreak: string | null;
   initialDate: string;
   name: string;
   outsideCampus: boolean;
   outsideCampusUrl: string | null;
   price: Price;
   subscriptionPlans: any[];
   whoIsThisFor: string;
}

export interface Item {
   comercialInformation: ComercialInformation;
   modules: string[];
   percentage: string;
   state: string;
   _id: string;
}

export type State = 'Closed' | 'Opened' | 'Open';

export interface CardCourseProps {
   item: Item;
}


export interface NewsItem {
   _id: string;
   place: string;
   img: string;
   title: string;
   notification: string;
   expireAt: string;
   __v: number;
   link: string;
}

export interface Lesson {
   _id: string;
   type: "lessons" | "exams" | "recoveryExam" | "reExam";
   initDate: string;
   materials: string[];
   name: string;
   roomUrl: string;
   teachers: string[];
}

export interface Course {
   _id: string;
   name: string;
   image: string;
   events: LessonData[];
}

export interface Teacher {
   about: any; // Puedes definir una interfaz específica para 'about' si conoces su estructura
   _id: string;
   name: string;
   lastname: string;
   profilePicture: string;
}

export interface LessonItem {
   academicUnits: any[]; // Puedes definir una interfaz específica para 'academicUnits' si conoces su estructura
   initDate: string;
   materials: any[]; // Puedes definir una interfaz específica para 'materials' si conoces su estructura
   moderator: Teacher;
   modules: string[]; // Puedes definir una interfaz específica para 'modules' si conoces su estructura
   name: string;
   notes: any[]; // Puedes definir una interfaz específica para 'notes' si conoces su estructura
   rates: {
      user: any[],
      valorations: {
         average: number;
         bad: number;
         good: number;
      };
   };
   roomUrl: string;
   state: State;
   teachers: Teacher[];
   userHasRated: boolean;

   __v: number;
   _id: string;
}

export interface LessonData {
   data: {
      initDate: string;
      materials: any[];
      name: string;
      roomUrl: string;
      teachers: string[];
      _id: string;
   }
   type: 'lessons'; // O cualquier otra cadena que uses para identificar el tipo de lección
}

/* NEWS / Notificaciones */
export interface Notification {
   _id: string;
   place: string;
   img?: string;
   title: string;
   notification: string;
   expireAt: string;
   __v: number;
   link?: string;
   type?: string;
   newDate?: string;
}

export interface Notifications {
   nationality: Notification[][];
   general: Notification[][];
   acaUnits: Notification[][];
}

export interface Advice {
   _id: string;
   advice: string;
   user: {
      _id: string;
      type: string;
      name: string;
      lastname: string;
      profilePicture?: string;
   };
   __v: number;
}


/* notifiaciones */

type AlertStatus = '' | 'success' | 'warning' | 'error';

export interface AlertState {
   isOpen: boolean;
   message: string;
   status: AlertStatus;
}