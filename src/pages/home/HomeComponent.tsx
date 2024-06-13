import React, { useEffect } from 'react';
import { Button, Container, Box, Typography, Card, CardContent } from '@mui/material';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useUserLogin } from '../../context/authentication';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bounce = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const GradientCard = styled(Card)`
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${fadeIn} 2s ease-in-out;
`;

const WelcomeMessage = styled(Typography)`
  font-family: 'Roboto', sans-serif;
  color: white;
`;

const LoginButton = styled(Button)`
  margin-top: 20px;
  &:hover {
    animation: ${bounce} 0.3s alternate infinite;
  }
`;

const HomeComponent = () => {
    const navigate = useNavigate();
    const authUserLogin = useUserLogin();
    useEffect(() => {
        if (authUserLogin !== null) {
            // if (authUserLogin.role === "User") {
            //     navigate("/profile", { state: {} })
            // } else if (authUserLogin.role === "Office") {
            //     navigate("/clientlist", { replace: true, state: {} })
            // }
            navigate("/profile", { state: {} })
        }
        // else {
        //     navigate("/login")
        // }
    }, [authUserLogin, navigate])
    const handleLoginClick = () => {
        navigate("/login");
    };

    return (
        <Container sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <GradientCard>
                <CardContent>
                    <WelcomeMessage variant="h4" gutterBottom>
                        Welcome to KYC Application
                    </WelcomeMessage>
                    <LoginButton variant="contained" color="primary" onClick={handleLoginClick}>
                        Login
                    </LoginButton>
                </CardContent>
            </GradientCard>
        </Container>
    );
};

export default HomeComponent;
