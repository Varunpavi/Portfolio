import React from "react";

export default function About() {
  return (
    // <div className="relative container mx-auto px-4 py-8">
    //   <span className="font-caveat absolute left-auto bottom-0 z-[-1] w-full text-[250px] md:text-[350px] opacity-5 font-semibold leading">
    //     About
    //   </span>
    //   <div className="max-w-2xl mx-auto">
    //   <h5 className='text-center font-bold text-3xl my-2'>ABOUT</h5>
    //   <p className='font-caveat font-semibold text-2xl text-center'><span className='text-primary dark:text-darkprimary'>My</span> info</p>
    //     <p className="text-lg text-gray-700 dark:text-white my-3">
    //       Hello! I'm Varunraja, a passionate full-stack developer with a focus
    //       on building scalable and user-friendly web applications. With 1 years
    //       of experience in the industry, I have honed my skills in both
    //       front-end and back-end development, allowing me to create innovative
    //       solutions that meet the needs of modern businesses.
    //     </p>
    //     <p className="text-lg text-gray-700 mt-4 dark:text-white">
    //       As a full-stack developer, I specialize in:
    //     </p>
    //     <ul className="list-disc list-inside text-lg text-gray-700 mt-2 dark:text-white">
    //       <li>
    //         Designing and developing responsive and intuitive user interfaces
    //         using modern front-end frameworks like React.js and Next.js.
    //       </li>
    //       <li>
    //         Building robust back-end systems with Node.js, Express.js, and
    //         various databases such as MySql.
    //       </li>
    //       <li>
    //         Integrating third-party APIs and services to enhance functionality
    //         and streamline workflows.
    //       </li>
    //       <li>
    //         Implementing authentication and authorization mechanisms to ensure
    //         data security and user privacy.
    //       </li>
    //       <li>
    //         Deploying applications to cloud platforms like AWS, utilizing DevOps practices for continuous integration and
    //         deployment.
    //       </li>
    //     </ul>
    //     <p className="text-lg text-gray-700 mt-4 dark:text-white">
    //       Let's connect and discuss your next project!
    //     </p>
    //   </div>
    // </div>
    <div>
      {/* <span className="font-caveat absolute text-center right-0 bottom-0 z-[-1] w-full text-[250px] md:text-[350px] opacity-5 font-semibold leading">
        About
      </span> */}

      <h1 className="text-5xl font-semibold text-gray-700 dark:text-darkprimary uppercase my-5 relative">
        About
      </h1>
      <p className="font-caveat font-semibold text-2xl my-2">
        <span className="text-primary dark:text-darkprimary">LET’S</span> Talk
        About
      </p>
      <p className="leading-loose max-w-4xl text-xl my-5">
        Hey, I'm VarunRaja, known as Varun on social media. I'm a full stack
        developer and front-end web developer. I enjoy creating portraits and
        universes inspired by what I listen to, and I'm always eager to explore
        new technologies and creative coding. Additionally, I have a passion for
        reading Mahuwa.
      </p>

      <a
        href="/Varunraja(Resume).pdf"
        target="_blank"
        className="text-2xl"
      >
        Curriculum Vitae
      </a>
    </div>
  );
}
