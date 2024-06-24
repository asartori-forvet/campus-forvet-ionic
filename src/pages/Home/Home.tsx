import {
   IonContent,
   IonPage,
} from "@ionic/react";

import "./Home.css";
import OwnCoursesCarousel from "../../features/Home/OwnCoursesCarousel/OwnCoursesCarousel";
import NewsCarousel from "../../features/Home/NewsCarousel/NewsCarousel";
import HomeHeader from "../../features/Home/HomeHeader/HomeHeader";

const Home: React.FC = () => {

   return (
      <IonPage >
         < HomeHeader />

         <IonContent fullscreen>
            <div className="HomePage-wrapper-container">
               < OwnCoursesCarousel />
               < NewsCarousel />
            </div>

         </IonContent>


      </IonPage>
   );
};

export default Home;
