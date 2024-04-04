import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "@docusaurus/Link";

const GradientAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const HeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 10px;

  &::after {
    border-bottom: 1px solid #666;
    content: "";
    width: 100%;
    margin-top: 8px;
    height: 1px;
  }

  @media (max-width: 853px) {
    background-image: linear-gradient(
      -45deg,
      #ee7752,
      #e73c7e,
      #23a6d5,
      #23d5ab
    );
    background-size: 400% 400%;
    animation: ${GradientAnimation} 15s ease infinite;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  text-align: start;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  padding: 5px 8px;
`;
const HeroDescription = styled.p`
  font-size: 1.3rem;
  margin: 30px 0;
  padding: 5px 10px;
`;

const AnimatedButton = styled.button`
  padding: 15px 40px;
  font-size: 1.2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  color: #f2f2f2;
  background-color: #23a6d5;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #e73c7e;
    transform: translateY(-3px);
  }
`;
const HeroImageContainer = styled.div`
  max-width: 500px;
  min-width: 300px;

  @media (max-width: 853px) {
    display: none;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${GradientAnimation} 15s ease infinite;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
  margin-left: 20px;
`;

const GettingStarted = styled(Link)`
  text-decoration: none;
  color: #f2f2f2;

  &:hover {
    color: #f2f2f2;
  }
`;

const CoursesLink = styled(Link)`
  text-decoration: none;
  color: #f2f2f2;

  &:hover {
    color: #f2f2f2;
  }
`;


interface HeroProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, imageUrl }) => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroDescription>{description}</HeroDescription>
        <ButtonsContainer>
          <AnimatedButton>
            <GettingStarted to="/docs/">
              Getting Started
            </GettingStarted>
          </AnimatedButton>
          <AnimatedButton>
            <CoursesLink to="/courses/">
              Courses
            </CoursesLink>
          </AnimatedButton>
        </ButtonsContainer>
      </HeroContent>
      {imageUrl && (
        <HeroImageContainer>
          <HeroImage src={imageUrl} alt={title} />
        </HeroImageContainer>
      )}
    </HeroContainer>
  );
};

export default Hero;
