import { Box, Button, Center, Container, Heading, Image, Text, VStack } from '@chakra-ui/react'
import NavBar from '../common/NavBar'

export default function Home() {
  return (
    <Box mb={'5em'}>
      <NavBar></NavBar>
      <Box h={'60vh'}>
        <Center color={'white'} pos={'absolute'} w={'full'} h={'60vh'} sx={{backdropFilter: 'blur(4px)'}}>
          <VStack spacing={'1em'}>
            <Heading size={'3xl'}>Welcome to a place on the internet</Heading>
            <Text>Here you will find some things <Button ml={'1em'} variant={'outline'}>Show me</Button></Text>
            
          </VStack>
        </Center>
        <Image  mage w={'full'} h={'full'} objectFit={'cover'} src='https://images.unsplash.com/photo-1643661100639-de5cdf7bcb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='site banner'></Image>
      </Box>
      
      <VStack mt={'3em'}>
        <Heading fontWeight={'semibold'} size={'xl'}>Did you know?</Heading>
        <Container>
          <Text>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </Text>
        </Container>

      </VStack>
    </Box>
  )
}
