import React, { useEffect, useState } from 'react';
import { mentors, users } from '../data';
import './Recommendation.css';
import { useNavigate } from 'react-router-dom';
import {
    Container, Stack,
    Badge, Button
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
        <div>
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
            <div>
                <div className="recommedation-container">
                    <h2>Mentor Recommendations</h2>
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
                </div>
            </div>
        </div>
    );
}

export default Recommendations;
