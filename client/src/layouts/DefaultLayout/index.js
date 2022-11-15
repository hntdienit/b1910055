import className from 'classnames/bind';

import Header from '../../components/User/Header';
import Footer from '../../components/User/Footer';
import styles from './DefaultLayout.module.scss';
// import Silder from '../../components/Slider';

const cl = className.bind(styles);

function DefaultLayout({children }) {
  return (
    <div className={cl('wrapper')}>
      <Header />
      {/* <Silder/> */}
      <div className={cl('')}>
        <div className={cl('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
