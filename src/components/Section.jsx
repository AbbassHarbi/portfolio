import PropTypes from 'prop-types';

export const Section = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`section-wrapper ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
