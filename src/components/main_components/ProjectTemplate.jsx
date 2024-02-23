import { Card, Button} from 'flowbite-react';

const ProjectTemplate = ({project}) => {
    

    return (
        <>
        <Card className="max-w-md border border-gray-200 rounded-lg shadow">
        <img className="grayscale hover:grayscale-0" src={project.image} alt={project.title} />
        
         <h4 className="text-2xl font-bold tracking-tight mx-auto my-2 mb-2 dark:text-white">{project.title}</h4>
        <p className="font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
        <div className="inline-flex gap-2">

        {(project.link) ?
        (<a href={project.link}  target='_blanc'>
       
        <Button className="rounded-lg bg-indigo-400 p-2 text-white font-bold">
        Demo Link
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        </Button>
        </a>) : null }  
        
        <a href={project.repoLink}  target='_blanc'>
        
        <Button className="rounded-lg bg-slate-700 p-2 text-white font-bold">Repository
       
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        </Button>

        </a>
        </div>
        <div className = "mb-3">
        <ul className="flex flex-wrap">{
            project.tech.map((tech) => (
                <li key={tech}>
                <span className="font-semibold text-indigo-400 p-2">
                {tech}
                </span>

                </li>
            ))}</ul>
            </div>
        </Card>
        </>
    )

}

export default ProjectTemplate;