import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BasicRating from "./BookRating";

export default function MediaControlCard() {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 160 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMffxrM8po0YEIaSyVMhcU90rXfUECdOdi19U729PC5g&s"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: 200 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Psychology of money
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Morgan Housel
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 2 }}>
          <BasicRating />
        </Box>
      </Box>
    </Card>
  );
}
