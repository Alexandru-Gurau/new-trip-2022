import './footer.styles.scss';
import github from '../../assets/icons/social/github.svg';
import facebook from '../../assets/icons/social/facebook.svg';
import telegram from '../../assets/icons/social/telegram.svg';
import protonmail from '../../assets/icons/social/protonmail.svg';

const Footer = () => (
  <div className='footer'>
    <div className='footer__box'>
      <h2 className='header-normal text-white'>Contact me at</h2>
      <div className='footer__contact'>
        <div className='footer__contact--item'>
          <a
            href='https://github.com'
            target='_blank'
            rel='noreferrer'
            className='contact--link'
          >
            <img src={github} alt='empty bag' className='contact--icon' />
            <p className='paragraph-normal'>Github</p>
          </a>
        </div>
        <div className='footer__contact--item'>
          <a
            href='https://ro-ro.facebook.com/'
            target='_blank'
            rel='noreferrer'
            className='contact--link'
          >
            <img src={facebook} alt='empty bag' className='contact--icon' />
            <p className='paragraph-normal'>Facebook</p>
          </a>
        </div>
        <div className='footer__contact--item'>
          <a
            href='https://telegram.org/'
            target='_blank'
            rel='noreferrer'
            className='contact--link'
          >
            <img src={telegram} alt='empty bag' className='contact--icon' />
            <p className='paragraph-normal'>Telegram</p>
          </a>
        </div>
        <div className='footer__contact--item'>
          <a
            href='https://proton.me/'
            target='_blank'
            rel='noreferrer'
            className='contact--link'
          >
            <img src={protonmail} alt='empty bag' className='contact--icon' />
            <p className='paragraph-normal'>Protonmail</p>
          </a>
        </div>
      </div>
    </div>
    <div className='footer__box'>
      <p className='paragraph-big text-white'>
        This site is created by Gurau Alexandru
      </p>
      <p className='paragraph-big text-white'>
        All rights are reserved ®08.2022
      </p>
    </div>
  </div>
);

export default Footer;
