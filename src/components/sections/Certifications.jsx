import { Section } from '../Section';
import { Card } from '../Card';
import './Sections.css';

export const Certifications = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <Section id="certifications" className="animate-on-scroll">
      <div className="section-header">
        <h2 className="section-title">Certifications</h2>
      </div>

      <div className="certs-grid">
        {data.map((cert, idx) => (
          <Card key={idx} interactable={false}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 className="card-title" style={{ marginBottom: '4px' }}>{cert.name}</h3>
                <span className="experience-company">{cert.issuer}</span>
              </div>
              <div>
                {cert.status === 'completed' ? (
                  <span style={{ color: 'var(--color-accent)' }}>✓</span>
                ) : (
                  <span style={{ color: 'var(--color-text-muted)' }}>⏳ In Progress</span>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
