import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../contexts/AuthContext';
import { Advice } from '../../types/types';

export default function useAdvices() {
   const { authToken } = useContext(AuthContext)
   const [isLoading, setIsLoading] = useState(false)
   const [advices, setAdvices] = useState<Advice[] | null>(null);
   const [error, setError] = useState(false)

   useEffect(() => {
      const getAdvices = async () => {
         try {
            setIsLoading(true)

            const response = await fetch('http://localhost:8000/campus/advices', {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authToken}`
               }
            })

            const data = await response.json()
            if(data.error){
               throw new Error(data.error)
            }
            setAdvices(data)
            setError(false)
         } catch (error) {
            console.log(error)
            setError(true)
         } finally {
            setIsLoading(false)
         }
      }
      if (advices === null && !error) {
         getAdvices()
      }
   }, [authToken, advices, error])


   return {
      isLoading, advices
   }
}
