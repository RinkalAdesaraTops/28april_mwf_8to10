import React from "react";
import Mystyle from './Mystyle.module.css'
import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
const MaterialUI = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    ></Box>
  );
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <>
      <div>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">{card}</Card>
            </Box>
          </div>
        </div>
      </div>
      {/* Module css implement here */}
      <div className={Mystyle.box}>
        Lorem ipsum dolor sit amet consectetur.
      </div>
    </>
  );
};

export default MaterialUI;
