import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { App as CapApp } from "@capacitor/app";
import { Browser } from "@capacitor/browser";
import { useAuth0 } from "@auth0/auth0-react";
import { callbackUri } from "./auth.config";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes.jsx";

/* Swiper */
import 'swiper/css';

import { withAuthContextProvider, withAuthContextReady } from "./contexts/AuthContext";

setupIonicReact({
   mode: "md",
});

const App: React.FC = () => {
   const { handleRedirectCallback } = useAuth0();

   useEffect(() => {
      CapApp.addListener("appUrlOpen", async ({ url }) => {
         if (url.startsWith(callbackUri)) {
            if (
               url.includes("state") &&
               (url.includes("code") || url.includes("error"))
            ) {
               await handleRedirectCallback(url);
            }

            await Browser.close();
         }
      });
   }, [handleRedirectCallback]);

   return (
      <IonApp>
         <IonReactRouter>
            <AppRoutes />
         </IonReactRouter>
      </IonApp>
   );
};

// export default App;
const WrappedApp = withAuthContextProvider(withAuthContextReady(App));
export default WrappedApp