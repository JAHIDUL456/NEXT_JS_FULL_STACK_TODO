import React from 'react'


type buttonProps = {
    type: 'submit' | 'button' | 'reset';
    text: string;
    onClick?: () => void;
    actionButton?: boolean;
    bgColor?: string;
} 
const Button = ({type,text,onClick,actionButton,bgColor,...props}:buttonProps) => {
  return (
    <div>
        <button type={type} onClick={onClick} className={`${actionButton ? 'bg-green-400 hover:bg-green-500' : 'bg-blue-400 hover:bg-blue-500'} text-white font-bold py-2 px-4 rounded`}>

        </button>
    </div>
  )
}

export default Button