import { Box,Spacer,Text } from '@chakra-ui/react'
import React from 'react'

export const CreditCard = () => {
  return (
    <div>
      <Box w='200px' h='150px' backgroundColor='red' border='1px solid black' m='auto'>
        <Text> <span>Card No</span> 4256 7869 5970 5678  </Text>
        <Spacer/>
        <Text> <span>CardHodler</span> JohnSmith 09/20 345</Text>
      </Box>
    </div>
  )
}
