import React from 'react'
import { DefaultDeserializer } from 'v8';
import DefaultLayout from '../components/DefaultLayout/DefaultLayout';

  interface Props {
    
  }

 const NotFound: React.FC<Props> = (props) => {
  return (
    <DefaultLayout> 
        <div className="text-white">
          No hay esa pagina joven!
        </div>
    </DefaultLayout>
  )
}

export default NotFound;