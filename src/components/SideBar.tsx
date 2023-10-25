import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

interface SideBarProps {
  menuItems?: { id: string; text: string; path: string }[] | undefined;
}

const SideBar = ({ menuItems }: SideBarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the logged_user item from localStorage
    localStorage.removeItem("logged_user");
    // Navigate to the login route
    navigate("/login");
  };

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
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
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

const LogoutButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

export default SideBar;
