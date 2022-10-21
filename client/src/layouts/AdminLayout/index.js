

import className from 'classnames/bind';
import styles from './AdminLayout.module.scss';

const cl = className.bind(styles);

function AdminLayout({ children }) {
    return ( 
        <div className={cl('wrapper', "container mt-5")}>
          <h1>admin pagse</h1>
        <div className={cl('')}>
          <div className={cl('content')}>{children}</div>
        </div>
      </div>
     );
}

export default AdminLayout;