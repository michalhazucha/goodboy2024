import React from 'react'
import { InputWrapper } from './styles'

type IProps={
  name: string;
  label: string;
  placeholder: string;
}

const Input = ( props:IProps ) => {
  const {name,label}=props
  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...props} />
    </InputWrapper>
  )
}

export default Input
