import React from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, Grid } from '@mui/material'

import Cabecalho from '../../components/Cabecalho/Cabecalho';
import CampoDeTextoLogin from '../../components/CamposDeTexto/Login/CampoDeTextoLogin';
import CampoDeTextoSenha from '../../components/CamposDeTexto/Senha/CampoDeTextoSenha';

/* const NomeFuncao/PAG: FC<IProps> = ({ props separadas por vírgula e com tipo}) => { desembola aqui as func return(desembola aqui oq visivel);};

export default NomeFuncao/PAG;
 */

const Home = ({ }) => {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>();
  const [senha, setSenha] = useState<string>();

  const handleCliqueBotao = (email: string | undefined, senha: string | undefined) => {
    console.log(email, senha);
  };

  return (
    <>
      <Grid
        container
        item
        direction='column'
        alignItems='center'
        sx={{
          minWidth: '100vw',
          minHeight: '100vh'
        }}
      >
        <Cabecalho nomeNoCabecalho='Academia' />
        <CampoDeTextoLogin setEmail={setEmail} />
        <CampoDeTextoSenha setPassword={setSenha} />
        <Button variant="outlined" sx={{ margin: "0.5rem" }}
          onClick={() => {
            handleCliqueBotao(email, senha);
          }}
        >
          {" "} Login {" "}
        </Button>
      </Grid>
    </>
  );
};

export default Home;
