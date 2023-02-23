import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import { ProductList } from '../components/ProductList'
import { ProductCreate } from '../components/ProductCreate'
import { ProductEdit } from '../components/ProductEdit'

export function Home() {
  return (
    <>
    <h1>Home</h1>
    <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='productos' list={ProductList} create={ProductCreate} edit={ProductEdit} />
    </Admin>
    </>
  )
}
