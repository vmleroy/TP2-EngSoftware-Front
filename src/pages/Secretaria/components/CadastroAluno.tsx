import { Checkbox, Grid, Typography } from "@mui/material";
import { FC } from "react";
import CampoDeTexto from "../../../components/CamposDeTexto/CampoDeTexto";

interface Props {
  setCpf: React.Dispatch<React.SetStateAction<string | undefined>>;
  setNome: React.Dispatch<React.SetStateAction<string | undefined>>;
  setRG: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDataNascimento: React.Dispatch<React.SetStateAction<string | undefined>>;
  setExameFeito: React.Dispatch<React.SetStateAction<boolean>>;
  setNumeroCartao: React.Dispatch<React.SetStateAction<string | undefined>>;
  setBandeiraCartao: React.Dispatch<React.SetStateAction<string | undefined>>;
  setNomeDonoCartao: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const CadastroAluno: FC<Props> = ({
  setCpf,
  setNome,
  setRG,
  setDataNascimento,
  setExameFeito,
  setNumeroCartao,
  setBandeiraCartao,
  setNomeDonoCartao,
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
            Cadastro Aluno:
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="left"
          direction="row"
          sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
        >
          <CampoDeTexto label="CPF do Aluno:" setValue={setCpf} />
          <CampoDeTexto label="Nome do Aluno:" setValue={setNome} />
          <CampoDeTexto label="RG (apenas números):" setValue={setRG} />
          <CampoDeTexto
            label="Data de Nascimento:"
            setValue={setDataNascimento}
          />
          <CampoDeTexto label="Número do cartão:" setValue={setNumeroCartao} />
          <CampoDeTexto
            label="Bandeira do cartão:"
            setValue={setBandeiraCartao}
          />
          <CampoDeTexto
            label="Nome do dono do cartão:"
            setValue={setNomeDonoCartao}
          />

          <Grid item container xs={12} alignItems="center" direction="row">
            <Typography sx={{ marginLeft: "2rem" }}>Exame Feito?</Typography>
            <Checkbox
              aria-label="Exame Feito"
              onChange={(e) => {
                setExameFeito(e.target.checked);
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CadastroAluno;
