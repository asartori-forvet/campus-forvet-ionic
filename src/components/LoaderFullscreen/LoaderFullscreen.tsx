import { IonSpinner } from '@ionic/react'
import React from 'react'
import './LoaderFullscreen.css'

export default function LoaderFullscreen() {
   return (
      <div className='LoaderFullscreen-spinner-container'>
         <div className='LoaderFullscreen-wrapper-container'>
            < IonSpinner title='cargando' color='primary' />
            <p className='LoaderFullscreen-spinner-text'>cargando</p>
         </div>
      </div>
   )
}
