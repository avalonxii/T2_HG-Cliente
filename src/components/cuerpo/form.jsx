import React from 'react'
import { Input,Button } from '@nextui-org/react'


export default function form() {
  return (
    <form>
        <Input
        clearable
        underlined
        labelPlaceholder="Introduce tu nombre"
        width='20rem'
        initialValue=""
      />
      <Input
        clearable
        underlined
        labelPlaceholder="Introduce tu Email"
        initialValue=""
        width='20rem'
        className='input-form'/>
      <Button bordered shadow color="gradient" >
          Gradient
        </Button>
    </form>
  )
}
