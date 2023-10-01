import React, { useEffect, useState } from 'react';
import { mentors, users } from '../data';
import './Recommendation.css';
import { useNavigate } from 'react-router-dom';
import {
    Container, Stack, Image,
    Badge, Button, Flex
} from "@chakra-ui/react";

function Recommendations() {

    const navigate = useNavigate();

    const navigateToMentor = (mentorId) => {
        navigate(`/mentor${mentorId}`);
    };

    const navigateBack = () => {
        navigate('/profile');
    };


    const [recommendedMentors, setRecommendedMentors] = useState([]);

    // Function to calculate the similarity score between two arrays of skills
    const calculateSimilarityScore = (userSkillsToLearn, targetSkills) => {
        const commonSkills = userSkillsToLearn.filter((skill) => targetSkills.includes(skill));
        return commonSkills.length;
    };

    useEffect(() => {
        // Calculate similarity scores and rank mentors based on skills to learn
        const mentorsWithScores = mentors.map((mentor) => {
            const skillsToLearnScore = calculateSimilarityScore(
                users[0].skillsToLearn,
                mentor.skills
            );
            return {
                ...mentor,
                skillsToLearnScore,
            };
        });

        // Sort mentors by skills to learn score in descending order
        const sortedMentors = mentorsWithScores.sort(
            (a, b) => b.skillsToLearnScore - a.skillsToLearnScore
        );

        setRecommendedMentors(sortedMentors);
    }, []);

    return (
        <div p={0}>
            <Container width="100vw" p={0} >
                <Stack
                    spacing={4}
                    direction='row'
                    alignItems="center"
                    justifyContent="space-between"
                    padding="10px 20px"
                    backgroundColor="#EAF6E4"
                    height="30px"
                    boxShadow="0 5px 10px rgba(0, 0, 0, 0.2)" 
                >
                    <Button
                        width="60px"
                        onClick={navigateBack}
                        borderRadius="10px"
                        p={6}
                        backgroundColor="transparent"
                        borderStyle="none"
                        fontSize="18px"
                    >
                        Back
                    </Button>
                    <Flex justifyContent="center">
                        <Badge fontSize="20px" fontWeight="bold" padding="10px 0 10px">
                            FISH! Growth
                        </Badge>
                        <Image src={process.env.PUBLIC_URL + "/icon.png"} width="40px" qpacity="0" margin="0 10px" />
                    </Flex>

                </Stack>
            </Container>
            <div>
                <Flex flexDirection="column" alignItems="center" backgroundImage={`url(${process.env.PUBLIC_URL + "/Background.jpg"})`} backgroundSize="cover">
                    <div className="recommedation-container" >
                        <Badge fontSize="40px" fontWeight="bold" padding="30px">
                            Mentor Recommendations
                        </Badge>
                    </div>
                    <div className="mentor-list">
                        {recommendedMentors.map((mentor) => (
                            <div key={mentor.id} className="mentor-container" onClick={() => navigateToMentor(mentor.id)}>
                                <div className="mentor-box">
                                    <div className="mentor-image">
                                        <img src={mentor.imageUrl} alt={`${mentor.name}`} />
                                    </div>
                                    <div className="mentor-details">
                                        <div className="mentor-name">{mentor.name}</div>
                                        <div className="mentor-role">{mentor.role}</div>
                                        <div className="mentor-skills">
                                            Skills:{' '}
                                            < br></br>
                                            {mentor.skills.map((skill, index) => (
                                                users[0].skillsToLearn.includes(skill) ? <div className="skill"><strong key={index}>{skill}</strong> </div> : <div className="skill"> {skill} </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="matching-score">
                                    Matching Score: <br></br> <div className="matching-score-number"> {mentor.skillsToLearnScore}
                                        <img src="/images/star.png" alt="Star" className="star-icon" /> </div>
                                </div>
                            </div>
                        ))}
                    </div></Flex>

            </div>
        </div >
    );
}
export default Recommendations;
