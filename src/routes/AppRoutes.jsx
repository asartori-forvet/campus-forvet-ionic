import { Redirect } from "react-router-dom";
import Login from "../pages/Login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import Callback from "../pages/Callback/Callback";
import { IonRouterOutlet } from "@ionic/react";
import { Route } from 'react-router'
import CampusRoutes from "./CampusRoutes";

export default function AppRoutes() {
   const { isAuthenticated } = useAuth0()

   

   return (
      <IonRouterOutlet>
         < Route exact={true} path="/" render={() => isAuthenticated
            ? <Redirect
               from="/"
               to='/callback'
            />
            : <Login />
         }
         />
         < Route exact={true} path="/callback" render={() => <Callback />} />

         < CampusRoutes />
      </IonRouterOutlet>
   )

}


