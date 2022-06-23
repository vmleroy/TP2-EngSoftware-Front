import { Grid, Typography } from "@mui/material";
import { FC } from "react";
interface Props {
  treino: string | undefined;
}

const Treinos: FC<Props> = ({ treino }) => {
  return (
    <>
      <Grid
        container
        width="95%"
        margin="0.5rem"
        alignItems="center"
        direction="row"
        sx={{ minHeight: "25vh" }}
      >
        <Grid
          item
          xs={12}
          sx={{ minHeight: "5vh", backgroundColor: "#120458" }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "1.5rem",
              color: "white",
              margin: "1rem",
            }}
          >
            Treinos:
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="left"
          direction="column"
          sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
        ></Grid>
      </Grid>
    </>
  );
};

export default Treinos;
