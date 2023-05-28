import React from "react";
import { Box, Typography } from "@mui/material";
import back22 from "../asset/back2.png";
import { useRef, useEffect, useCallback } from "react";
import Typed from "typed.js";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links } from "../constants/particles";


const Home = () => {
  const nameElement = useRef(null);
  const infoElement = useRef(null);

  const myStrings = [
    "{ I'm a FrontEnd developer }",
    "{ I'm a Web Designer }",
    "{ I'm a Computer Engineer }",
    "{I’m interested in programming frontEnd with React JS}",
  ];

  useEffect(() => {
    const typedName = new Typed(nameElement.current, {
      strings: ["  < I'm Nastaran Reshadati /> "],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });
    const infoTyped = new Typed(infoElement.current, {
      strings: myStrings,
      startDelay: 1680,
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      backDelay: 30,
      showCursor: false,
    });

    return () => {
      typedName.destroy();
      infoTyped.destroy();
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Box
        sx={{
          zIndex: 999,
          backgroundImage: `url(${back22})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "50px",
        }}
      >
        <Typography
          className="TextA"
          variant="h3"
          sx={{
            letterSpacing: "0.4rem",
            color: "#fa2356",
          }}
        >
          Hi there 👋
        </Typography>

        <Typography
          ref={nameElement}
          variant="h4"
          sx={{ letterSpacing: "0.4rem", margin: "10px 0", color: "#232222" }}
        />
        <Typography
          ref={infoElement}
          variant="h4"
          sx={{
            color: "#fa2356",
            letterSpacing: "0.3rem",
            margin: "10px 0",
          }}
        />
      </Box>

      <Particles
        id="tsparticles"
        options={links}
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </>
  );
};

export default Home;
