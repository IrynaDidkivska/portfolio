import React from "react";

import { Outlet } from "react-router-dom";
import { Header } from "../Headre/Header";
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
