import clsx from 'clsx';
import PropTypes from 'prop-types';
import './BaseComponents.css';

export const Button = ({ 
  variant = 'primary', 
  as = 'button', 
  href, 
  onClick, 
  children, 
  className, 
  disabled, 
  ...props 
}) => {
  const Component = as;
  
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost'
  }[variant];

  return (
    <Component 
      href={href}
      onClick={onClick}
      className={clsx(baseClasses, variantClasses, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  as: PropTypes.elementType,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
