const Contact = () => {
  return (
    <>
      <div id="contact" className="">
      <h2 className="text-2xl font-medium mx-auto my-4 justify-center">Contact Me</h2>
      
        <div className="max-w-3xl">
          <p> You are welcome to contact me via:</p>
        </div>
        <div className="mx-auto container">
          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2">
            <div className="">
                <h3>Email</h3>
            </div>
            <div className="">
                <h3>Phone</h3>
            </div>
            <div className="">
                <h3>GitHub</h3>
            </div>
            <div className="">
                <h3>LinkedIn</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
