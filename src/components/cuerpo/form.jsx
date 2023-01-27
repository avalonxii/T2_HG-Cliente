import React from 'react'
import { Input,Button } from '@nextui-org/react'
import { useState } from 'react'
import {addUsuario} from '../../service/api'
export default function form() {

    let datos = {
        nombre : '',
        email: ''
    }

    const [valores , setValores] = useState([datos]);
    let {nombre,email} = valores;


    const handLer = (e) => {
        setValores({...valores, [e.target.name]: e.target.value})
        console.log(valores);
    }

    const addUser = async(e) => {
        e.preventDefault();
        
        await addUsuario(valores)
        .then(() => {
            
        }).catch(err =>{console.error(err);})
    }
  return (
    <form onSubmit={addUser}>
        <Input
        clearable
        underlined
        labelPlaceholder="Introduce tu nombre"
        width='20rem'
        name='nombre'
        value={nombre}
        onChange={(e) => handLer(e)} 
      />
      <Input
        clearable
        underlined
        labelPlaceholder="Introduce tu Email"
        initialValue=""
        width='20rem'
        className='input-form'
        name='email'
        value={email}
        onChange={handLer} 
        />
        
      <Button bordered shadow color="gradient" type='submit'>
          Gradient
        </Button>
    </form>
  )
}
