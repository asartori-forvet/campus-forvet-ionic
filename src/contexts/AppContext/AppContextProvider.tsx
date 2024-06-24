import React, { useEffect, useState, useMemo, useContext, ReactNode } from "react";
import AppContext from "./AppContext";
import AuthContext from "../AuthContext";
import { Item, UserType } from "../../types/types";

interface AppContextProviderProps {
   children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
   const { authToken } = useContext(AuthContext);
   const [isReady, setIsReady] = useState<boolean>(false);
   const [currentUser, setCurrentUser] = useState<UserType | null>(null);
   const [courses, setCourses] = useState<Item[] | null>(null);

   useEffect(() => {
      
      const init = async () => {
         try {
            const response = await fetch(`http://localhost:8000/campus/login`, {
               headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${authToken}`,
               }
            });

            if (!response.ok) {
               throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            setCurrentUser(data.user);
         } catch (err) {
            console.log(err);
            
         } finally{
            setIsReady(true);
         }
      };

      init();
   }, [authToken]);

   const context = useMemo(
      () => ({
         isReady,
         currentUser,
         setCurrentUser,
         courses,
         setCourses,
      }),
      [
         isReady,
         currentUser,
         setCurrentUser,
         courses,
         setCourses,
      ]
   );
   return (
      <AppContext.Provider value={context}>{children}</AppContext.Provider>
   );
};
export default AppContextProvider;
