import React, { Dispatch, SetStateAction } from 'react';
import { Item } from '../../types/types';

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

interface AppContextProps {
   isReady: boolean;
   currentUser: UserType | null;
   setCurrentUser: Dispatch<SetStateAction<UserType | null>> | null;
   courses: Item[] | null; // Tipo específico para courses
   setCourses: Dispatch<SetStateAction<Item[] | null>> | null; // Tipo corregido para setCourses

}

const defaultValue: AppContextProps = {
   isReady: false,
   currentUser: null,
   setCurrentUser: null,
   setCourses: null,
   courses: null
};

const AppContext = React.createContext<AppContextProps>(defaultValue);

export default AppContext;
