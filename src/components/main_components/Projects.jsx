import React, { useState } from "react";
import ProjectTemplate from "./ProjectTemplate";
import SectionTitle from "./SectionTitle";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";


const myProjects = [
  {
    id: 1,
    title: "Portfolio",
    description: "This is this portfolio web page. It is built using Vite.js, React, Tailwind CSS, some features (project card) were created using Bootstrap React components. This web page is the first version of my portfolio, so other projects and features may be added in the future.",
    tech: ["ViteJS", "React", "NodeJS", "Bootstrap", "Tailwind", 'GitHub Actions'],
    image: "pf-page.png",
    link: "",
    repoLink: "https://github.com/annc4st/a-seniuta",
  },
  {
    id: 2,
      title: "Gym Swim Workouts",
      description: `The backend and frontend of this mini app are deployed with netlify service.
       The backend utilises netlify functions and frontend communicates smoothly with the backend. Thanks to this user authorization is working well. I plan to add more to this mini project and to store there my workouts.`,
      tech: [
        "Node.JS", "Express.js",
        "MongoDB",
        "React", "CSS",
        "HTML", "JSONWebToken",
       "Netlify Functions", "Netlify Client"
      ],
      image: "workouts-app.png",
      link: "https://gymswimworkouts.netlify.app/",
      repoLink: "https://github.com/annc4st/exerciselogger-netlify"
  
   },
  
  {
    id: 3,
    title: "Business event app",
    description: "Freelance fullstack project using Express.js and React. The authetication is handled with Passport.js (Local Startegy). For the convenience users can add events to their google calendar.",
    tech: ["Express.js", "Passport.js Local Strategy", "PostgreSQL","Vite+React", "Node.JS"],
    image: "event-app.png",
    link: "",
    repoLink: "https://github.com/annc4st/business-event-app", 
  },

  {
    id: 4,
    title: "Flashcard mobile app",
    description:
      "A full-stack Flashcard revision application. The app is designed to assist students in their studies by allowing them to upload custom questions and answers for revision. The app allows to customize your own study sets according to your needs. The app has responsive design to use on your mobile device.(The project was developed by a team of six Northcoders Bootcamp students)",
    tech: [
      "React Native",
      "Mobile App",
      "Expo",
      "Node.JS",
      "Express.js",
      "MongoDB",
      "Jest",
      "Supertest",
      "TDD",
    ],
    image: "cards_project.png",
    repoLink: "https://github.com/annc4st/flash-cards-fe",
  },
  {
    id: 5,
    title: "NC News",
    description: `A full-stack web application. The API supports CRUD operations, pagination, filtering, sorting, comment posting and deletion, and vote increment or decrement.
   The web application allows users to log in, filter articles by topic, and sort them by comment count, date, or likes in ascending or descending order, adding and deleting own comments`,
    tech: [
      "Node.JS",
      "Express.js",
      "PostgreSQL",
      "Jest",
      "Supertest",
      "React",
      "CSS",
      "HTML",
      "TDD",
    ],
    image: "nc-news-page.png",
    link: "https://annas-nc-news.netlify.app/",
    repoLink: "https://github.com/annc4st/fe-nc-news",
  },
  {
    id: 6,
    title: "Helpdesk",
    description: `This web application is built with NextJS version 13, which uses new app router and server components.
     The app allows users to create tickets and view them. I plan to expand the app by connecting the database and adding auth functionality`,
    tech: [
      "NodeJS",
      "NextJS",
      "React",
      "CSS",
      "HTML",
      "Tailwind",
      "Json Server"
    ],
    image: "helpdesk-nextjs.png",
    link: "",
    repoLink: "https://github.com/annc4st/-nextjs-helpdesk",
  },
  {
    id: 7,
    title: "TodoList and Finance Logger",
    description: `This is final project for the C# Fundamentals Course. The application is built with Blazor and .NET 8. 
    I created 2 apps Todolist and Finance Logger and connected to the single database sqlite 3, creating a table for each class. `,
    tech: [
      "C#", ".NET 8", "Bootsrap 5",
      "CSS", "HTML", "Sqlite3",
      "Microsoft Entity Framework",
      
    ],
    image: "todolist-c-sharp.png",
    link: "",
    repoLink: "https://github.com/annc4st/cSharp-Fundamentals-project",
  }
 
];



const Projects = () => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    setCurrent(current === 0 ? myProjects.length - 1 : current - 1);
    };

 let nextSlide = () => {
  setCurrent(current === myProjects.length - 1 ? 0 : current + 1);
  };

  return (
    <div id="projects" className="justify-center items-center mt-12 mb-16">

     <SectionTitle title="My Projects" />

     <div className="flex justify-center mb-4">
     <button onClick={previousSlide} className="mx-2">
              <FaArrowCircleLeft />
            </button>
            <button onClick={nextSlide} className="mx-2">
              <FaArrowCircleRight />
            </button>
       </div>

        <div className="overflow-hidden relative">
          <div
            className="flex transition ease-out duration-400"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {myProjects.map((project, index) => (
              <div
                key={project.id}
                className="flex justify-center"
                style={{ flex: '0 0 100%', width: '100%' }}
              >
                <div
                  className={`${
                    index === current
                      ? 'opacity-100 transition-opacity'
                      : 'opacity-0 pointer-events-none transition-opacity'
                  }`}
                  style={index === current ? { pointerEvents: 'auto' } : { pointerEvents: 'none' }}
                >
            <ProjectTemplate project={project} />
          </div>
        </div>
      ))}
      </div>
      </div> 
</div>  
  );
};

export default Projects;


