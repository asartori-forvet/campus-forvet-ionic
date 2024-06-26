import { IonInput } from '@ionic/react'
import React from 'react'

interface InputProps {
   value: string | number;
   label?: string;
   name: string;
   disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
   value,
   label,
   name,
   disabled
}) => {

   return (
      <div className='Profile-form-input-container'>
         {label && <h5 className='Profile-form-input--label'>{label}</h5>}
         <IonInput
            className='Profile-form--input'
            name={name} disabled={disabled}
            value={value}></IonInput>
      </div>
   )
}

export default Input
