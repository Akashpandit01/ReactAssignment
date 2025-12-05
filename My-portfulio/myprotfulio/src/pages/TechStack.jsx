import { useEffect, useRef, useState } from "react";
import "../styles/tech.css"; // your CSS styling

import htmlLogo from "../assets/tech/html.png";
import cssLogo from "../assets/tech/css.png";
import jsLogo from "../assets/tech/javascript.png";
import reactLogo from "../assets/tech/react.png";
import bootstrapLogo from "../assets/tech/bootstrap.jpeg";
import tailwindLogo from "../assets/tech/tailwind.png";

import javaLogo from "../assets/tech/java.png";
import springLogo from "../assets/tech/spring.png";
import nodeLogo from "../assets/tech/node.png";

import mysqlLogo from "../assets/tech/mysql.png";
import mongodbLogo from "../assets/tech/mongodb.png";
import firebaseLogo from "../assets/tech/firebase.png";

import gitLogo from "../assets/tech/git.png";
import postmanLogo from "../assets/tech/postman.png";
import vscodeLogo from "../assets/tech/vscode.jpeg";


export default function TechStack() {
  const carouselRef = useRef(null);
  const [direction, setDirection] = useState(1);

  const technologies = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React.js", logo: reactLogo },
    { name: "Bootstrap", logo: bootstrapLogo },
    { name: "Tailwind CSS", logo: tailwindLogo },

    { name: "Java", logo: javaLogo },
    { name: "Spring Boot", logo: springLogo },
    { name: "Node.js", logo: nodeLogo },

    { name: "MySQL", logo: mysqlLogo },
    { name: "MongoDB", logo: mongodbLogo },
    { name: "Firebase", logo: firebaseLogo },

    { name: "Git & GitHub", logo: gitLogo },
    { name: "Postman", logo: postmanLogo },
    { name: "VS Code", logo: vscodeLogo },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current) return;

      const container = carouselRef.current;
      container.scrollLeft += direction;

      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll || container.scrollLeft <= 0) {
        setDirection((prev) => -prev);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <section className="tech-carousel-section">
      <h2 className="text-center heading-xl">Technology Stack</h2>
      <p className="text-center subheading">Tools that I use to code, build and implement</p>

      <div className="carousel-wrapper">
        <div ref={carouselRef} className="carousel-container">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <img src={tech.logo} alt={tech.name} className="tech-icon" />
              <p className="tech-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
