import React from 'react'
import { CalendarIcon  } from '@chakra-ui/icons'
import { Button, ButtonGroup,Box, Input,Spacer,Heading,Text ,Center,Flex,Icon} from '@chakra-ui/react'
export const Form = () => { 
  return (
    
     <Box  w="200px" margin='auto'>

    <Heading fontSize={20} marginBottom={5}>
     
      Payment Details
     </Heading>
      
      <form action="">
      <Text marginBottom={-5} >CardHodler Name </Text>
      
     <Input fontWeight="black.900 " marginBottom={3} value="john abhram"  borderBottomColor='red' variant='flushed' type="text" />
      
     <Text  color='gray.500' marginBottom={-5} >CardHodler  Number</Text>
     
     <Input  fontWeight="black.500 " value='4256 7869 5970 5678 '  borderBottomColor='red' marginBottom={3}   variant='flushed' type="text" />
    
      <Text    color='gray.500'   marginBottom={-5} >Expiry Date</Text>
       <Input  fontWeight="black.500 "  value='09/05' borderBottomColor='red' marginBottom={3}  variant='flushed' type="text" />
     
     <Flex  >

      <Text marginBottom={4} >Payment amount : </Text>
      <Text color='red'> 12 300P</Text>  
      </Flex>
<Center>

       <Button   type='submit' colorScheme='red' w = "100px" size="md" p="2px">Pay</Button>
</Center>
     
      </form>
     </Box>
     
  )
}
