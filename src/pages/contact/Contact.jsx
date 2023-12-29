import React from "react";
import "./contact.css";
import { Paper, Grid } from "@mui/material";
import jumbo from "../../assets/jumbo.jpeg";

const Contact = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${jumbo})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      ></Grid>
    </Grid>
  );
};

export default Contact;
