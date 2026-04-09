import clsx from 'clsx';
import PropTypes from 'prop-types';
import './BaseComponents.css';
import { trackInteraction } from '../utils/analytics';

export const Card = ({ title, children, className, id, interactable = false }) => {
  const handleMouseEnter = () => {
    if (interactable) {
      trackInteraction(`card-${id || title}`, 'hover');
    }
  };

  return (
    <div 
      className={clsx('card', className)} 
      onMouseEnter={handleMouseEnter}
      id={id}
    >
      {title && <h3 className="card-title">{title}</h3>}
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  interactable: PropTypes.bool
};
