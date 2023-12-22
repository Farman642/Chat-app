import React from 'react'
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import  { useState } from 'react';
import { Button } from "@chakra-ui/button";
import { useToast } from '@chakra-ui/react';
import axios from 'axios'
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
   
    const [show ,setShow] =useState(false);
    const [email ,setEmail] =useState();
    const [password ,setPassword] =useState();
    const [loading ,setLoading] =useState(false);
    const toast = useToast()
    const navigate = useNavigate();
    // const history = useHistory();
    // const { setUser } = ChatState();
    const handleClick = () => setShow(!show);
    const submitHandler = async() =>{
        setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      // setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
     
      navigate("/app");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

    

return (
    <VStack spacing={'5px'} color={'black'}>
    
    <FormControl id ='email' isRequired> 
        <FormLabel>Email</FormLabel>
        <Input 
    placeholder='Enter your email' 
    value={email}
    onChange={(e)=>{setEmail(e.target.value)}}
    /></FormControl>
     <FormControl id ='password' isRequired> 
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">

        <Input 
        type={show ? "text":"password"}
        placeholder='Enter your password' 
        value={password}
       onChange={(e)=>{setPassword(e.target.value)}}
        />
        <InputRightElement>
        <button onClick={handleClick}>
            {show ? 'Hide' :'show'}
        </button>
        </InputRightElement>
        
        
        </InputGroup>
     </FormControl>
  
    <Button
    colorScheme='blue'
    width ='100%'
    onClick={submitHandler}
    isLoading ={loading}>
        Login 
    </Button>

    <Button
    colorScheme='red'
    width ='100%'
    onClick={()=>{
        setEmail('myguestuser@gmail.com');
        setPassword('mypassword');
    }}>
        Guest User 
    </Button>
 
</VStack>
  )
}

export default Login
