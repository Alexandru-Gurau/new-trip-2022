import './dropdown-menu.styles.scss';

const DropdownMenu = ({ children }) => (
  <div className='dropdown-menu'>
    <div className='cart-items'>{children}</div>
  </div>
);

export default DropdownMenu;
