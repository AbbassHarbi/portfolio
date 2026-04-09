import { Section } from '../Section';
import { Card } from '../Card';
import { Tag } from '../Tag';
import { trackOutboundLink } from '../../utils/analytics';
import './Sections.css';

export const Projects = ({ data, id = "projects", title = "Projects" }) => {
  if (!data || !data.items || data.items.length === 0) return null;

  return (
    <Section id={id} className="animate-on-scroll">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
      </div>

      <div className="projects-grid">
        {data.items.map((item, idx) => (
          <Card key={idx} title={item.title} interactable={true} id={`proj-${idx}`}>
            <p className="card-desc">{item.description}</p>
            
            {item.technologies && (
              <div className="project-tech">
                {item.technologies.map((tech, i) => (
                   <Tag key={i}>{tech}</Tag>
                ))}
              </div>
            )}

            {item.links && (
              <div className="project-links">
                {item.links.github && (
                  <a href={item.links.github} target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundLink(item.links.github, 'github')}>
                    GitHub
                  </a>
                )}
                {item.links.writeup && (
                  <a href={item.links.writeup} target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundLink(item.links.writeup, 'writeup')}>
                    Writeup
                  </a>
                )}
                {item.links.external && (
                  <a href={item.links.external} target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundLink(item.links.external, 'external')}>
                    External Link
                  </a>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};
