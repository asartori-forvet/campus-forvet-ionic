import React, { useContext, useState } from 'react'
import AppContext from '../../contexts/AppContext'
import AuthContext from '../../contexts/AuthContext'
import { validateForm } from '../../utils/validate-profile-from'

export default function useProfile() {
   const { setCurrentUser, setAlert } = useContext(AppContext)
   const { authToken } = useContext(AuthContext)
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(false)

   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const name = formData.get('name') as string;
      const lastname = formData.get('lastname') as string;
      const phone = formData.get('phone') as string;
      const nationality = formData.get('nationality') as string;

      const isInvalid = validateForm({ name, lastname, phone, nationality })
      if (isInvalid) {
         setAlert({ isOpen: true, message: isInvalid, status: 'error' })
         return
      }

      try {
         setIsLoading(true)

         const data = {
            name,
            lastname,
            phone,
            nationality
         }

         const options = {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify({ data })
         };

         const response = await fetch('http://localhost:8000/campus/users', options);

         if(!response.ok){
               throw new Error()
         }

         const updatedUser = await response.json();
         setCurrentUser && setCurrentUser(updatedUser)
         setAlert({ isOpen: true, message: 'Tus cambios han sido guardado exitosamente. Podrás verlos reflejados ahora mismo.', status: 'success' })

      } catch (error) {
         setAlert({
            isOpen: true,
            message: 'Por favor, ten paciencia. Estamos trabajando para solucionarlo',
            status: 'error'
         })
      } finally {
         setIsLoading(false)
      }
   };

   return {
      onSubmit,
      isLoading,
      error,
      setError
   }
}
