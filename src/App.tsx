import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import styled from "styled-components/macro";
import { decrement, increment } from "./features/counter/counterSlice";

function App() {
  const counterState = useSelector((state: any) => state.counter);
  const { value: count } = counterState;
  const dispatch = useDispatch();

  return (
    <Container className="App">
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div``;

export default App;
