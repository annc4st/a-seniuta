// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

const technologies = [
    'JavaScript',
    'Node.js',
    // 'TypeScript',
    'HTML',
    'CSS',
    'React',
    'Vite.js',
    'React Native',
    'Tailwind CSS',
    'Express.js',
    // 'Next.js',
    'Git',
    'GitHub',
    // 'GitHub Actions',
    'Docker',
    'Jest',
    'Supertest',
    'PostgreSQL',
    'MongoDB',
    'RESTful APIs',
    'Jira',
    'Figma',
    'Python', 
    'Django'
  ];
const TechStack = () => {
    return (
        <section id="technologies" className="flex flex-col justify-center p-6 items-center mb-3">
        <h2 className="text-3xl font-medium mx-auto my-4 text-center">TechStack</h2>
        <p className="mb-3">
        I have learnt a wide range of technical skills through continuous self-learning, coding courses, Northcoders coding bootcamp and practicing on my own. 
        </p>

        <div className="flex flex-wrap gap-3 mb-2">
          {technologies.map((tech) => {
            return (
              <button className="text-md text-white font-medium bg-indigo-400 hover:bg-indigo-800 rounded-lg p-2" key = {tech}>{tech}</button>
            )
            })
          }
        </div>
        {/* <hr className="w-1/2 h-1 my-8 bg-slate-500 rounded dark:bg-slate-50"/> */}
    </section>
    )

  }

export default TechStack;