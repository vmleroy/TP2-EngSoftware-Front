import { Grid, Typography } from "@mui/material";
import { FC } from "react";
interface Props {
  nome: string | undefined;
  cpf: string | undefined;
  rg: string | undefined;
  idUsuario: string | undefined;
  dataNascimento: Date;
}

const DadosAluno: FC<Props> = ({
  nome,
  cpf,
  rg,
  idUsuario,
  dataNascimento,
}) => {
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
            Dados:
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="left"
          direction="column"
          sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
        >
          <Typography>{nome}</Typography>
          <Typography>{cpf}</Typography>
          <Typography>{rg}</Typography>
          <Typography>{idUsuario}</Typography>
          {/* <Typography>{dataNascimento.format("DD-MM-AAAA")}</Typography> */}
        </Grid>
      </Grid>
    </>
  );
};

export default DadosAluno;
