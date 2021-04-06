import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile(){
  return(
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>Gabriel Pereira</Text>
        <Text 
          color="gray.300" 
          fontSize="small"
        >
          gabriel9938@gmail.com</Text>
      </Box>
    
      <Avatar size="md" name="Gabriel Pereira" src="https://github.com/gabrielpdev.png" />
    </Flex>
  )
}