import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';
import { Button } from "@chakra-ui/button";
import { useToast } from '@chakra-ui/react';
import axios from 'axios'
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name ,setName] =useState();
    const [show ,setShow] =useState(false);
    const [email ,setEmail] =useState();
    const [password ,setPassword] =useState();
    const [confirmpassword ,setConfirmpassword] =useState();
    const [pic ,setPic] =useState();
    const [loading ,setLoading] =useState(false);
    const toast = useToast()
    // const history =useHistory()
    const navigate = useNavigate();

    const handleClick = () => setShow(!show);

    const postDetails =(pics)=>{

        setLoading(true);
        if(pics===undefined){
            toast({
                title: 'Please enter the Pic ',
                status: 'waring',
                duration: 9000,
                isClosable: true,
              })
              return

        }
        if(pics.type ==="image/jpeg" || pics.type ==="image/png"){
            const data = new FormData();
            data.append("file",pics);
            data.append("upload_preset","chat-app");
            data.append("cloud_name","dluzkzgc9");
            fetch("https://api.cloudinary.com/v1_1/dluzkzgc9/image/upload",{
                method:"post",
                body:data,
            }).then((res)=> res.json())
            .then((data)=>{
                setPic(data.url.toString());
                console.log(data.url.toString());
                setLoading(false)
            }).catch(err => console.log(err))

        }else{
            toast({
                title: 'Please enter the Pic ',
                status: 'waring',
                duration: 9000,
                isClosable: true,
              })
              setLoading(false)
        }
    }

    const submitHandler =async() =>{
        setLoading(true);
       if(!name|| !email||!password){
        toast({
            title: 'Please fill all the details ',
            status: 'waring',
            duration: 9000,
            isClosable: true,
          })
          setLoading(false)
          return
       }

       if(password !==confirmpassword){
        toast({
            title: 'Password dont match',
            status: 'waring',
            duration: 9000,
            isClosable: true,
          })
          
          return
       }

       try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.post(
          "/api/user",
          {
            name,
            email,
            password,
            pic,
          },
          config
        );
        console.log(data);
        toast({
          title: "Registration Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        // history.push("/chats");
        navigate("/chats");
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
        <FormControl id ='Firstname' isRequired> 
            <FormLabel>Name</FormLabel>
            <Input 
        placeholder='Enter your name' 
        onChange={(e)=>{setName(e.target.value)}}
        /></FormControl>
        <FormControl id ='email' isRequired> 
            <FormLabel>Email</FormLabel>
            <Input 
        placeholder='Enter your email' 
        onChange={(e)=>{setEmail(e.target.value)}}
        /></FormControl>
         <FormControl id ='password' isRequired> 
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">

            <Input 
            type={show ? "text":"password"}
            placeholder='Enter your password' 
           onChange={(e)=>{setPassword(e.target.value)}}
            />
            <InputRightElement>
            <button onClick={handleClick}>
                {show ? 'Hide' :'show'}
            </button>
            </InputRightElement>
            
            
            </InputGroup>
         </FormControl>
         <FormControl id ='password' isRequired> 
            <FormLabel>confirmpassword</FormLabel>
            <InputGroup size="md">

            <Input 
            type={show ? "text":"password"}
            placeholder='Enter your confirmpassword' 
           onChange={(e)=>{setConfirmpassword(e.target.value)}}
            />
            <InputRightElement>
            <button onClick={handleClick}>
                {show ? 'Hide' :'show'}
            </button>
            </InputRightElement>
            
            
            </InputGroup>
         </FormControl>
         <FormControl id='pic' isRequired>
            <FormLabel>Upload your picture </FormLabel>
            <Input
            type='file'
            accept='image/*'
            onChange={(e)=>postDetails(e.target.files[0])}
            />
         </FormControl>
        
        <Button
        colorScheme='blue'
        width ='100%'
        onClick={submitHandler}
        isLoading={loading}>
            Sign up
        </Button>
     
    </VStack>
  )
}

export default Signup
