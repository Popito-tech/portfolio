'use client';

const letterSpacing = '8px'; // Adjust this value as needed
const wordSpacing = '40px'; // Adjust this value as needed
const About = () => (
  <section  id="section2" className='max-w-screen-lg mx-auto flex flex-col 
  lg:flex-row pl-5 pr-5 lg:space-x-20 pb-[75px] lg:pb-[150px] pt-[78px] md:pt-[150px]  relative md:pr-10 items-center'>
        <img
          src="/about-img.png.webp"
          alt="hero_cover"
          className='h-[271px] w-[318px] sm:h-[350px] sm:w-[410px] rounded-xl'
        />
          <svg width="300" height="300" viewBox="0 0 300 300" className="absolute 
          lg:right-[46%] lg:bottom-[5%] right-[17%] bottom-[33%] h-0 w-0 lg:h-[300px] lg:w-[300px]  animate-spin-slow">
  {/* <!-- Background Circle --> */}
  <circle cx="150" cy="150" r="150" fill="transparent" />
  
  {/* <!-- White Circle (50% radius) --> */}
  <circle cx="150" cy="150" r="85" fill="white" />
  
  {/* <!-- Curved Text --> */}
  <path id="curve" fill="transparent" d="M150,150 m-75,0a75,75 0 1,0 150,0a75,75 0 1,0 -150,0"/>
  <text xmlSpace="preserve" style={{ letterSpacing, wordSpacing }}>
    <textPath xlinkHref="#curve">
      NEXT.JS WEB-DEVELOPER
    </textPath>
  </text>
</svg>
        <img
          src="/working-emoji.png"
          alt="working-emoji"
          className='h-0 w-0 lg:h-[60px] lg:w-[60px] absolute lg:bottom-[25%] lg:right-[58%] 
          md:bottom-[47%] md:right-[31%] bottom-[47%] right-[30%]'
        />
    <div className='space-y-6 mt-5 flex flex-col items-center'>
    <h2 className='font-extrabold  text-blue-500'>ABOUT ME</h2>
    <h3 className='text-2xl font-bold text-center'>A dedicated Next.js Developer
based in Bayonne, France</h3>
    <p className='text-gray-600 text-center lg:text-start'>As a junior Next.js developer,i possess an impressive arsenal
of skills in HTML, CSS, Javascript, Typescript, React, Node, Tailwind,
Redux, MonDB, Firebase, Mongoose, Next-auth, Nodemailer and Stripe.
 I excel in designing and maintaining responsive websites that offer a
 smooth user experience. My expertise lies in crafting dynamic, engaging
  interfaces through writing clean and optimized code and utilizing
   cutting-edge development tools and techniques. I am also a team player
    who thrives in collaborating with cross-functional teams to produce
     outstanding web applications. </p>
    </div>
  </section>

);

export default About;
