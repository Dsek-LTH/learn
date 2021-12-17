import { styled } from "@mui/system";
import Image from "next/image";
import type { NextPage } from "next";
import Container from "@mui/material/Container";

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
