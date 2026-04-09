import clsx from 'clsx';
import PropTypes from 'prop-types';
import './BaseComponents.css';

export const Tag = ({ children, className }) => {
  if (!children) return null;
  
  return (
    <span className={clsx('tag', className)}>
      {children}
    </span>
  );
};

Tag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
