 const Footer =() => {
    return (
       
    <footer className='rounded-lg shadow mb-4 mx-2'>
      <div className='w-full max-w-screen-xl p-4 items-center justify-center md:flex'>
        <span className='text-sm sm:text-center text-gray-400 px-6'>
          © 2024{' '}
          <a href='/' className='hover:underline'>Anna Seniuta</a>
          . All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center px-4 mt-3 text-sm font-medium sm:mt-0'>
          <li>
            <a href='#header' className='hover:underline me-4 md:me-6'>
              About
            </a>
          </li>
          <li>
            <a href='#technologies' className='hover:underline me-4 md:me-6'>
              My Tech Stack
            </a>
          </li>
          <li>
            <a href='#projects' className='hover:underline me-4 md:me-6'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:underline'>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
 
    </footer>
  );
}
 export default Footer;