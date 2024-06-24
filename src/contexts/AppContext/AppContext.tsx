import React, { Dispatch, SetStateAction } from 'react';
import { Item, UserType } from '../../types/types';

interface AppContextProps {
   isReady: boolean;
   currentUser: UserType | null;
   setCurrentUser: Dispatch<SetStateAction<UserType | null>> | null;
   courses: Item[] | null;
   setCourses: Dispatch<SetStateAction<Item[] | null>> | null; 
}

const defaultValue: AppContextProps = {
   isReady: false,
   currentUser: null,
   setCurrentUser: null,
   setCourses: null,
   courses: null,
};

const AppContext = React.createContext<AppContextProps>(defaultValue);

export default AppContext;
