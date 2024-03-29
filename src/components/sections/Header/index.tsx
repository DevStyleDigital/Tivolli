import Folhas from 'assets/svg/Folhas';
import FolhasHeader from 'assets/svg/folhasHeader';
import { HeaderStyle } from './style';

const Header = () => {
  return (
    <HeaderStyle>
      <Folhas />
      <FolhasHeader />
      <div className="hero">
        <img className="logo" src="./img/logo.png" alt="logo" />
        <img className="heroBanner" src="./img/bannerHero.jpg" alt="Hero" />
        <img className="heroBannerMobile" src="./img/bannerMobile.jpg" alt="Hero" />
      </div>
    </HeaderStyle>
  );
};
export default Header;
