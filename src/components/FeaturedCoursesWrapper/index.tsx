import React from "react";
import styled from "styled-components";

const FeaturedCoursesWrapper = styled.section`
  padding: 50px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const CourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const CourseCard = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const CourseTitle = styled.h3`
  margin-bottom: 10px;
`;

const CourseDescription = styled.p`
    margin-bottom: 0;
`;

const courses = [
  {
    title: "Introduction to Web Development",
    description:
      "Learn the basics of web development with HTML, CSS, and JavaScript.",
  },
  {
    title: "React.js Fundamentals",
    description:
      "Master the fundamentals of React.js and build interactive user interfaces.",
  },
  {
    title: "Node.js and Express.js",
    description:
      "Discover how to build scalable and efficient web applications using Node.js and Express.js.",
  },
];

export default function FeaturedCourses() {
  return (
    <FeaturedCoursesWrapper>
      <Container>
        <Title>Featured Courses</Title>
        <CourseList>
          {courses.map((course, index) => (
            <CourseCard key={index}>
              <CourseTitle>{course.title}</CourseTitle>
              <CourseDescription>{course.description}</CourseDescription>
            </CourseCard>
          ))}
        </CourseList>
      </Container>
    </FeaturedCoursesWrapper>
  );
}
