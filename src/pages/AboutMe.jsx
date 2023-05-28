import {
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import {  ImportContacts } from "@mui/icons-material";

import avatar from "../asset/banner-right-image.png";

import Skills from "./components/Skills";
import constants from "./constants";
import { useState } from "react";
import { useEffect } from "react";

const AboutMe = () => {
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [javascript, setjavascript] = useState(0);
  const [react, setReact] = useState(0);
  const [jQuery, setJquery] = useState(0);
  const [bootstrap, setBootstrap] = useState(0);
  const [git, setGit] = useState(0);
  const [gitHub, setGitHub] = useState(0);
  const [next, setNext] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        console.log(diff);
        return Math.min(oldProgress + diff, 60);
      });
      console.log(html);
      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        console.log(diff);
        return Math.min(oldProgress + diff, 70);
      });
      setjavascript((oldProgress) => {
        const diff = Math.random() * 10;
        console.log(diff);
        return Math.min(oldProgress + diff, 60);
      });
      setReact((oldProgress) => {
        const diff = Math.random() * 10;
        console.log(diff);
        return Math.min(oldProgress + diff, 60);
      });
      setJquery((oldProgress) => {
        const diff = Math.random() * 10;
        console.log(diff);
        return Math.min(oldProgress + diff, 70);
      });
    
      setBootstrap((oldProgress) => {
        const diff = Math.random() * 10;
        console.log(diff);
        return Math.min(oldProgress + diff, 80);
      });
      setGit((oldProgress) => {
        const diff = Math.random() * 10;
        console.log(diff);
        return Math.min(oldProgress + diff, 50);
      });
      setGitHub((oldProgress) => {
        const diff = Math.random() * 10;
        console.log(diff);
        return Math.min(oldProgress + diff, 50);
      });
      setNext((oldProgress) => {
        const diff = Math.random() * 10;
        console.log(diff);
        return Math.min(oldProgress + diff, 40);
      });
    }, 200);
    return () => {
      clearInterval(timer);
    };
  });

  console.log(constants.html);
  return (
    <Card
      sx={{
        backgroundColor: "whiteSmoke",
        paddingTop: "20px",
        overflowY: "auto",
      }}
    >
      <CardContent>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Grid xs={12} sm={18} md={8} lg={8} xl={8}>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "#DF8EDB" }}
            >
              <Typography variant="h5" sx={{ margin: "13px 0", color : 'purple'}}>
              ...بهترین ها از بهترین تصمیم حاصل می شود
              </Typography>
              من نسترن رشادتی هستم ، متولد 1376 ، ساکن شهر تهران و فارغ التحصیل
              مهندسی نرم افزار ، من همیشه به طراحی سایت و اپلیکیشن علاقمند بودم
              و خوشحالم که در این مسیر قدم برداشتم ، فرد مسئولیت پذیری هستم و از
              یادگیری مطالب جدیدو کار تیمی لذت میبرم
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
            <Avatar
              src={avatar}
              variant="rounded"
              sx={{
                height: "100%",
                width: "100%",
                margin: "0 auto",
                display: {
                  xl: "block",
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                },
              }}
            >
              NR
            </Avatar>
          </Grid>
        </Grid>
        
        <Grid container my={8}>
          <Grid
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={10}
            sx={{
              // backgroundColor: "#DF8EDB",
              borderRadius: "20px",
              margin: "0 auto",
            }}
          >
            <Divider
              sx={{
                borderRadius: "20px",
                py: "10px",
                "&::after,&::before": {
                  borderColor: "gray",
                },
              }}
            >
              <ImportContacts
                sx={{
                  verticalAlign: "middle",
                  marginLeft: "5px",
                  color: "#DF8EDB",
                }}
              />
              <Chip label={<h2>مهارت های من</h2>} sx={{ color: "#000" }} />
            </Divider>
          </Grid>
          <Grid
            sx={{
              borderRadius: "20px",
              margin: "30px auto",
            }}
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={10}
          >
            <Skills
              name={constants.html.name}
              color={constants.html.color}
              icon={constants.html.icon}
              precent={html}
            />
            <Skills
              name={constants.css.name}
              color={constants.css.color}
              icon={constants.css.icon}
              precent={css}
            />
            <Skills
              name={constants.javascript.name}
              color={constants.javascript.color}
              icon={constants.javascript.icon}
              precent={javascript}
            />

            <Skills
              name={constants.react.name}
              color={constants.react.color}
              icon={constants.react.icon}
              precent={react}
            />
            <Skills
              name={constants.bootstrap.name}
              color={constants.bootstrap.color}
              icon={constants.bootstrap.icon}
              precent={bootstrap}
            />
          
            <Skills
              name={constants.jquery.name}
              color={constants.jquery.color}
              icon={constants.jquery.icon}
              precent={jQuery}
            />
            <Skills
              name={constants.git.name}
              color={constants.git.color}
              icon={constants.git.icon}
              precent={git}
            />
            <Skills
              name={constants.github.name}
              color={constants.github.color}
              icon={constants.github.icon}
              precent={gitHub}
            />
            <Skills
              name={constants.next.name}
              color={constants.next.color}
              icon={constants.next.icon}
              precent={next}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AboutMe;
