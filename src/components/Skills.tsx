import React from 'react';

const skills = [
  { icon: 'fab fa-js text-warning', label: 'JavaScript' },
  { icon: 'fab fa-java text-danger', label: 'Java' },
  { icon: 'fas fa-code text-primary', label: 'C++' },
  { icon: 'fab fa-python text-info', label: 'Python' },
  { icon: 'fab fa-html5 text-orange', label: 'HTML/CSS' },
  { icon: 'fab fa-php text-primary', label: 'PHP' },
  { icon: 'fab fa-react text-info', label: 'React' },
  { icon: 'fas fa-layer-group text-white', label: 'Next.js' },
  { icon: 'fab fa-node text-success', label: 'Node.js' },
  { icon: 'fas fa-leaf text-success', label: 'SpringBoot' },
  { icon: 'fas fa-database text-success', label: 'MongoDB' },
  { icon: 'fas fa-database text-info', label: 'MySQL' },
];

const Skills: React.FC = () => (
  <section id="skills" className="section-padding">
    <div className="container">
      <h2 className="section-heading scroll-reveal">Technical Arsenal</h2>
      <div className="row g-3 scroll-reveal delay-1">
        {skills.map((skill, idx) => (
          <div className="col-6 col-md-3 col-lg-2" key={idx}>
            <div className="skill-card">
              <i className={skill.icon}></i> <span>{skill.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
