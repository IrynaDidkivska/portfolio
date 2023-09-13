import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Container } from "../../styles/Container";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
