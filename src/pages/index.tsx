import { styled } from "@mui/system";
import Image from "next/image";
import type { NextPage } from "next";
import Container from "@mui/material/Container";

const PageContainer = styled(Container)`
  position: relative;
  max-height: 100vh;
`;

const Home: NextPage = () => {
  return (
    <PageContainer>
      <img
        src="/comingsoon.gif"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          maxHeight: "100vh",
        }}
      />
    </PageContainer>
  );
};

export default Home;
