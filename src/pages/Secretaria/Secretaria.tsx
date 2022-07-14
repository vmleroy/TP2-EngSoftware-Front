import { Button, Grid } from "@mui/material";
import { useState } from "react";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import CadastroAluno from "./components/CadastroAluno";
import Planos from "./components/Planos";
import axios from "axios";
import ICartaoDeCredito from "../../interfaces/ICartaoDeCredito";

const Secretaria = ({}) => {
  const [cpfAluno, setCpf] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [rg, setRG] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [cartao, setCartao] = useState<ICartaoDeCredito | null>(null);
  const [exameFeito, setExameFeito] = useState<boolean>(false);

  const handleCliqueBotaoCadastrarAluno = (
    cpfAluno: string,
    nome: string,
    rg: string,
    dataNascimento: string,
    cartao: ICartaoDeCredito | null,
    exameFeito: boolean
  ) => {
    if (cpfAluno && nome && rg && dataNascimento && cartao) {
      console.log("cadastro aluno");
      const novoAluno = {
        CPF: cpfAluno,
        nome: nome,
        RG: rg,
        dataNascimento: dataNascimento,
        cartao: {
          numeroCartao: cartao.numeroCartao,
          cvv: cartao.CVV,
          nomeCartao: cartao.nome,
        },
        exameFeito: exameFeito,
      };

      axios
        .post("https://tp2-engsoft.herokuapp.com/alunos/", novoAluno)
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
          setCartao={setCartao}
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
              cartao,
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
