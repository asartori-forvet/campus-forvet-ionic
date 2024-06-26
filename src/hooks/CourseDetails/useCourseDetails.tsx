import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../contexts/AuthContext';
import { useParams } from 'react-router';
import { Course } from '../../types/types';

interface RouteParams {
   courseId: string;
}

export default function useCourseDetails() {
   const { authToken } = useContext(AuthContext)
   const { courseId }: RouteParams = useParams();
   const [course, setCourse] = useState<Course | null>(null);
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(false);

   useEffect(() => {
      const getCourseInfo = async () => {
         try {
            setIsLoading(true)
            const response = await fetch(`http://localhost:8000/campus/course/${courseId}`, {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authToken}`
               }
            })
            const data = await response.json()
            
            if(data.error){
               throw new Error(data.error);
            }
            
            setCourse(data)
            setError(false)

         } catch (error) {
            console.log(error)
            setError(true)
         } finally {
            setIsLoading(false)
         }
      }
      getCourseInfo()
   }, [courseId, authToken, error])

   return{
      course, isLoading, error, setError
   }
}
