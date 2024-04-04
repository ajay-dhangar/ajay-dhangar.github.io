import React from 'react';
import styled, {keyframes} from 'styled-components';

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

const FeatureContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;

  &::after {
    border-bottom: 1px solid #666;
    content: "";
    width: 100%;
    margin-top: 8px;
    height: 1px;
    }
`;

const FeatureItem = styled.div`
  padding: 3px;
  text-align: start;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 #ccc;
  width: 300px;
  height: 320px;
  img {
    width: 100%;
    height: 150px;
    border-radius: 5px;
    border-bottom: 1px solid #ccc;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: ${GradientAnimation} 15s ease infinite;
  }
  h3 {
    padding: 0 10px;
    font-size: 1.5rem;
    margin-top: 10px;
  }
  p {
    padding: 0 10px;
    font-size: 1rem;
    margin-top: 5px;
  }
`;

type Feature = {
  icon: string; 
  title: string;
  description: string;
};

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <FeatureContainer>      
      {features.map((feature) => (
        <FeatureItem key={feature.title}>
          <img src={feature.icon} alt={feature.title} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </FeatureItem>
      ))}
    </FeatureContainer>
  );
};

export default Features;
