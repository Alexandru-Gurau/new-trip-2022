import './navigation-container.styles.scss';

const NavigationContainer = ({ children }) => {
  return (
    <div className='navigation__container'>
      <h2 className='header-normal'>Start looking for your next trip</h2>
      {children}
    </div>
  );
};

export default NavigationContainer;
