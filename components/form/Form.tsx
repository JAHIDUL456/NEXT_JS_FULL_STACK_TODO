'use client';
import { format } from 'path';
import React, { Children ,ReactNode  } from 'react'
import { useRef } from 'react';


type formProps = {
    children:ReactNode;
    action:(formdata:FormData) => void;
    className?: string;
    onSubmit?: () => void; 



}

const Form = ({children,action,className,onSubmit}:formProps) => {

    const ref = useRef<HTMLFormElement>(null);
    
  return (
    <form action={async(FormData)=>{
        await action(FormData);
        ref.current?.reset(); 
    }} onSubmit={onSubmit} ref={ref}>
        {children}

    </form>
  )
}

export default Form