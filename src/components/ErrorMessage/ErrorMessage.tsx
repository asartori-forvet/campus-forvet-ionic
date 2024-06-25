import React from 'react'
import './ErrorMessage.css'
interface ErrorMessageProps {
   text: String;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({text}) => {
  return (
    <div className='ErrorMessage-main-container'>
      <p className='ErrorMessage--text'>{text}</p>
    </div>
  )
}

export default ErrorMessage