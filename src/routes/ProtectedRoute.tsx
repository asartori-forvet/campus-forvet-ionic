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
import AuthContext from "../contexts/AuthContext";
import { withAuthenticationRequired, WithAuthenticationRequiredOptions } from "@auth0/auth0-react";
import { useHistory } from "react-router";
import LoaderFullscreen from "../components/LoaderFullscreen/LoaderFullscreen";

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
      onRedirecting: () => < LoaderFullscreen />,
      returnTo: "/",
      ...options,
   });

   return <AuthenticatedComponent />;
});

// Envuelve ProtectedRoute con AuthContextProvider y AuthContextReady
// const WrappedProtectedRoute = withAuthContextProvider(withAuthContextReady(ProtectedRoute));

// export default WrappedProtectedRoute;
export default ProtectedRoute