import React from 'react'


type inputprops={
    name:string,
    type:string,
    placeholder?:string,
    value?:string
}

const Input = ({name,type,placeholder,value}:inputprops) => {
  return (
    <div>

    <input name={name} type={type} placeholder={placeholder} className='block w-full p-4 mx-2 border rounded-lg text-base bg-gray-500 border-gray-800 palceholder-gray-200 '/>

    </div>
  )
}

export default Input