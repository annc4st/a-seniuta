import ProjectTemplate from "./ProjectTemplate";
import SectionTitle from "./SectionTitle";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { useState } from "react";

const myProjects = [
  {
    id: 1,
    title: "Portfolio",
    description: "This is this portfolio web page. It is built using Vite.js, React, Tailwind CSS, some features (project card) were created using Bootstrap React components. This web page is the first version of my portfolio, so other projects and features may be added in the future.",
    tech: ["Vite.js", "React", "Node.JS", "Bootstrap", "Tailwind"],
    image: "pf-page.png",
    link: "",
    repoLink: "https://github.com/annc4st/a-seniuta",
  },
  {
    id: 2,
    title: "Business event app",
    description: "Freelance fullstack project using Express.js and React. The authetication is handled with Passport.js (Local Startegy).",
    tech: ["Express.js", "Passport.js Local Strategy", "PostgreSQL","Vite+React", "Node.JS"],
    image: "event-app.png",
    link: "https://business-event-app.netlify.app/",
    repoLink: "https://github.com/annc4st/business-event-app", 
  },

  {
    id: 3,
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
    id: 4,
    title: "NC News",
    description: `A full-stack web application. The back-end was built using Node.js, Express, and PostgreSQL, hosted on Render. The API supports CRUD operations, pagination, filtering, sorting, comment posting and deletion, and vote increment or decrement.
    The front-end is built with React and HTML/CSS, hosted on Netlify. The web application allows users to log in, filter articles by topic, and sort them by comment count, date, or likes in ascending or descending order, adding and deleting own comments`,
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
  //   {
  //     id: 4,
  //     title: 'Library',
  //     description: 'A full-stack application. The back-end was built using Django, PostgreSQL. The front-end is built with React and HTML/CSS.',
  //     tech: ['Django', 'PostgreSQL', 'React', 'CSS', 'HTML'],
  //     image: '../assets/project_pics/space_holder.png',
  //     link: '',
  //     repoLink: '',
  //   }
];



const Projects = () => {
  let [current, setCurrent] = useState(0);

let previousSlide = () => {
    if (current ===0) setCurrent(myProjects.length - 1);
    else setCurrent(current-1)
   };

 let nextSlide = () => {
    if (current ===myProjects.length-1) setCurrent(0);
    else setCurrent(current+1)
  };

  return (
    <div id="projects" className="justify-center items-center mt-12 mb-16">
    {/* TITLE component */}
     <SectionTitle title="My Projects" />

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
                >
            <ProjectTemplate project={project} />
          </div>
        </div>
      ))}
      </div>
      {/* Buttons */}
      <div className="absolute top-0 h-full w-full flex justify-between items-center px-5 text-3xl">
            <button onClick={previousSlide}>
              <FaArrowCircleLeft />
            </button>
            <button onClick={nextSlide}>
              <FaArrowCircleRight />
            </button>
          </div>
      </div>
</div>  
         
  );
};

export default Projects;


// JUST CARDS
// const Projects = () => {
//   return (
//     <>
//       <div id="projects" className="flex flex-col justify-center items-center mb-16">
//         <h2 className="text-3xl font-medium mx-auto text-center">
//           My Projects
//         </h2>

//         <div
//           className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2"
//         >
//           {myProjects.map((project) => (
//             <ProjectTemplate key={project.id} project={project} />
//           ))}
//         </div>
//       </div>

//     </>
//   );
// };
