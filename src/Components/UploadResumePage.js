import React from "react";
const UploadResumePage = () => {
  const steps = [
    { label: 'Create Your Profile', isImage: true },
    { label: 'Confirm Your Profile', isImage: false },
    { label: 'Drop Resume', isImage: false },
    { label: 'Your Preferences (Optional)', isImage: false },
  ];

  return (
    <div className=" bg-[#f8f8f8] font-sans pb-32">
      <div className="max-w-6xl mx-auto p-8 pl-4">
        {/* Header Section */}
        <div className=" bg-white rounded-lg p-5">
          <div className=" ">
            <h1 className="text-[#D9292F] font-bold text-2xl font-caveat">
              Oops! Seems like you have not had a profile...
            </h1>
            <p className="mt-4 text-gray-700 font-dmsans text-sm">
              <span className="font-bold">Let’s Get Started!</span> Uploading
              your resume is the fastest way to create your profile on Kibbi.
              Our system will analyze it using AI-powered tools to:
            </p>
          </div>
          {/* Features List */}


          <ul className=" list-inside mt-4 text-gray-600 font-dmsans font-normal text-sm">
            <li><span className="bg-[#F9D627] rounded-full p-1 mr-3 text-black font-caveat font-semibold">01.</span>Automatically fill out your profile details.</li>
            <li className="mt-6"><span className="bg-[#F9D627] rounded-full p-1 mr-3 text-black font-caveat font-semibold">02.</span>Extract your skills, work experience, education, and more.</li>
            <li className="mt-6">
              <span className="bg-[#F9D627] rounded-full p-1 mr-3 text-black font-caveat font-semibold">03.</span>
              Highlight your strengths to help you stand out to employers.
            </li>
          </ul>
          <a
            href="#"
            className="text-[#0483F8] mt-3 inline-block hover:underline font-normal font-dmsans text-sm"
          >
            Learn More About How It Works {">>>>>"}
          </a>{" "}
        </div>

        {/* Steps Progress Bar */}
        <div className="bg-white rounded-lg p-5 mt-5">
          {" "}
          <div className="grid grid-cols-12">
            <div className="col-span-2 lg:flex hidden"></div>
            <div className="flex items-center justify-center lg:col-span-8 col-span-full lg:-ml-11">
              <ul className="md:flex items-center w-full max-w-4xl">
                {steps.map((step, index) => (
                  <li key={index} className="flex-1 relative">
                    <div className="flex items-center">
                      {step.isImage ? (
                        <div className="w-8 h-8 flex justify-center items-center md:ml-12 ">
                          {/* Replace with an actual image */}
                          <img
                            src="/images/Peeky 9.png"
                            alt="Step Icon"
                            className="rounded-full"
                          />
                        </div>
                      ) : (
                        <div className="w-8 h-8 flex justify-center items-center rounded-full  border border-gray-300 text-sm font-medium md:ml-12 ">
                          {index + 1}
                        </div>
                      )}
                      {index < steps.length - 1 && (
                        <div className="flex-1 h-0.5 lg:border-dotted lg:border-t-2  absolute left-1/2 -right-[26%] -translate-y-1/2 border-[#A1AEBE]"></div>
                      )}
                    </div>
                    <div className="text-center sm:mt-2 -mt-4 text-sm text-gray-700 -ml-2">{step.label}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 lg:flex hidden"></div>
          </div>


          {/* Upload Resume Section */}
          <div className=" rounded-lg p-6 mt-6">
            <h2 className="text-base font-medium text-gray-800 font-dmsans">
              Upload Your Resume
            </h2>

            <div className="border-dashed border-2 border-gray-400 rounded-md mt-4 py-5 px-10 text-center">
              <div className="flex justify-center">
              <img src="/gallery.png" alt="" className="p-4" />
              </div>
              <p className="text-gray-500 text-sm font-dmsans">
                Drop your resume here, or{" "}
                <span className="text-blue-500 hover:underline cursor-pointer">
                  Click to upload
                </span>
                <br />
                <br />
                For the best results, upload your resume in PDF, DOC, DOCX
                format. If you must use an image, ensure the text is clear.
              </p>
            </div>

            {/* Existing Resumes */}
            <div className="mt-6">
              <h3 className="text-gray-800 font-medium font-dmsans text-base">
                Or select your current resume
              </h3>
              <div className="space-y-4 mt-4">
                {[
                  { name: "Tina Nguyen’s Resume", uploaded: "Apr 22, 2023", select:true, fileSize:'162 kb' },
                  { name: "Tina Nguyen’s Resume", uploaded: "Jul 22, 2023", select:false, fileSize:'162 kb' },
                  { name: "Tina Nguyen’s Resume", uploaded: "Apr 6, 2023", select:false, fileSize:'162 kb' },
                ].map((resume, idx) => (
                  <div className="flex">
                    <input
                      type="radio"
                      name="resume"
                      id={`resume-${idx}`}
                      className={`mr-4 ${resume.select?"border-red-500":"border-gray-300"}`}
                    />
                    <div
                      key={idx}
                      className={`sm:flex items-center justify-between border  rounded-md p-4 w-full ${resume.select?"border-red-500":"border-gray-300"}`}
                    >
                      <div className="flex">
                        <img src="/images/PDF.png" className="h-12 w-12" />
                        <div className="">
                          <label
                            htmlFor={`resume-${idx}`}
                            className="text-gray-800 font-medium font-dmsans text-lg"
                          >
                            {resume.name}
                          </label>
                          <p className="text-gray-500 text-[10px] font-dmsans font-normal">
                            Uploaded on {resume.uploaded}
                          </p>
                        </div>
                      </div>



                      <div>
                      <button className="w-5 flex justify-center m-1">
                      <img
                            src="/dots.png"
                            alt="Step Icon"
                            className="rounded-full"
                          />
                      </button>
                      <p  className="text-gray-500 text-[10px] font-dmsans font-normal">
                        {resume.fileSize}
                      </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Next Button */}
          <div className="mt-8 flex md:justify-end justify-center">
            <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700">
              Next
            </button>
          </div>
        </div>
      </div >
    </div >
  );
};

export default UploadResumePage;
