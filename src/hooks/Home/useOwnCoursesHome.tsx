import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../contexts/AppContext'
import AuthContext from '../../contexts/AuthContext'

export default function useOwnCoursesHome() {
   const { courses, setCourses } = useContext(AppContext)
   const { authToken } = useContext(AuthContext)
   const [ isLoading, setIsLoading ] = useState(false)
   const [ error, setError ] = useState(false)

   useEffect(() => {
      const getCourses = async () => {

         setIsLoading(true)
         try {
            const response = await fetch('http://localhost:8000/campus/users/courses', {
               headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${authToken}`,
               }
            })
            const data = await response.json()
            if (data && setCourses) {
               setCourses(data)
               setError(false)
            }

         } catch (error) {
            console.log(error)
            setError(true)
         } finally {
            setIsLoading(false)
         }
      }
      if (courses === null && !error) {
         getCourses()
      }
   }, [authToken, courses, setCourses, error])

   return {
      isLoading,
      error, 
      setError, 
      courses, 
   }
}
