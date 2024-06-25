import {
   IonContent,
   IonPage,
} from "@ionic/react";

import "./Home.css";
import OwnCoursesCarousel from "../../features/Home/OwnCoursesCarousel/OwnCoursesCarousel";
import NewsCarousel from "../../features/Home/NewsCarousel/NewsCarousel";
import HomeHeader from "../../features/Home/HomeHeader/HomeHeader";
import AdvicesCarousel from "../../features/Home/AdvicesCarousel/AdvicesCarousel";

const Home: React.FC = () => {

   return (
      <IonPage >
         < HomeHeader />

         <IonContent fullscreen>
            <div className="HomePage-wrapper-container">
               < OwnCoursesCarousel />
               < NewsCarousel />
               < AdvicesCarousel />
            </div>

         </IonContent>


      </IonPage>
   );
};

export default Home;
