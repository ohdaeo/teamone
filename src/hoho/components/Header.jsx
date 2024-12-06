import { useState } from "react";
import {
  HeaderDiv,
  HeaderLogo,
  HeaderMenuDiv,
  MainMenu,
  SubMenuDiv,
  MainMenuUl,
} from "./headerStyle";

const Header = () => {
  const [submenu, setSubmenu] = useState(false);
  const [isUsnmenu, setisUsnmenu] = useState(true);
  console.log(submenu);
  console.log(setSubmenu);
  return (
    <HeaderDiv>
      <HeaderLogo>
        <a href="#">logo</a>
      </HeaderLogo>
      <HeaderMenuDiv>
        <div>
          <MainMenuUl
            onMouseEnter={() => setSubmenu(true)}
            onMouseLeave={() => setSubmenu(false)}
          >
            <li>
              <MainMenu href="#">Menu-1</MainMenu>
            </li>
            <li>
              <MainMenu href="#">Menu-1</MainMenu>
            </li>
            <li>
              <MainMenu href="#">Menu-1</MainMenu>
            </li>
            <li>
              <MainMenu href="#">Menu-1</MainMenu>
            </li>
          </MainMenuUl>
        </div>

        {submenu ? (
          <SubMenuDiv className="submenu">
            <ul>
              <li>SubMenu-1</li>
              <li>SubMenu-1</li>
              <li>SubMenu-1</li>
              <li>SubMenu-1</li>
            </ul>
            <ul>
              <li>SubMenu-1</li>
              <li>SubMenu-1</li>
              <li>SubMenu-1</li>
              <li>SubMenu-1</li>
            </ul>
            <ul>
              <li>SubMenu-1</li>
              <li>SubMenu-1</li>
              <li>SubMenu-1</li>
              <li>SubMenu-1</li>
            </ul>
            <ul>
              <li>SubMenu-1</li>
              <li>SubMenu-1</li>
              <li>SubMenu-1</li>
              <li>SubMenu-1</li>
            </ul>
          </SubMenuDiv>
        ) : (
          ""
        )}
      </HeaderMenuDiv>
    </HeaderDiv>
  );
};

export default Header;
