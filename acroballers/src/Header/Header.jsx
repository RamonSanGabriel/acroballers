import css from './Header.module.css';
import { FaBasketball } from 'react-icons/fa6';
import { address } from '../data/header';

const Header = () => {
  const { location } = address;
  return (
    <>
      <header className={css.header}>
        <h1>Acro Ballers</h1>{' '}
        <p>
          <FaBasketball />
        </p>
      </header>
      <address>
        <p>{location}</p>
      </address>
    </>
  );
};

export default Header;
