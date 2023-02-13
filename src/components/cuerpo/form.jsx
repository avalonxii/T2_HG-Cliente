import React from 'react'
import { Input, Button ,Modal, useModal,Text } from '@nextui-org/react'
import { useState } from 'react'
import {addUsuario} from '../../service/api'

export default function form() {

    const { setVisible, bindings } = useModal();

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
        await addUsuario(valores)
        .then(() => {
            setValores(datos);
            setVisible(false);
        }).catch(err =>{console.error(err);})
    }
  return (
    <div className='div-registro'>
        <Input
        underlined
        label="Introduce tu nombre"
        width='20rem'
        name='nombre'
        value={nombre}
        type='text'
        onChange={(e) => handLer(e)} 
      />
      <Input
        underlined
        label='Introduce tu email'
        initialValue=""
        width='20rem'
        type='email'
        className='input-form'
        name='email'
        value={email}
        onChange={handLer} 
        />
        
      <Button bordered shadow size='lg' color="gradient" type='submit'onPress={() => setVisible(true)} className="btn-registro">
          Solicitar información
    </Button>
    <Modal
        scroll

        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            POLÍTICA DE PRIVACIDAD
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
            Aceptas nuestra política de privacidad
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Cerrar
          </Button>
          <Button auto onPress={addUser}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
