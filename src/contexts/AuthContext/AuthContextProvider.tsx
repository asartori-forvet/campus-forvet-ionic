import React, { useEffect, useState, useMemo } from "react";
import AuthContext from "./AuthContext";
import { useAuth0 } from "@auth0/auth0-react";

interface AuthContextProviderProps {
   children: React.ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
   const { getIdTokenClaims, isAuthenticated, isLoading } = useAuth0();

   const [authToken, setAuthToken] = useState<string | null>(null);
   const [isAuth, setIsAuth] = useState(false);
   const [isReady, setIsReady] = useState(false);
   const [idAuth, setIdAuth] = useState<string | null>(null);

   async function getToken() {
      let claims = await getIdTokenClaims();
      if (claims) {
         setIdAuth(claims["sub"]);
         return claims.__raw;
      } else {
         return null
      }
   }

   useEffect(() => {
      const init = async () => {
         if (!isLoading) {

            getToken()
               .then((id_token: string | null) => {
                  if (id_token) {
                     setIsAuth(true);
                     setAuthToken(id_token);
                 }
               })
               .catch((error) => {
                  console.log(error)
                  setIsAuth(false);
               })
               .finally(() => setIsReady(true));
         }
      };

      init();
   }, [authToken, isAuthenticated, isLoading, isReady]);

   const context = useMemo(
      () => ({
         idAuth,
         authToken,
         isAuth,
         isReady,
      }),
      [idAuth, authToken, isAuth, isReady]
   );
   return (
      <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
   );
};
export default AuthContextProvider;
