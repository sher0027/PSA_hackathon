import React, { useState } from "react";
import {
    Flex,
    FormControl,
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
        if (username && password) {
            navigate("/profile");
        }
    };

    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            // justifyContent="center"
            minHeight="100vh"
            // backgroundColor="#EAF6E4" // Set background color to light green
            backgroundImage={`url(${process.env.PUBLIC_URL + "/Background.jpg"})`}
            backgroundSize="cover"
        >
            <Image
                src={process.env.PUBLIC_URL + "/Mentorship.png"}
                alt="Image Alt Text"
                width="45vw"
                margin="10px 0"
            />
            <Heading as="h1" size="7xl" mb={1} mt={2} color="#2F4F4F">
                FISH! Growth
            </Heading>
            <Text fontSize="15px" fontWeight="bold" mb={4} mt={2} fontFamily="Comic Sans MS">
                Find Your Guidance
            </Text>

            <FormControl>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    padding="5px 10px"
                    placeholder='Username'
                    backgroundColor="#d6f2cf"
                    width="200px"
                    borderRadius="10px"
                    borderStyle="solid"
                    margin="10px 0 15px"
                    _placeholder={{ color: "#2F4F4F", fontSize: "15px" }}
                />
            </FormControl>
            <FormControl>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    padding="5px 10px"
                    placeholder='Password'
                    backgroundColor="#d6f2cf"
                    width="200px"
                    borderRadius="10px"
                    borderStyle="solid"
                    margin="0 0 15px"
                    _placeholder={{ color: "#2F4F4F", fontSize: "15px" }}
                />
            </FormControl>
            <Button
                backgroundColor="#82B479" 
                mt={4}
                onClick={navigateToProfile}
                padding="5px 20px"
                borderRadius="10px"
                fontSize="20px"
                fontWeight="bold"
                borderColor="#2F4F4F"
                borderStyle="solid"
                width="220px"
            >
                Login
            </Button>

        </Flex>
    );
}

export default Login;
