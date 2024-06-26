import React, { Dispatch, SetStateAction } from 'react';
import { AlertState, Item, Notifications, UserType } from '../../types/types';

interface AppContextProps {
   isReady: boolean;
   currentUser: UserType | null;
   setCurrentUser: Dispatch<SetStateAction<UserType | null>> | null;
   courses: Item[] | null;
   setCourses: Dispatch<SetStateAction<Item[] | null>> | null;
   notifications: Notifications | null;
   setNotifications: Dispatch<SetStateAction<Notifications | null>> | null;
   alert: AlertState;
   setAlert: Dispatch<SetStateAction<AlertState>>;
}

const defaultValue: AppContextProps = {
   isReady: false,
   currentUser: null,
   setCurrentUser: null,
   setCourses: null,
   courses: null,
   notifications: null,
   setNotifications: null,
   alert: {
      isOpen: false,
      message: '',
      status: '',
   },
   setAlert: () => {},
};

const AppContext = React.createContext<AppContextProps>(defaultValue);

export default AppContext;
