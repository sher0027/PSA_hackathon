import React from 'react';
import './MentorProfile.css';
import { mentors } from '../data';
import {
    Flex, Container, Stack, Text, Avatar, Heading, Tag, Box,
    Badge, Button
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


function MentorProfile({ mentor }) {
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/recommendation');
    };
    // return (
    // <div>
    // <div className="top-bar">
    //   <div className="back-button" onClick={navigateBack}>Back</div>
    //   <div className="app-name">PSA app</div>
    // </div>
    //   <h2>{mentor.name}'s Profile</h2>
    //   <div className="mentor-details">
    //     <div className="mentor-image">
    //       <img src={mentor.imageUrl} alt={`${mentor.name}'s Image`} />
    //     </div>
    //       <div className="mentor-role">{mentor.role}</div>
    //       <div className="mentor-skills">
    //         Skills:{' '}
    //         {mentor.skills.map((skill, index) => (
    //           <span key={index}> <div className="skill">{skill} </div></span>
    //         ))}
    //       </div>
    //       <button>Match</button>
    //       {/* Add more mentor-specific details here */}
    //     </div>
    //   </div>
    // );ox
    return (
        <div>
            <Flex
                flexDirection="column"
                alignItems="center"
                minHeight="100vh"
                backgroundColor="#FFFFFF"
            >
                <Container minW="100vw" p={0}>
                    <Stack
                        spacing={4}
                        direction='row'
                        alignItems="center"
                        justifyContent="space-between"
                        padding="10px 20px"
                        backgroundColor="#EAF6E4"
                    >
                        <Button size='md' onClick={navigateBack} borderRadius="30%">
                            Back
                        </Button>
                        <Badge>
                            PSA App
                        </Badge>
                    </Stack>
                </Container>

                <Flex
                    backgroundColor="#FFFFFF"
                    minW="90%"
                    margin="20px 0px"
                    borderRadius="30px"
                    backgroundImage={`url(${process.env.PUBLIC_URL + "/Background.jpg"})`}
                    backgroundSize="cover"
                    flexDirection="row"
                    padding="30px"
                >
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        width="25%"
                        borderRadius="30px"
                        backgroundColor="#EAF6E4"
                    >
                        <Flex
                            flexDirection="column"
                            alignItems="center"
                        >
                            <Avatar
                                size="xs"
                                name={mentor.name}
                                src={mentor.imageUrl}
                                borderRadius="50%"
                                boxSize="150px"
                                margin="40px 30px 30px"
                            />
                            <Text
                                margin="10px 0 20px"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                noOfLines={1}
                                fontSize="30px"
                            >
                                {mentor.name}
                            </Text>
                            <Flex
                                flexDirection="column"
                                alignItems="center"
                            >
                                <Text
                                    fontFamily="Lucida Console"
                                    color="	#708090"
                                    margin="0 0 10px"
                                    textTransform="uppercase"
                                >
                                    {mentor.location}
                                </Text>
                                <Text
                                    fontFamily="Lucida Console"
                                    color="	#708090"
                                    margin="0 0 10px"
                                >
                                    {mentor.tel}
                                </Text>
                                <Text
                                    fontFamily="Lucida Console"
                                    color="	#708090"
                                    margin="0 0 10px"
                                >
                                    {mentor.email}
                                </Text>
                                <Text
                                    margin="10px 0"
                                    as="h2"
                                    color="	#708090"
                                >
                                    Connects
                                </Text>
                            </Flex>
                            <Flex m="10px">
                                {mentors.map((avatar, index) => (
                                    <Box key={index} mr={4}>
                                        <Avatar
                                            size="md"
                                            name={avatar.name}
                                            src={avatar.imageUrl}
                                            borderRadius="50%"
                                            boxSize="50px"
                                        />
                                    </Box>
                                ))}
                            </Flex>
                        </Flex>

                    </Flex>

                    <Flex
                        // maxW="60%"
                        margin="0 20px"
                        padding="0 10px"
                        width="50%"
                        flexDirection="column"
                        justifyContent="center"
                    >
                        <Flex
                            flexDirection="column"
                            backgroundColor="#d6f0dc"
                            width="100%"
                            borderRadius="10px"
                            padding="10"
                            margin="10"
                        >
                            <Text m={0} p={10}>Age:  {mentor.age}</Text>
                            <Text m={0} p={10}>Years of Experiment:  {mentor.yearsOfExperiment}</Text>
                            <Text m={0} p={10}>Department:  {mentor.department}</Text>
                            <Text m={0} p={10}>Role:  {mentor.role}</Text>
                        </Flex>

                        <Flex
                            flexDirection="column"
                            backgroundColor="#f1f6ea"
                            width="100%"
                            borderRadius="10px"
                            padding="10"
                            margin="10"
                        >
                            <Heading as="h4" size="lg" m="10px">
                                Skills
                            </Heading>
                            <Stack spacing={2} direction="row" m="0px 10px 10px" flexWrap="wrap">
                                {mentor.skills.map((skill, index) => (
                                    <Tag key={index} backgroundColor="#219ebc" color="white" borderRadius="10px" m="0 5px 5px 0" p="5px">
                                        {skill}
                                    </Tag>
                                ))}
                            </Stack>
                            <Heading as="h4" size="lg" m="10px">
                                Skills to Learn
                            </Heading>
                            <Stack spacing={2} direction="row" m="0px 10px 10px">
                                {mentor.skillsToLearn.map((skill, index) => (
                                    <Tag key={index} backgroundColor="#8ecae6" color="white" borderRadius="10px" m="0 5px 5px 0" p="5px">
                                        {skill}
                                    </Tag>
                                ))}
                            </Stack>
                            <Heading as="h4" size="lg" m="10px">
                                Projects
                            </Heading>
                            <Stack spacing={2} m="0px 10px 10px">
                                {mentor.projects.map((project, index) => (
                                    <Text m="0" key={index}>{project}</Text>
                                ))}
                            </Stack>
                        </Flex>

                    </Flex>
                </Flex>
            </Flex>
        </div >

    );
}

export default MentorProfile;







