import { Grid, Typography } from "@mui/material";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Treinos from "./components/Treinos";
import DadosAluno from "./components/DadosAluno";
import ExamesAluno from "./components/ExamesAluno";
import { useEffect, useState } from "react";
import ITreino from "../../interfaces/ITreino";
import axios from "axios";
import IAluno from "../../interfaces/IAluno";
import IPlano from "../../interfaces/IPlano";

const Aluno = ({}) => {
  const idAluno = "62d0384fd5b88fb7f200b714";

  const [aluno, setAluno] = useState<IAluno>();
  useEffect(() => {
    axios
      .get(`https://tp2-engsoft.herokuapp.com/alunos/id/${idAluno}`)
      .then((resposta) => {
        setAluno(resposta.data);
        console.log(resposta);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  const [treinos, setTreinos] = useState<ITreino[]>([]);
  useEffect(() => {
    if (aluno) {
      axios
        .get(`https://tp2-engsoft.herokuapp.com/treinos/id/${aluno.CPF}`)
        .then((resposta) => {
          setTreinos(resposta.data);
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
  }, [aluno]);

  const [planoAluno, setPlanoAluno] = useState<IPlano[]>([]);
  useEffect(() => {
    if (aluno && aluno.planos.length > 0) {
      axios
        .get(`https://tp2-engsoft.herokuapp.com/planos/id/${aluno.CPF}`)
        .then((resposta) => {
          setPlanoAluno([resposta.data]);
          console.log(resposta);
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
  }, [aluno]);

  console.log(planoAluno);
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
        {aluno && (
          <DadosAluno
            nome={aluno.nome}
            cpf={aluno.CPF}
            rg={aluno.RG}
            dataNascimento={aluno.dataNasc}
          />
        )}
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
        {aluno && <ExamesAluno exames={aluno.exames} />}
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
          {planoAluno?.map((plano) => (
            <>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginLeft: "2rem",
                }}
              >
                {`Nome do plano:${plano.nome}`}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginLeft: "2rem",
                }}
              >
                {`Descrição:${plano.descricao}`}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginLeft: "2rem",
                }}
              >
                {`Aulas:${plano.aulas}`}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginLeft: "2rem",
                }}
              >
                {`Valor: R$ ${plano.preco}`}
              </Typography>
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Aluno;
