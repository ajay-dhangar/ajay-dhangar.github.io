import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 40px;
`;

const EventsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const EventCard = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const EventTitle = styled.h3`
  margin-bottom: 10px;
`;

const EventDate = styled.p`
  margin-bottom: 10px;
`;

const EventDescription = styled.p`
    margin-bottom: 0;
`;

const UpcomingEvents: React.FC = () => {
  
  const upcomingEvents = [
    {
      title: 'Tech Conference 2024',
      date: 'April 15-17, 2024',
      description: 'Join us for the latest in technology trends and innovations.',
    },
    {
      title: 'Hackathon Weekend',
      date: 'May 20-22, 2024',
      description: 'Compete with teams from around the world to build the best tech solutions.',
    },
  ];

  return (
    <SectionContainer>
      <h2>Upcoming Events</h2>
      <EventsWrapper>
        {upcomingEvents.map((event, index) => (
          <EventCard key={index}>
            <EventTitle>{event.title}</EventTitle>
            <EventDate>{event.date}</EventDate>
            <EventDescription>{event.description}</EventDescription>
          </EventCard>
        ))}
      </EventsWrapper>
    </SectionContainer>
  );
};

export default UpcomingEvents;
