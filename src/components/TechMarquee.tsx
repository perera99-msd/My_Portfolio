import React from 'react';

const techStack = [
  { icon: 'fab fa-java', label: 'JAVA' },
  { icon: 'fab fa-react', label: 'REACT' },
  { icon: 'fas fa-layer-group', label: 'NEXT.JS' },
  { icon: 'fab fa-node', label: 'NODE.JS' },
  { icon: 'fab fa-python', label: 'PYTHON' },
  { icon: 'fas fa-leaf', label: 'SPRING BOOT' },
  { icon: 'fas fa-database', label: 'MONGODB' },
  { icon: 'fas fa-database', label: 'MYSQL' },
  { icon: 'fab fa-php', label: 'PHP' },
  { icon: 'fab fa-js', label: 'JAVASCRIPT' },
  { icon: 'fas fa-code', label: 'C++' },
];

const TechMarquee: React.FC = () => (
  <div className="tech-marquee scroll-reveal">
    <div className="track">
      <div className="content">
        {[...techStack, ...techStack].map((item, idx) => (
          <span className="tech-item" key={idx}>
            <i className={item.icon}></i> {item.label}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default TechMarquee;
