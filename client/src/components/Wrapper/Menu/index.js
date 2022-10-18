import { useState } from "react";
import className from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from "./Menu.module.scss";

import { Wrapper } from "../../Wrapper";
import MenuItem from "./MenuItem";
import Header from "./Header";

const cl = className.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], className, onChange = defaultFn }) {
  const [menu, setMenu] = useState([{ data: items }]);

  const current = menu[menu.length - 1];

  const classes = cl(
    {
      [className]: className,
    },
    "menu-list"
  );

  const rederItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setMenu((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <div>
      <Tippy
        placement="bottom-end"
        delay={[0, 500]}
        offset={[10, 10]}
        // visible
        interactive
        render={(attrs) => (
          <div className={classes} tabIndex="-1" {...attrs}>
            <Wrapper>
              {menu.length > 1 && (
                <Header
                  title="Language"
                  onBack={() => {
                    setMenu((prev) => prev.slice(0, prev.length - 1));
                  }}
                ></Header>
              )}
              {rederItems()}
            </Wrapper>
          </div>
        )}
        onHidden={() => setMenu((prev) => prev.slice(0, 1))}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Menu;
