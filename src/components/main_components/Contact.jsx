// import HireMeForm from './HireMeForm';
import SectionTitle from "./SectionTitle";


const Contact = () => {
 

  return (
    <div id="contact" className="relative mx-2 mt-8 mb-16">
      <SectionTitle title="Contact Me" />
      <p className="leading-relaxed mb-5">
          Thank you for taking the time to look over my portfolio website. <br/>
          Should you have any questions or would like to discuss any of my projects further, please don't hesitate to contact me using the phone or email.<br />
    
          </p>

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
          className=" md:w-1/3 m-2 bg-gray-800 rounded-lg overflow-hidden flex items-end justify-start absolute bottom-0 left-0 right-0"
        >
      
            <div className="px-2 mt-2">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:annaseniuta@gmail.com" className="text-indigo-400 leading-relaxed">
                annaseniuta@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <a href="tel:+447419810061" className="leading-relaxed text-slate-100">
              +447419810061
              </a>
            </div>
         

        </div>
        </div>

        {/* <HireMeForm /> */}
      </div>

  );
};

export default Contact;
