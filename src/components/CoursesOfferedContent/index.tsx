import React from "react";
import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  padding: 50px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CourseWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const CourseCard = styled.div`
  width: calc(33.333% - 20px);
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 2px 4px 6px rgba(90, 50, 70, 0.2);
  }

  @media screen and (max-width: 768px) {
    width: calc(80% - 20px);
  }

  @media screen and (max-width: 480px) {
    width: calc(100% - 10px);
  }
`;

const CourseTitle = styled.h3`
  margin-top: 0;
`;

const CourseDescription = styled.p`
  margin-bottom: 0;
`;

const CoursesOfferedContent = () => {
  // Define array of web development courses
  const webDevelopmentCourses = [
    {
      title: "Web Development Bootcamp",
      description:
        "Comprehensive course covering HTML, CSS, JavaScript, and popular frameworks like React and Node.js.",
    },
    {
      title: "Advanced Frontend Development",
      description:
        "Deep dive into frontend technologies including advanced CSS, responsive design, and frontend frameworks.",
    },
    {
      title: "Full Stack Web Development",
      description:
        "Master both frontend and backend development with this full stack web development course.",
    },
  ];

  return (
    <Section>
      <Container>
        <div>
          <div>
            <h2>Courses Offered</h2>
            <p>
              Explore our web development courses tailored to help you master
              frontend, backend, or full stack development.
            </p>
            <CourseWrapper>
              {webDevelopmentCourses.map((course, index) => (
                <CourseCard key={index}>
                  <CourseTitle>{course.title}</CourseTitle>
                  <CourseDescription>{course.description}</CourseDescription>
                </CourseCard>
              ))}
            </CourseWrapper>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CoursesOfferedContent;
