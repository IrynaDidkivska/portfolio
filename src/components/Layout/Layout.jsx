import { Outlet } from "react-router-dom";
import { Header } from "../Headre/Header";
import { Container } from "../../styles/Container";
import { styled } from "styled-components";

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.main};
`;
