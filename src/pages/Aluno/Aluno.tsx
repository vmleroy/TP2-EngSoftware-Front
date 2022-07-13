import { Grid, Typography } from "@mui/material";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Treinos from "./components/Treinos";
import DadosAluno from "./components/DadosAluno";
import ExamesAluno from "./components/ExamesAluno";
import { useEffect, useState } from "react";
import ITreino from "../../interfaces/ITreino";
import axios from "axios";
import IAluno from "../../interfaces/IAluno";

const Aluno = ({}) => {
  const [treinos, setTreinos] = useState<ITreino[]>([]);
  useEffect(() => {
    axios
      .get("https://tp2-engsoft.herokuapp.com/treinos/")
      .then((resposta) => {
        setTreinos(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  });

  const [aluno, setAluno] = useState<IAluno>();

  useEffect(() => {
    axios
      .get("https://tp2-engsoft.herokuapp.com/alunos/")
      .then((resposta) => {
        setAluno(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  });

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
        <DadosAluno
          nome={aluno.nome}
          cpf={aluno.CPF}
          rg={aluno.RG}
          idUsuario={aluno._idUsuario}
          dataNascimento={aluno.dataNasc}
        />
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
          {treinos.map((treino) => (
            <Treinos
              CPFTreino={treino.CPFTreino}
              descricao={treino.descricao}
              exercicios={treino.exercicios}
            />
          ))}
        </Grid>
        <ExamesAluno exames={aluno.exames} />
      </Grid>
    </>
  );
};

export default Aluno;
