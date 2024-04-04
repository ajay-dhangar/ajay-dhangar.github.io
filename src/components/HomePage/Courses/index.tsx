import React from "react";
import styled, { keyframes } from "styled-components";

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

const CourseCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;

  &::after {
    border-bottom: 1px solid #666;
    content: "";
    width: 100%;
    margin-top: 8px;
    height: 1px;
    }
`;

const CourseCard = styled.div`
  padding: 3px;
  margin: 10px;
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

type Course = {
  title: string;
  description: string;
  imageUrl?: string;
};

interface CoursesProps {
  courses: Course[];
}

const Courses: React.FC<CoursesProps> = ({ courses }) => {
  return (
    <>
      <CourseCards>
        {courses.map((course) => (
          <CourseCard key={course.title}>
            {course.imageUrl && (
              <img src={course.imageUrl} alt={course.title} />
            )}
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </CourseCard>
        ))}
      </CourseCards>
    </>
  );
};

export default Courses;
