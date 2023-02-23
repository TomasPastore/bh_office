import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'


export function ProductList(){
  return (
  <List>
    <Datagrid>
      <TextField source='id' />
      <TextField source='nombre' />
      <TextField source='precio' />
      <EditButton basePath='/productos' />
      <DeleteButton basePath='/productos' />
    </Datagrid>
  </List>
  )
}

