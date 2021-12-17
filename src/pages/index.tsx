import * as React from "react";
import { styled } from "@mui/system";
import Image from "next/image";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const PageContainer = styled(Container)`
  position: relative;
  min-height: 100vh;
`;

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Image src="/comingsoon.gif" layout="fill" />
    </PageContainer>
  );
};

export default Home;
