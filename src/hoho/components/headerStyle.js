import styled from "@emotion/styled";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  width: 100%;
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;
  background-color: skyblue;
`;

export const HeaderMenuDiv = styled.div`
  display: block;
`;

export const MenuDiv = styled.div`
  display: flex;
`;

export const MainMenuUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 75px;
  padding: 15px;
  position: relative;
  background-color: blue;
`;

export const MainMenu = styled.a`
  font-size: 20px;
  font-weight: 700;
`;

export const SubMenuDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
  padding: 10px;
  gap: 65px;
  position: absolute;
`;
