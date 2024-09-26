import React from 'react'
import { HStack, Image } from '@chakra-ui/react'
import Brand1 from '../Images/Brand1.png'
import Brand2 from '../Images/Brand2.png'
import Brand3 from '../Images/Brand3.png'
import Brand4 from '../Images/Brand4.png'
import Brand5 from '../Images/Brand5.png'

export const TopBrands = () => {
    const brands = [Brand1, Brand2, Brand3, Brand4, Brand5]
  return (
    <div id='brand'>
        <h1>Top Brands</h1>
        <HStack spacing='30px'>
            {brands.map((Brand, i)=>(
                <Image key={i} className='img' src={Brand} />
            ))}
        </HStack>
    </div>
  )
}
