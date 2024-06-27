import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../contexts/AppContext'
import AuthContext from '../../contexts/AuthContext'

export default function useOwnCourses() {

   const { courses, setCourses} = useContext(AppContext)
   const { authToken } = useContext(AuthContext)
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(false)

   const [filter, setFilter] = useState<{ name: string; state: string }>({
      name: '',
      state: 'all',
   });

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

            if(data.error){
               throw new Error(data.error)
            }
            
            if(data && setCourses){
               setCourses(data)
            }
            setError(false)
         } catch (error) {
            console.log(error)
            setError(true)
         } finally {
            setIsLoading(false)
         }
      }
      if(courses === null && !error){
         getCourses()
      }
   }, [authToken, courses, setCourses, error])

   const filterCourses = () => {
      return courses?.filter(course => {
         const matchesName = course.comercialInformation.name.toLowerCase().includes(filter.name.toLowerCase());
         const matchesState = filter.state === 'all' || course.state === filter.state;
         return matchesName && matchesState;
      });
   };

   const filteredCourses = filterCourses();

  return {
   filteredCourses, isLoading, setFilter, error, filter
  }
}
