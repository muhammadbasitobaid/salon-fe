import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

interface SideBarProps {
  menuItems?: { id: string; text: string; path: string }[] | undefined;
}

const SideBar = ({ menuItems }: SideBarProps) => {
  const location = useLocation();

  return (
    <SideBarContainer>
      <SideBarList>
        {menuItems?.map((item) => (
          <SideBarListItem
            key={item?.id}
            $isActive={`/${item.path}` === location.pathname}
          >
            <SideBarLink to={item.path}>{item.text}</SideBarLink>
          </SideBarListItem>
        ))}
      </SideBarList>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div``;

const SideBarList = styled.ul`
  padding: 0;
  margin: 0;
`;

const SideBarListItem = styled.li<{
  $isActive?: boolean | undefined;
}>`
  list-style: none;
  padding: 10px;
  ${({ $isActive }) => $isActive && `background-color: grey;`}
`;

const SideBarLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export default SideBar;
