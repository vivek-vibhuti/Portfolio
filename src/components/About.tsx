import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container px-6 mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg text-white">
            Hey there! I'm Vivek Vibhuti, a passionate Java backend developer, web designer, and graphic designer currently pursuing my B.Tech in Computer Science. With a strong foundation in data structures, algorithms, and backend development, I specialize in building efficient, scalable, and high-performance web applications.

Beyond coding, I run a Web Design & Development Agency with plans to expand into Social Media Marketing (SMMA). My goal is to create impactful digital solutions that blend creativity with technology. I'm also actively exploring blockchain development, AI integrations, and full-stack solutions to push the boundaries of what's possible.

I thrive on challenges—whether it's solving complex problems, designing intuitive user experiences, or leading innovative projects like Hackathon Connect, a platform designed to connect developers for hackathons.

Let's build something awesome together! 🚀
            </p>
            
            <div className="flex gap-4">
              <a 
                href="/resume.pdf" 
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D03AQEpWTOLE226rA/profile-displayphoto-shrink_400_400/B4DZQldfttHwAg-/0/1735795277588?e=1746057600&v=beta&t=BOYKIoapZfWFVNY3jai4XGYwPZqrepLHLGqCZSkKhPk"
              alt="Working on laptop"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;