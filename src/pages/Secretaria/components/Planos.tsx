import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FC } from "react";

interface Props {
  dados: string | undefined;
}

const Planos: FC<Props> = ({ dados }) => {
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
            Planos:
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="left"
          direction="row"
          justifyContent="left"
          padding="2rem"
          sx={{
            minHeight: "40vh",
            maxWidth: "100vw",
            border: 2,
            borderColor: "#120458",
          }}
        >
          <Grid
            item
            xs={4}
            sx={{
              height: "14rem",
              border: 2,
              borderColor: "#120458",
              backgroundColor: "aquamarine",
            }}
          >
            <TableContainer sx={{ width: "100%" }}>
              <Table size="medium" aria-label="Natação" width="100%">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Natação</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Mensal</TableCell>
                    <TableCell align="left">Semestral</TableCell>
                    <TableCell align="left">Anual</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">2x semana</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">3x semana</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody></TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              height: "14rem",
              border: 2,
              borderColor: "#120458",
              color: "#120458",
              backgroundColor: "aquamarine",
            }}
          >
            <TableContainer sx={{ width: "100%" }}>
              <Table size="medium" aria-label="Musculação" width="100%">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Musculação</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Mensal</TableCell>
                    <TableCell align="left">Semestral</TableCell>
                    <TableCell align="left">Anual</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">7x semana</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody></TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              height: "14rem",
              border: 2,
              borderColor: "#120458",
              color: "#120458",
              backgroundColor: "aquamarine",
            }}
          >
            <TableContainer sx={{ width: "100%" }}>
              <Table size="medium" aria-label="Spinning" width="100%">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Spinning</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Mensal</TableCell>
                    <TableCell align="left">Semestral</TableCell>
                    <TableCell align="left">Anual</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">3x semana</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody></TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              height: "14rem",
              border: 2,
              borderColor: "#120458",
              color: "#120458",
              backgroundColor: "aquamarine",
            }}
          >
            <TableContainer sx={{ width: "100%" }}>
              <Table size="medium" aria-label="Crossfit" width="100%">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Crossfit</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Mensal</TableCell>
                    <TableCell align="left">Semestral</TableCell>
                    <TableCell align="left">Anual</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">3x semana</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody></TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              height: "14rem",
              border: 2,
              borderColor: "#120458",
              color: "#120458",
              backgroundColor: "aquamarine",
            }}
          >
            <TableContainer sx={{ width: "100%" }}>
              <Table size="medium" aria-label="Ritmos" width="100%">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Ritmos</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Mensal</TableCell>
                    <TableCell align="left">Semestral</TableCell>
                    <TableCell align="left">Anual</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">3x semana</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody></TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Planos;
