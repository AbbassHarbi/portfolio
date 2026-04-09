import { Section } from '../Section';
import { Button } from '../Button';
import './Sections.css';

export const About = ({ data }) => {
  if (!data) return null;

  return (
    <Section id="about" className="animate-on-scroll">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
      </div>
      
      <div className="grid-12">
        <div style={{ gridColumn: 'span 8' }}>
          <p>{data.summary}</p>
          
          <ul className="about-highlights">
            {data.highlights?.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>

          {data.download_cv && (
            <Button as="a" href={data.download_cv} target="_blank" rel="noopener noreferrer">
              Download CV
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
};
