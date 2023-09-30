import React, { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigateToProfile = () => {
    // Here, you can add logic to validate the username and password
    // For a simple example, we'll just navigate to the profile page if both fields are filled
    if (username && password) {
      navigate("/profile");
    }
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      backgroundColor="#EAF6E4" // Set background color to light green
    >
      <Image
        src= {process.env.PUBLIC_URL + "/Mentorship.png"}// Update with the actual path to your image
        alt="Image Alt Text"
        boxSize="661px x 378px"
        mb={4} // Add margin-bottom
      />
      <Heading as="h1" size="6xl" mb={1}>
        MatchMentor PSA
      </Heading>
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Find Your Guidance
      </Text>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button
        colorScheme="green" // Use a darker green color for the button
        mt={4}
        onClick={navigateToProfile}
      >
        Login
      </Button>
    </Flex>
  );
}

export default Login;
