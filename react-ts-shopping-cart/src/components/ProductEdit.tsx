import React from 'react'
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
} from 'react-admin'


export function ProductEdit() {
  return (
  <Edit title='Editar producto' >
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput source='nombre' />
      <TextInput source='precio' />
    </SimpleForm>
  </Edit>
  )
}
