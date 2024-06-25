import React from 'react'
import { Route } from 'react-router';
import Home from '../pages/Home/Home';
import { withAppContextProvider, withAppContextReady } from '../contexts/AppContext';
import ProtectedRoute from './ProtectedRoute';
import OwnCourses from '../pages/OwnCourses/OwnCourses';
import CourseDetails from '../pages/CourseDetails/CourseDetails';
import Profile from '../pages/Profile/Profile';
import LessonDetails from '../pages/LessonDetails/LessonDetails';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { home, person, school } from 'ionicons/icons';

const CampusRoutes: React.FC = () => {
   // const {canGoBack} = useIonRouter()
   // const canBack = canGoBack()

   return (
      <IonTabs >

         <IonTabBar slot="bottom" color='primary'>
            <IonTabButton tab="home" href="/dashboard">
               <IonIcon icon={home} />
               <IonLabel>Inicio</IonLabel>
            </IonTabButton>
            <IonTabButton tab="mis-cursos" href="/mis-cursos">
               <IonIcon icon={school} />
               <IonLabel>Mis cursos</IonLabel>
            </IonTabButton>
            <IonTabButton tab="perfil" href="/perfil">
               <IonIcon icon={person} />
               <IonLabel>Mi perfil</IonLabel>
            </IonTabButton>
         </IonTabBar>

         <IonRouterOutlet >
            
            <Route 
               path="/dashboard" 
               render={() => <ProtectedRoute component={Home} />} 
            />
            
            <Route 
               path="/mis-cursos" 
               render={() => <ProtectedRoute component={OwnCourses} />} 
            />
            
            <Route 
               path="/curso/:courseId" 
               render={() => <ProtectedRoute component={CourseDetails} />} 
            />
            
            <Route 
               path="/perfil" 
               render={() => <ProtectedRoute component={Profile} />} 
            />
            
            <Route 
               path="/clase/:lessonId" 
               render={() => <ProtectedRoute component={LessonDetails} />} 
            />

         </IonRouterOutlet>


      </IonTabs>
   )
}

export default withAppContextProvider(withAppContextReady(CampusRoutes));


