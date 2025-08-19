import { useState } from 'react';
import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Register() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');



  const handleRegister = async () => {
    if (!name || !username || !email || !password) {
      setStatus('Please fill in all fields');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', {
        name,
        username,
        email,
        password
      });
      setStatus(`Registered successfully! Welcome, ${res.data.name || name}`);
   
    
    } catch (err: any) {
      setStatus(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, teal.400, blue.500)"
      p={4}
    >
      <Box
        bg="white"
        p={8}
        borderRadius="2xl"
        boxShadow="xl"
        w="full"
        maxW="400px"
      >
        <Heading mb={6} textAlign="center" color="teal.600">
          Create Account
        </Heading>
        <VStack >
          <Input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
          <Input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <Input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Button colorScheme="teal" w="full" onClick={handleRegister}>
            Register
          </Button>
        </VStack>
        {status && <Text mt={4} textAlign="center" color="red.500">{status}</Text>}
        <Text mt={4} textAlign="center">
          Already have an account?{' '}
          <Text
            as="span"
            color="teal.500"
            fontWeight="bold"
            cursor="pointer"
            // onClick={() => navigate('/login')} // <--- proper navigation
          >
            <Link to="/login" >
            Login
             </Link>
          </Text>
        </Text>
      </Box>
    </Box>
  );
}
