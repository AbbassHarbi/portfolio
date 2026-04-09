import { Section } from '../Section';
import { Button } from '../Button';
import './Hero.css';
import { trackInteraction } from '../../utils/analytics';

export const Hero = ({ data }) => {
  if (!data) return null;

  return (
    <Section id="hero" className="hero-section">
      <div className="hero-content animate-on-scroll is-visible">
        <h1 className="hero-title">{data.name}</h1>
        <h2 className="hero-subtitle">{data.title}</h2>
        <p className="hero-description">{data.short_description}</p>
        
        <div className="hero-actions">
          {data.cta_buttons?.map((cta, index) => (
            <Button 
              key={index}
              variant={index === 0 ? 'primary' : 'secondary'}
              as="a"
              href={cta.target}
              onClick={() => trackInteraction('hero_cta', cta.label)}
            >
              {cta.label}
            </Button>
          ))}
        </div>
      </div>
    </Section>
  );
};
