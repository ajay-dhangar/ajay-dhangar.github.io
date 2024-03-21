import React, { useState } from "react";
import styled from "styled-components";

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  author: string;
  link: string;
}

interface Props {
  courses: Course[];
}

const CoursesContainer = styled.div`
  margin: 20px;
`;

const FilterButtons = styled.div`
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

const CoursesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const CourseItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const CourseImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const CourseTitle = styled.h3`
  margin-bottom: 5px;
`;

const CourseDescription = styled.p`
  margin-bottom: 5px;
`;

const CourseAuthor = styled.span`
  font-style: italic;
`;

const Courses: React.FC<Props> = ({ courses }) => {
  const [filter, setFilter] = useState("all");

  const filteredCourses =
    filter === "all"
      ? courses
      : courses.filter((course) => course.category === filter);

  return (
    <CoursesContainer>
      <FilterButtons>
        <Button onClick={() => setFilter("all")}>All</Button>
        <Button onClick={() => setFilter("html")}>HTML</Button>
        <Button onClick={() => setFilter("css")}>CSS</Button>
        <Button onClick={() => setFilter("javascript")}>JavaScript</Button>
        {/* Add more buttons for other categories */}
      </FilterButtons>
      <CoursesList>
        {filteredCourses.map((course) => (
          <CourseItem key={course.id}>
            <CourseImage src={course.imageUrl} alt={course.title} />
            <CourseTitle>{course.title}</CourseTitle>
            <CourseDescription>{course.description}</CourseDescription>
            <CourseAuthor><strong>Author:</strong> {course.author}</CourseAuthor>
            <div>
              <a href={course.link} target="_blank" rel="noopener noreferrer">
                Visit Course
              </a>
            </div>
          </CourseItem>
        ))}
      </CoursesList>
    </CoursesContainer>
  );
};

export default Courses;
