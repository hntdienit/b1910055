import className from "classnames/bind";
import styles from "./Wrapper.module.scss";

const cl = className.bind(styles)

function Wrapper({children}) {
    return ( 
        <div className={cl('wrapper')}>
            {children}
        </div>
     );
}

export default Wrapper;