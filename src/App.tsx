// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
// import { decrement, increment } from "./features/counter/counterSlice";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { routes } from "./routes/routes";
import RouteGuard from "./routes/RouteGuard";

function App() {
  // const counterState = useSelector((state: any) => state.counter);
  // const { value: count } = counterState;
  // const dispatch = useDispatch();

  let [appMenuList] = routes;
  const menuItems = appMenuList?.children?.map((item) => ({
    id: item?.id,
    text: item?.text,
    path: item?.path,
  }));

  return (
    <Container className="App">
      <RouteGuard>
        <SideBar menuItems={menuItems} />
        <Outlet />
      </RouteGuard>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default App;
