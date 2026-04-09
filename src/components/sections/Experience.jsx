import { Section } from '../Section';
import { Card } from '../Card';
import { Tag } from '../Tag';
import './Sections.css';

export const Experience = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <Section id="experience" className="animate-on-scroll">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="experience-timeline">
        {data.map((exp, idx) => (
          <Card key={idx} interactable={false}>
            <div className="experience-card-header">
              <div>
                <h3 className="experience-role">{exp.role}</h3>
                <span className="experience-company">{exp.company}</span>
              </div>
              <div className="experience-duration">{exp.duration}</div>
            </div>
            
            <ul className="experience-points">
              {exp.description_points?.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {exp.tools && (
              <div className="project-tech">
                {exp.tools.map((tool, i) => (
                   <Tag key={i}>{tool}</Tag>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};
