// import React, { useContext, memo } from "react";
// import AuthContext, {
//    withAuthContextProvider,
//    withAuthContextReady,
// } from "../contexts/AuthContext";
// import { withAuthenticationRequired } from "@auth0/auth0-react";
// import { useHistory } from "react-router";


// const ProtectedRoute = memo(({ component, ...args }) => {
//    const history = useHistory()
//    const { isAuth } = useContext(AuthContext);

//    if (!isAuth){
//       history.replace('/')
//    }

//    const Component = withAuthenticationRequired(component, args);
//    return <Component />;
// });

// export default withAuthContextProvider(withAuthContextReady(ProtectedRoute));

import React, { useContext, memo, ComponentType } from "react";
import AuthContext, { withAuthContextProvider, withAuthContextReady } from "../contexts/AuthContext";
import { withAuthenticationRequired, WithAuthenticationRequiredOptions } from "@auth0/auth0-react";
import { useHistory } from "react-router";

interface ProtectedRouteProps {
  component: ComponentType<any>;
  options?: WithAuthenticationRequiredOptions;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = memo(({ component: Component, options }) => {
   const history = useHistory();
   const { isAuth } = useContext(AuthContext);

   if (!isAuth) {
      history.replace("/");
      return null; // Si no está autenticado, no renderiza nada
   }

   // Llama a withAuthenticationRequired para obtener el componente autenticado
   const AuthenticatedComponent = withAuthenticationRequired(Component, {
      // Configura las opciones necesarias para withAuthenticationRequired
      onRedirecting: () => <div>Loading...</div>, // Opcional: componente de carga
      returnTo: "/", // Página a la que se redirige después de la autenticación
      ...options, // Pasa otras props necesarias para withAuthenticationRequired
   });

   return <AuthenticatedComponent />;
});

// Envuelve ProtectedRoute con AuthContextProvider y AuthContextReady
const WrappedProtectedRoute = withAuthContextProvider(withAuthContextReady(ProtectedRoute));

export default WrappedProtectedRoute;