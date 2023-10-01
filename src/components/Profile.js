import React from "react";
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Heading,
    Text,
    Avatar,
    Image,
    Flex,
    Button,
    Stack,
    Tag,
    ChakraProvider,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import './Profile.css'

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
        { name: "Person 1", imageUrl: "/images/mentor3.jpg" },
        { name: "Person 2", imageUrl: "/images/mentor2.jpg" },
        { name: "Person 2", imageUrl: "/images/mentor1.jpg" },
    ];

    return (
        <ChakraProvider theme={theme} >
            <Box p={6} position="relative" backgroundImage={`url(${process.env.PUBLIC_URL + "/Background.jpg"})`} backgroundSize="cover">
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
                    <Heading as="h1" size="xl" >
                        FISH! Growth
                    </Heading>
                    <Button
                        onClick={navigateToLogin}
                        colorScheme="teal"
                    >
                        Log Out
                    </Button>
                </Box>
                <Flex>
                    <Flex
                        flexDirection="column"
                        alignItems="center"
                        padding="0 20px">
                        <Image
                            size="xs"
                            margin="20px 0 0"
                            src={user.imageUrl}
                            boxSize="150px"
                            border="5px solid #e0f7e0"
                        />
                        <Button onClick={navigateToFindMentor} mt={3} colorScheme="teal" width="170px" height="50px" marginTop="6" fontSize="22px">
                            Find Mentor!
                        </Button>
                        <Box
                            bg="white"
                            p={4}
                            mt={10}
                            boxShadow="md"
                            borderRadius="lg"
                            borderTop="5px solid #e0f7e0"
                            textAlign="left"
                            width="190px"
                            height="290px"
                        >
                            <Heading as="h5" size="lg" marginBottom="2" p={4}>
                                Matches
                            </Heading>
                            <Flex mt={4}>
                                {mentors.map((avatar, index) => (
                                    <Box key={index} mr={2}>
                                        <Avatar
                                            size="md"
                                            name={avatar.name}
                                            src={avatar.imageUrl}
                                            borderRadius="50%"
                                        />
                                    </Box>
                                ))}
                            </Flex>
                        </Box>
                    </Flex>

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

