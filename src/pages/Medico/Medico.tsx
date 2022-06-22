import React from 'react'
import { useState } from 'react'

import { Grid, Button } from '@mui/material'

import Cabecalho from '../../components/Cabecalho/Cabecalho';
import FormularioMedico from '../../components/Pages/Medico/FormularioMedico';

const Medico = ({ }) => {

  const [cpfAluno, setCpf] = useState<string>();
  const [altura, setAltura] = useState<string>();
  const [peso, setPeso] = useState<string>();
  const [pressaoArterial, setPressaoArterial] = useState<string>();
  const [porcentagemGordura, setPorcentagemGordura] = useState<string>();
  const [porcentagemMassaMagra, setPorcentagemMassaMagra] = useState<string>();
  const [descricao, setDescricao] = useState<string>();
  const [apto, setApto] = useState<boolean>();

  const [IMC, setIMC] = useState<number>();
  const [resultadoIMC, setResultadoIMC] = useState<string>();

  const handleCliqueBotaoIMC = (altura: string | undefined, peso: string | undefined) => {
    if (peso !== undefined && altura !== undefined) {
      let imc = parseFloat((parseFloat(peso) / (parseFloat(altura) ^ 2)).toFixed(1));
      setIMC(imc);

      if (imc < 15) setResultadoIMC('Extremamente abaixo do peso');
      else if (imc >= 15 && imc < 16) setResultadoIMC('Gravemente abaixo do peso');
      else if (imc >= 16 && imc < 18.6) setResultadoIMC('Abaixo do peso ideal');
      else if (imc >= 18.6 && imc < 25) setResultadoIMC('Faixa de peso ideal');
      else if (imc >= 25 && imc < 30) setResultadoIMC('Sobrepeso');
      else if (imc >= 30 && imc < 35) setResultadoIMC('Obesidade grau I');
      else if (imc >= 35 && imc < 40) setResultadoIMC('Obesidade grau II (grave)');
      else setResultadoIMC('Obesidade grau III (morbida)');
    }
  }

  const handleCliqueBotaoCadastro = (
    cpfAluno: string | undefined,
    altura: string | undefined,
    peso: string | undefined,
    pressaoArterial: string | undefined,
    porcentagemGordura: string | undefined,
    porcentagemMassaMagra: string | undefined,
    IMC: number | undefined,
    resultadoIMC: string | undefined,
    descricao: string | undefined,
    apto: boolean | undefined
  ) => {
    if (IMC !== undefined) {
      console.log(cpfAluno);
      console.log(altura);
      console.log(peso);
      console.log(pressaoArterial);
      console.log(porcentagemGordura);
      console.log(porcentagemMassaMagra);
      console.log(IMC);
      console.log(resultadoIMC);
      console.log(descricao);
      if (apto != true) {
        apto = false;
        setApto(false);
      }
      console.log(apto);
    } else {
      console.log("Favor calcular IMC");
    }
  }

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
        <FormularioMedico
          setCpf={setCpf} setAltura={setAltura} setPeso={setPeso} setPressaoArterial={setPressaoArterial}
          setPorcentagemGordura={setPorcentagemGordura} setPorcentagemMassaMagra={setPorcentagemMassaMagra}
          setDescricao={setDescricao} setApto={setApto} IMC={IMC} resultadoIMC={resultadoIMC}
        />
        <Button variant='outlined' sx={{ margin: '0.5rem' }}
          onClick={() => handleCliqueBotaoIMC(altura, peso)}
        >
          {' '} Calculo do IMC {' '}
        </Button>
        <Button variant='outlined' sx={{ margin: '0.5rem' }}
          onClick={() => handleCliqueBotaoCadastro(
            cpfAluno, altura, peso, pressaoArterial,
            porcentagemGordura, porcentagemMassaMagra,
            IMC, resultadoIMC, descricao, apto
          )}
        >
          {' '} Cadastrar exame {' '}
        </Button>
      </Grid>
    </>
  );
};

export default Medico;