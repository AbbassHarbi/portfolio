import { Section } from '../Section';
import './Sections.css';

export const SOCMethodology = ({ data }) => {
  if (!data || !data.steps || data.steps.length === 0) return null;

  return (
    <Section id="soc_methodology" className="animate-on-scroll">
      <div className="section-header">
        <h2 className="section-title">{data.title || "Methodology"}</h2>
      </div>

      <div className="methodology-flow">
        {data.steps.map((step, idx) => (
          <div key={idx} className="methodology-step">
            {step}
          </div>
        ))}
      </div>
    </Section>
  );
};
