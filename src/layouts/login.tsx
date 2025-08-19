// src/pages/Login.jsx
import { useState } from 'react';
import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setStatus('Please fill in all fields');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      setStatus(`Welcome back, ${res.data.name || 'User'}!`);
      console.log(res);
    } catch (err: any) {
      setStatus(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, blue.400, teal.500)"
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
        <Heading mb={6} textAlign="center" color="blue.600">
          Login
        </Heading>
        <VStack >
          <Input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Button colorScheme="blue" w="full" onClick={handleLogin}>
            Login
          </Button>
        </VStack>
        {status && <Text mt={4} textAlign="center" color="red.500">{status}</Text>}
        <Text mt={4} textAlign="center">
          Don't have an account? <Link to="/register" style={{ color: '#3182CE', fontWeight: 'bold' }}>Register</Link>
        </Text>
      </Box>
    </Box>
  );
}
