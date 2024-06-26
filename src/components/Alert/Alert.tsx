import { IonAlert } from '@ionic/react'
import React, { useContext } from 'react'
import AppContext from '../../contexts/AppContext'
import './Alert.css'


export default function Alert() {
   const { alert, setAlert } = useContext(AppContext)

   const renderContent = () => {
      if (alert.status === 'error') {
         return {
            header: alert?.header ?? 'Error',
            subHeader: alert?.subHeader ?? 'No hemos podido enviar tus datos.',
            className: 'alert--error'
         }
      }
      if (alert.status === 'success') {
         return {
            header: alert?.header ?? 'Operación exitosa',
            subHeader: alert?.subHeader ?? 'Se han guardado los datos.',
            className: 'alert--success'
         }
      }
      if (alert.status === 'warning') {
         return {
            header: alert?.header ?? 'Atención',
            subHeader: alert?.subHeader ?? 'Esta es una operación definitiva.',
            className: 'alert--warning'
         }
      }
      return {
         header: alert?.header ?? 'Atención',
         subHeader: alert?.subHeader ?? 'Ha ocurrido una operación.',
         className: 'alert--warning'
      }
   }


   return (
      <IonAlert
         cssClass={`Alert-main-container ${renderContent().className}`}
         isOpen={alert.isOpen}
         header={renderContent().header}
         subHeader={renderContent().subHeader}
         message={alert.message}
         buttons={['Cerrar']}
         onDidDismiss={() => setAlert({
            isOpen: false,
            message: '',
            status: '',
            header: '',
            subHeader: ''
         })}
      ></IonAlert>
   )
}
