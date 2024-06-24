import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";


export default function useFetch({url}) {
   const { authToken } = useContext(AuthContext)
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)
   const [data, setData] = useState(null)

   useEffect(() => {
      const getData = async () => {
         try {
            setIsLoading(true)

            const response = await fetch(url, {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authToken}`
               }
            })
            const data = await response.json()
            setData(data)
            
         } catch (error) {
            console.error(error)
            setError(error)
         } finally {
            setIsLoading(false)
         }
      }
      
      getData()
   }, [authToken, url])

   return{
      isLoading, error, data
   }
}