import { Section } from '../Section';
import { Tag } from '../Tag';
import './Sections.css';

export const Skills = ({ data }) => {
  if (!data || !data.categories) return null;

  return (
    <Section id="skills" className="animate-on-scroll">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
      </div>

      <div className="skills-grid">
        {data.categories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="skill-category-title">{category.category_name}</h3>
            <div className="skills-list">
              {category.items?.map((item, i) => (
                <Tag key={i}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
