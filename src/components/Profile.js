// import React from "react";
// import {useNavigate} from 'react-router-dom';
// import './Profile.css'

// function Profile({ user }) {

//   return (
//     <div>
//     <div className="top-bar">
//       <div className="app-name">PSA app</div>
//     </div>
//       <h2>{user.name}'s Profile</h2>
//       <div className="user-image">
//           <img src={user.imageUrl} alt={`${user.name}'s Image`} />
//         </div>
//       <div>
//         User role: {user.role}
//         <br></br>
//         User Age: {user.age}
//         <br></br>
//         User years of experience: {user.yearsOfExperience}
//         <br></br>
//         <button onClick={navigateToLogin}>Logout</button>
//         <button onClick={navigateToFindMentor}>Find Mentor</button>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React from "react";
import {useNavigate} from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  Avatar,
  Flex,
  Button,
  Stack,
  Tag,
  ChakraProvider,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e0f7e0",
    },
  },
});

function Profile({ user }) {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/');
  };

  const navigateToFindMentor = () => {
    navigate('/recommendation');
  };

  const mentors = [
    { name: "User 1", imageUrl: "/images/mentor1.jpg" },
    { name: "User 2", imageUrl: "/images/mentor2.jpg" },
  ];
  
  return (
    <ChakraProvider theme={theme}>
      <Box p={6} position="relative">
        <Box
          bg="brand.50"
          p={4}
          boxShadow="md"
          marginBottom={6}
          borderRadius="lg"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading as="h1" size="xl">
            PSA GuidedGrowth
          </Heading>
          <Button
            onClick={navigateToLogin}
            colorScheme="teal"
          >
            Log Out
          </Button>
        </Box>
        <Flex>
          <Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar size="2xl" name={user.name} src={user.imageUrl} marginBottom="6"/>
            <Button onClick={navigateToFindMentor} mt={2} colorScheme="teal">
              Find Mentor
            </Button>
            <Flex mt={4}>
            {mentors.map((avatar, index) => (
              <Box key={index} mr={4}>
                <Avatar
                  size="md"
                  name={avatar.name}
                  src={avatar.imageUrl}
                  isRound
                />
              </Box>
            ))}
          </Flex>
          </Box>
          <Box flex="4">
            <Box
              bg="white"
              p={4}
              boxShadow="md"
              borderRadius="lg"
              borderTop="5px solid #e0f7e0"
              marginBottom="10"
              textAlign="left"
            >
              <Heading as="h2" size="xl" marginBottom="2">
                {user.name}
              </Heading>
              <Box
                bg="white"
                p={4}
                borderRadius="lg"
                textAlign="left"
              >
                <Text fontSize="lg" color="gray.600">
                  <strong>Age</strong>: {user.age}
                </Text>
                <Text fontSize="lg" color="gray.600">
                  <strong>Years of Experience</strong>: {user.yearsOfExperience}
                </Text>
                <Text fontSize="lg" color="gray.600" marginBottom="2">
                  <strong>Department</strong>: {user.department}
                </Text>
                <Text fontSize="lg" color="gray.600" marginBottom="2">
                  <strong>Role</strong>: {user.role}
                </Text>
              </Box>
            </Box>
            <Box
              bg="white"
              p={4}
              boxShadow="md"
              borderRadius="lg"
              borderTop="5px solid #e0f7e0"
              textAlign="left"
            >
              <Heading as="h2" size="lg" marginBottom="2">
                Skills
              </Heading>
              <Stack spacing={2} direction="row" marginBottom="5">
                {user.skills.map((skill, index) => (
                  <Tag key={index} colorScheme="teal">
                    {skill}
                  </Tag>
                ))}
              </Stack>
              <Heading as="h3" size="lg" marginBottom="2">
                Skills to Learn
              </Heading>
              <Stack spacing={2} direction="row" marginBottom="5">
                {user.skillsToLearn.map((skill, index) => (
                  <Tag key={index} colorScheme="blue">
                    {skill}
                  </Tag>
                ))}
              </Stack>
              <Heading as="h3" size="lg" marginBottom="2">
                Projects
              </Heading>
              <Stack spacing={2} marginBottom="2">
                {user.projects.map((project, index) => (
                  <Text key={index}>{project}</Text>
                ))}
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Profile;
  
  