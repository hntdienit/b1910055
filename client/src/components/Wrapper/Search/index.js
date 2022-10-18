import className from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from "./Search.module.scss";

import { Wrapper } from "../../Wrapper";
import SearchItem from "./SearchItem";

const cl = className.bind(styles);

function Search({ searchResult = [], children }) {
  return (
    <div>
      <Tippy
        placement="bottom-end"
        visible={searchResult.length > 0}
        interactive
        render={(attrs) => (
          <div className={cl("input-search")} tabIndex="-1" {...attrs}>
            <Wrapper>
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </Wrapper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Search;
