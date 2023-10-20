import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  justify-content: center;
  color: #242424;
`;

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <Wrapper>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </Wrapper>
  );
}
