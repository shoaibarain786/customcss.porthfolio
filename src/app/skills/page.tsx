import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const skills = [
  { name: 'HTML', icon: 'fab fa-html5', level: 90 },
  { name: 'CSS', icon: 'fab fa-css3-alt', level: 85 },
  { name: 'JavaScript', icon: 'fab fa-js-square', level: 80 },
  { name: 'React', icon: 'fab fa-react', level: 75 },
  { name: 'Next.js', icon: 'fab fa-js-square', level: 70 },
  { name: 'Tailwind CSS', icon: 'fab fa-css3-alt', level: 75 },
  { name: 'Figma', icon: 'fab fa-figma', level: 80 },
  { name: 'Node.js', icon: 'fab fa-node', level: 70 },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skills-item">
            <i className={skill.icon}></i>
            <span className="skill-name">{skill.name}</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              >
                <span className="percentage">{skill.level}%</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;