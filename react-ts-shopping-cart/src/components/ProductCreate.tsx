import React from 'react'
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
} from 'react-admin'


export function ProductCreate(){
  return (
  <Create title='Agregar producto' >
    <SimpleForm>
      <TextInput source='id' />
      <TextInput source='nombre' />
      <TextInput source='precio' />
    </SimpleForm>
  </Create>
  )
}
