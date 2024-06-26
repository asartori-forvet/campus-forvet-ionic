import { IonAlert } from '@ionic/react'
import React, { useContext } from 'react'
import AppContext from '../../contexts/AppContext'

const alertMessage = (_status: string) => {
   if (_status === 'error') {
      return {
         header: 'Error',
         subHeader: 'No hemos podido enviar tus datos.'
      }
   }
   if (_status === 'success') {
      return {
         header: 'Operación exitosa',
         subHeader: 'Se han guardado los datos.'
      }
   }
   return {
      header: 'Atención',
      subHeader: 'Esta es una operación definitiva'
   }
}

export default function Alert() {
   const { alert, setAlert } = useContext(AppContext)

   return (
      <IonAlert
         isOpen={alert.isOpen}
         header={alertMessage(alert.status).header}
         subHeader={alertMessage(alert.status).subHeader}
         message={alert.message}
         buttons={['Cerrar']}
         onDidDismiss={() => setAlert && setAlert({ isOpen: false, message: '', status: '' })}
      ></IonAlert>
   )
}
