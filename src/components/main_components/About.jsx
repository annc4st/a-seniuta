// import profilepic from './karsten.jpg';

const About = () => {
    return (
        <>     
        <section id="about" className="flex flex-col justify-center p-6 items-center gap-8">
            <h1 className="text-4xl font-bold mx-auto my-8 text-center">Anna Seniuta</h1>
            <p>Full Stack Developer</p>
            
            <div id="profile-pic" className="">
            <img className="rounded-md w-auto h-96" src="./karsten.jpg" alt="profile-picture-of-wesite owner" />
            </div>

            <article className="w-2/3">
            <p className="mb-2">
                Hi, I am Anna! </p>
                <p className="mb-2">
                Holding an academic background in Economics I have always had an interest in coding and technical projects. 
              </p>
              <p className="mb-2"> 
              My prior professional experience spans across the fields of e-commerce, tax inspection, and accounting. 
                In addition to my full-time role at Booking.com, I have been studying in the evenings and completed a few courses in coding, which later enabled me to continue with Northcoders software engineering bootcamp.
                </p>
                <p>
                As I learnt more about the world of software, I was inspired to make a transition to become an engineer. 
                Now, having completed the Northcoders bootcamp, and working as a volunteer fullstack developer I have broadened my technical skills and have a range of projects. 
                I am seeking a role that can progress my skill set in both JavaScript and Python programming.
                </p>
            </article>
            {/* <hr className="w-1/2 h-1 my-8 bg-slate-500 rounded dark:bg-slate-50"/> */}
        </section>

        </>
    )

}

export default About;