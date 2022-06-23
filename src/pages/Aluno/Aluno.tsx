import { FC } from "react";
import { Grid } from "@mui/material";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Treinos from "./components/Treinos";
import DadosAluno from "./components/DadosAluno";
import Planos from "./components/Planos";
import ExamesAluno from "./components/ExamesAluno";

const Aluno = ({}) => {
  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        sx={{
          minWidth: "100vw",
          minHeight: "100vh",
        }}
      >
        <Cabecalho nomeNoCabecalho="Academia - Área do aluno" />
        <DadosAluno dados={"amanda"} />
        <Treinos treino={"amanda"} />
        <Planos dados={"amanda"} />
        <ExamesAluno dados={"amanda"} />
      </Grid>
    </>
  );
};

export default Aluno;
