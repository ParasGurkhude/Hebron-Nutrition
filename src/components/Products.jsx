import React from 'react'
import { Button } from '@chakra-ui/react'


export const Products = ({item}) => {
    const {id, image, name, company, price} = item
  return (
    <div className='card'>
        <img className='product--image' src={image}/>
        
        <h2>{name}</h2>
        <p>{company}</p>
        <p className='price'>{price} </p>
        <Button colorScheme='purple' className='bb' >Add to cart</Button> 
    </div>
  )
}
