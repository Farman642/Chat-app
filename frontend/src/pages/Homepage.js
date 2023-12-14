import React from 'react';
import { Box, Center, Container,Text } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Login from '../components/auth/Login';
import Signup from '../components/auth/signup';

const Homepage = () => {
  return  <Container  maxW='xl' centerContent>
    <Box
    d="flex"
    justifyContent="center"
    p={3}
    bg="white"
    w="100%"
    m="40px 0 15px 0"
    borderRadius="lg"
    borderWidth="1px"
    >
    <Text fontSize="4xl" fontFamily="Work sans"> We-Chat</Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
    <Center>
    <Tabs variant='soft-rounded'>
  <TabList mb="1em">
    <Tab _selected={{ color: 'white', bg: 'blue.500'}} style={{ width: '250px' }}>Login</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.400'}}style={{ width: '250px' }}>Sign UP</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
</Center>

    </Box>

   </Container>
  
}

export default Homepage;
