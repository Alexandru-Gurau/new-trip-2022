import './button.styles.scss';

const Button = ({ children, ...otherProps }) => {
  return (
    <button className='button text-white' {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
