/* CARD COURSE */
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