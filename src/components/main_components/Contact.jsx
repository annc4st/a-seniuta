import HireMeForm from './HireMeForm';


const Contact = () => {
 

  return (
    <div id="contact" className="relative">
      <h2 className="text-3xl font-medium mx-auto my-4 text-center">
        Contact Me
      </h2>

      <div className="container mx-auto flex sm:flex-nowrap flex-wrap items-center gap-8 relative">
        <iframe
          width="900px"
          height="500px"
          title="map"
          className="rounded-lg"
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
          src={`https://www.google.com/maps/embed/v1/place?q=Stockport,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
        />

        <div
          id="address-actual"
          className=" md:w-1/2 m-2 bg-gray-800 rounded-lg overflow-hidden flex items-end justify-start absolute bottom-0 left-0 right-0"
        >
          {/* <div className="bg-gray-700 relative flex flex-wrap py-2 rounded shadow-md"> */}
            <div className="lg:w-1/2 px-2">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mb-2">
                ADDRESS
              </h2>
              <p className="mt-1 text-slate-100">
                Stockport <br />
                Greater Manchester
              </p>
            </div>
            <div className="lg:w-1/2 px-2 mt-2">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                annaseniuta@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-slate-100">123-456-7890</p>
            </div>
         

        </div>
        </div>

        <HireMeForm />
      </div>

  );
};

export default Contact;
