import { Button, Grid } from "@mui/material";
import { useState } from "react";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import CadastroAluno from "./components/CadastroAluno";
import Planos from "./components/Planos";
import axios from "axios";

const Secretaria = ({}) => {
  const [cpfAluno, setCpf] = useState<string>();
  const [nome, setNome] = useState<string>();
  const [rg, setRG] = useState<string>();
  const [dataNascimento, setDataNascimento] = useState<string>();
  const [numeroCartao, setNumeroCartao] = useState<string>();
  const [bandeiraCartao, setBandeiraCartao] = useState<string>();
  const [nomeDonoCartao, setNomeDonoCartao] = useState<string>();
  const [exameFeito, setExameFeito] = useState<boolean>(false);

  const handleCliqueBotaoCadastrarAluno = (
    cpfAluno: string | undefined,
    nome: string | undefined,
    rg: string | undefined,
    dataNascimento: string | undefined,
    numeroCartao: string | undefined,
    bandeiraCartao: string | undefined,
    nomeDonoCartao: string | undefined,
    exameFeito: boolean | undefined
  ) => {
    if (
      cpfAluno !== undefined &&
      nome !== undefined &&
      rg !== undefined &&
      dataNascimento !== undefined &&
      numeroCartao !== undefined &&
      bandeiraCartao !== undefined &&
      nomeDonoCartao !== undefined
    ) {
      const novoAluno = {
        CPFAluno: cpfAluno,
        nome: nome,
        rg: rg,
        dataNascimento: dataNascimento,
        numeroCartao: numeroCartao,
        bandeiraCartao: bandeiraCartao,
        nomeDonoCartao: nomeDonoCartao,
        exameFeito: exameFeito,
      };
      axios
        .post("https://tp2-engsoft.herokuapp.com/aluno/", novoAluno)
        .then((resposta) => {
          console.log(resposta.data);
        })
        .catch((erro) => {
          console.log(erro);
        });
    } else {
      console.log("Dados incompletos, favor preencher todos os campos!");
    }
  };

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
        <Cabecalho nomeNoCabecalho="Academia - Secretária" />
        <CadastroAluno
          setCpf={setCpf}
          setNome={setNome}
          setRG={setRG}
          setDataNascimento={setDataNascimento}
          setExameFeito={setExameFeito}
          setNumeroCartao={setNumeroCartao}
          setBandeiraCartao={setBandeiraCartao}
          setNomeDonoCartao={setNomeDonoCartao}
        />
        <Planos dados={"amanda"} />
        <Button
          variant="outlined"
          sx={{ margin: "0.5rem" }}
          onClick={() =>
            handleCliqueBotaoCadastrarAluno(
              cpfAluno,
              nome,
              rg,
              dataNascimento,
              numeroCartao,
              bandeiraCartao,
              nomeDonoCartao,
              exameFeito
            )
          }
        >
          Cadastrar Aluno
        </Button>
      </Grid>
    </>
  );
};

export default Secretaria;
