
import React, { useContext, useEffect, useState } from 'react'
import { LessonItem } from '../../types/types'
import AuthContext from '../../contexts/AuthContext';
import { useParams } from 'react-router';

interface RouteParams {
   lessonId: string;
}

export default function useLessonDetails() {
   const { authToken } = useContext(AuthContext)
   const { lessonId }: RouteParams = useParams();
   const [lesson, setLesson] = useState<LessonItem | null>(null)
   const [isLoading, setIsLoading] = useState(false)
   const [isModal, setIsModal] = useState(false)

   useEffect(() => {
      const getLessonInfo = async () => {
         try {
            setIsLoading(true)
            const response = await fetch(`http://localhost:8000/campus/class/${lessonId}`, {
               headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${authToken}`
               }
            })
            const data = await response.json()
            setLesson(data)
         } catch (error) {
            console.log(error)
         } finally {
            setIsLoading(false)
         }
      }
      getLessonInfo()
   }, [lessonId, authToken])

  return {
   lesson, isLoading, isModal, setIsModal
  }
}
