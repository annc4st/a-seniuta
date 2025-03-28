
const About = () => {
    return (
        <>     
        <section id="about" className="flex flex-col justify-center p-6 items-center gap-8 ">
        <div className="mt-10">
            <h1 className="text-4xl font-bold mx-auto text-center">Anna Seniuta</h1>
            <p className="text-base font-medium mx-auto mt-4 text-center">Full Stack Developer</p>

            </div>
           
            {/* LinkedIN and GITHUB btns */}

            <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 gap-4'>
        
            <button
              type='button'
              onClick={() => {
                const url = 'https://github.com/annc4st/';
                window.open(url, '_blank');
              }}
              className='text-white bg-indigo-400 focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-indigo-800'>
              <svg
                className='w-4 h-4 me-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z'
                  clipRule='evenodd'
                />
              </svg>
              Github
            </button>
            <button
              type='button'
              onClick={() => {
                const url = 'https://www.linkedin.com/in/anna-seniuta-a32723261/';
                window.open(url, '_blank');
              }}
              className='text-white bg-[#24292F] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30 me-2 mb-2'>
              <svg xmlns='http://www.w3.org/2000/svg' 
              className='w-4 h-4 me-2' fill='currentColor' 
              viewBox='0 0 24 24'>
                <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
              </svg>
              LinkedIn
            </button>
           
          </div>
            

            {/* PICTURE */}
            <div id="profile-pic" className="">
            <img className="rounded-md w-auto h-96" src="./as-pic.jpg" alt="profile-picture-of-website owner" />
            </div>

            <article className="">
            <p className="mb-2">
                Hi, I am Anna! </p>
                <p className="mb-2">
                  A dedicated software developer with expertise in JavaScript, .NET, Python, and modern web technologies. Transitioning from a successful career in sales and project management, I bring strong problem-solving skills, adaptability, and a keen eye for optimizing user experiences. A Northcoders bootcamp graduate with hands-on experience in React, Express.js, Django, Blazor, and SQL. Passionate about building scalable applications and collaborating in Agile teams.
                </p>
            </article>
            {/* <hr className="w-1/2 h-1 my-8 bg-slate-500 rounded dark:bg-slate-50"/> */}
        </section>

        </>
    )

}

export default About;