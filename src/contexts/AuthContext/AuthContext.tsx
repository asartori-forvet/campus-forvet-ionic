import React from 'react';

interface AuthContextType {
   idAuth: string | null;
   authToken: string | null;
   isAuth: boolean;
   isReady: boolean;
}

const AuthContext = React.createContext<AuthContextType>({
   idAuth: null,
   authToken: null,
   isAuth: false,
   isReady: false,
});

export default AuthContext;