import React, { useContext, useEffect } from 'react'
import {  useHistory } from 'react-router'
import AuthContext from '../../contexts/AuthContext';
import { useAuth0 } from '@auth0/auth0-react';
import LoaderFullscreen from '../../components/LoaderFullscreen/LoaderFullscreen';

export default function Callback() {
   const history = useHistory()

   const { isAuthenticated, user } = useAuth0();
   const { authToken } = useContext(AuthContext);

   useEffect(() => {
      const validateUser = async () => {
         try {
            const response = await fetch(`http://localhost:8000/campus/login`, {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authToken}`,
               },
            })

            const data = await response.json()

            if (data.error) {
               return history.replace('/');
            }
            if (data.complete) {
               if (data.complete) {
                  if (data.user.disabled === false) {
                     return history.replace('/dashboard');
                  } else {
                     return history.replace('/');
                  }
               } else {
                  return history.replace('/dashboard');
               }
            }
         } catch (err: any) {
            console.log(err);
            if (err.request && err.request.status === 400) {
               return history.replace('/dashboard');
            }
            return history.replace('/');
         }
      };

      if (isAuthenticated) {
         validateUser();
      }
   }, [user, isAuthenticated, authToken]);

   return < LoaderFullscreen />

}
